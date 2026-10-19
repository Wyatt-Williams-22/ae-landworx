import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fetchGoogleReviews } from "./server/googleReviews.mjs";

function googleReviewsDevApi(env: Record<string, string>): Plugin {
  return {
    name: "google-reviews-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split("?")[0];
        if (path !== "/api/reviews") {
          next();
          return;
        }

        if (req.method !== "GET") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        const result = await fetchGoogleReviews({
          apiKey: env.GOOGLE_PLACES_API_KEY,
          placeId: env.GOOGLE_PLACE_ID || env.VITE_GOOGLE_PLACE_ID,
        });
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "no-store");
        res.end(JSON.stringify(result));
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss(), googleReviewsDevApi(env)],
  };
});
