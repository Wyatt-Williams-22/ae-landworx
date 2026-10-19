# A&E Landworx

Marketing website for A&E Landworx — a female owned, family operated septic,
grading, and land clearing company serving North & South Carolina.

Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a
production deploy.

## Google reviews

The Reviews section can show the business's live Google reviews. It reads
these environment variables (see `.env.example`):

| Variable | Where it is read | What it does |
| --- | --- | --- |
| `VITE_GOOGLE_PLACE_ID` | Browser, at build time | Place ID for the "Leave us a Google review" button (`https://search.google.com/local/writereview?placeid=...`) and the "See our reviews on Google" link |
| `GOOGLE_PLACE_ID` | Server, `/api/reviews` | Same Place ID, used to request reviews. Falls back to `VITE_GOOGLE_PLACE_ID` |
| `GOOGLE_PLACES_API_KEY` | Server only | Places API (New) key. Do not prefix it with `VITE_` |

Find the Place ID in [Google's Place ID finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder) for **A&E Landworx** in Union County, NC. Enable **Places API (New)** on the key.

When the key or Place ID is missing, the section stays a styled prompt with those two Google links. With no Place ID, both links open a Google Maps search for "A&E Landworx Union County NC". The site does not show placeholder or invented reviews.

On Vercel, add the variables in Project Settings before deploying. `VITE_` values are applied at build time, so redeploy after changing `VITE_GOOGLE_PLACE_ID`.

## Social links

Facebook and TikTok URLs live in `src/data/business.ts` (`facebook` and `tiktok`). Header, footer, and contact all use that one place.
