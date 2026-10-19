/**
 * Server-side Google Places review fetch.
 * Keep the public link formats in sync with src/data/reviewLinks.ts.
 */

const MAPS_SEARCH_QUERY = "A&E Landworx Union County NC";

export function buildReviewLinks(placeId) {
  const id = typeof placeId === "string" ? placeId.trim() : "";
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_SEARCH_QUERY)}`;

  if (!id) {
    return {
      placeId: "",
      writeReviewUrl: mapsSearch,
      reviewsUrl: mapsSearch,
      mapsUrl: mapsSearch,
    };
  }

  const encoded = encodeURIComponent(id);
  return {
    placeId: id,
    writeReviewUrl: `https://search.google.com/local/writereview?placeid=${encoded}`,
    reviewsUrl: `https://search.google.com/local/reviews?placeid=${encoded}`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_SEARCH_QUERY)}&query_place_id=${encoded}`,
  };
}

function normalizeReview(review) {
  const author = review?.authorAttribution ?? {};
  const authorName = typeof author.displayName === "string" ? author.displayName.trim() : "";
  if (!authorName || typeof review?.rating !== "number") return null;

  const text =
    (typeof review.text?.text === "string" && review.text.text.trim()) ||
    (typeof review.originalText?.text === "string" && review.originalText.text.trim()) ||
    "";

  const authorUrl = typeof author.uri === "string" ? author.uri : "";
  const authorPhotoUrl = typeof author.photoUri === "string" ? author.photoUri : "";

  return {
    authorName,
    authorUrl,
    authorPhotoUrl: authorPhotoUrl.startsWith("https://") ? authorPhotoUrl : "",
    rating: review.rating,
    text,
    relativeTime:
      typeof review.relativePublishTimeDescription === "string"
        ? review.relativePublishTimeDescription
        : "",
  };
}

export async function fetchGoogleReviews({ apiKey, placeId }) {
  const links = buildReviewLinks(placeId);
  const base = {
    ...links,
    configured: false,
    error: false,
    businessName: "",
    rating: null,
    userRatingCount: null,
    googleMapsUri: links.mapsUrl,
    reviews: [],
  };

  const key = typeof apiKey === "string" ? apiKey.trim() : "";
  if (!key || !links.placeId) {
    return base;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(links.placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      return { ...base, configured: true, error: true };
    }

    const data = await response.json();
    const reviews = Array.isArray(data.reviews)
      ? data.reviews.map(normalizeReview).filter(Boolean)
      : [];

    return {
      ...base,
      configured: true,
      businessName: data.displayName?.text ?? "",
      rating: typeof data.rating === "number" ? data.rating : null,
      userRatingCount:
        typeof data.userRatingCount === "number" ? data.userRatingCount : null,
      googleMapsUri:
        typeof data.googleMapsUri === "string" && data.googleMapsUri
          ? data.googleMapsUri
          : links.mapsUrl,
      reviews,
    };
  } catch {
    return { ...base, configured: true, error: true };
  } finally {
    clearTimeout(timeout);
  }
}
