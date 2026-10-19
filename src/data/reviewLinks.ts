import { business } from "./business";

/** Keep these URL formats in sync with server/googleReviews.mjs. */

export type ReviewLinks = {
  placeId: string;
  writeReviewUrl: string;
  reviewsUrl: string;
  mapsUrl: string;
};

export function buildReviewLinks(placeId: string | undefined): ReviewLinks {
  const id = placeId?.trim() || business.googlePlaceId;
  const encoded = encodeURIComponent(id);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.googleListingName)}&query_place_id=${encoded}`;

  return {
    placeId: id,
    writeReviewUrl: `https://search.google.com/local/writereview?placeid=${encoded}`,
    reviewsUrl: mapsUrl,
    mapsUrl,
  };
}
