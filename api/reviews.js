import { fetchGoogleReviews } from "../server/googleReviews.mjs";

export async function GET() {
  const result = await fetchGoogleReviews({
    apiKey: process.env.GOOGLE_PLACES_API_KEY ?? "",
    placeId: process.env.GOOGLE_PLACE_ID || process.env.VITE_GOOGLE_PLACE_ID || "",
  });

  const cacheable = result.configured && !result.error;
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": cacheable
        ? "public, s-maxage=3600, stale-while-revalidate=86400"
        : "no-store",
    },
  });
}
