/** Keep these URL formats in sync with server/googleReviews.mjs. */

const MAPS_SEARCH_QUERY = "A&E Landworx Union County NC";

export type ReviewLinks = {
  placeId: string;
  writeReviewUrl: string;
  reviewsUrl: string;
  mapsUrl: string;
};

export function buildReviewLinks(placeId: string | undefined): ReviewLinks {
  const id = placeId?.trim() ?? "";
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
