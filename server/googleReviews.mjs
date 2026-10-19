/**
 * Server-side Google Places review fetch.
 * Keep the public link formats in sync with src/data/reviewLinks.ts.
 */

/** Must match googlePlaceId and googleListingName in src/data/business.ts. */
const DEFAULT_PLACE_ID = "ChIJY_jy-dpwGasRzM7D46Z3Njg";
const LISTING_NAME = "A&E Landworx Septic & Excavation";

export function buildReviewLinks(placeId) {
  const trimmed = typeof placeId === "string" ? placeId.trim() : "";
  const id = trimmed || DEFAULT_PLACE_ID;
  const encoded = encodeURIComponent(id);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LISTING_NAME)}&query_place_id=${encoded}`;

  return {
    placeId: id,
    writeReviewUrl: `https://search.google.com/local/writereview?placeid=${encoded}`,
    reviewsUrl: mapsUrl,
    mapsUrl,
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
