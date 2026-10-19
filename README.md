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

The Reviews section links to the Google listing and can show live review text when an API key is set (see `.env.example`).

The Google listing is **A&E Landworx Septic & Excavation**. Its Place ID, `ChIJY_jy-dpwGasRzM7D46Z3Njg`, lives in `src/data/business.ts` and is used whenever the env vars below are empty. "Leave us a Google review" opens `https://search.google.com/local/writereview?placeid=...`. "See our reviews on Google" opens a Maps link with `query_place_id` for that listing.

| Variable | Where it is read | What it does |
| --- | --- | --- |
| `VITE_GOOGLE_PLACE_ID` | Browser, at build time | Optional override of the default Place ID for those two buttons |
| `GOOGLE_PLACE_ID` | Server, `/api/reviews` | Optional override used to request reviews. Falls back to `VITE_GOOGLE_PLACE_ID`, then the default Place ID |
| `GOOGLE_PLACES_API_KEY` | Server only | Places API (New) key. Required to show live review text. Do not prefix it with `VITE_` |

Enable **Places API (New)** on the key. Without the key, the buttons still open the listing and the page does not invent reviews.

On Vercel, add the variables in Project Settings before deploying. `VITE_` values are applied at build time, so redeploy after changing `VITE_GOOGLE_PLACE_ID`.

## Social links

Facebook and TikTok URLs live in `src/data/business.ts` (`facebook` and `tiktok`). Header, footer, and contact all use that one place.
