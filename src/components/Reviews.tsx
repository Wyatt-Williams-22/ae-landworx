import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { buildReviewLinks, type ReviewLinks } from "../data/reviewLinks";

type GoogleReview = {
  authorName: string;
  authorUrl: string;
  authorPhotoUrl: string;
  rating: number;
  text: string;
  relativeTime: string;
};

type ReviewsPayload = ReviewLinks & {
  configured: boolean;
  error: boolean;
  businessName: string;
  rating: number | null;
  userRatingCount: number | null;
  googleMapsUri: string;
  reviews: GoogleReview[];
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = rating >= index + 0.75;
        const partial = !filled && rating >= index + 0.25;
        return (
          <Star
            key={index}
            aria-hidden="true"
            className={`h-4 w-4 ${
              filled || partial
                ? "fill-brand-green-500 text-brand-green-500"
                : "text-brand-ink-900/15"
            }`}
          />
        );
      })}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4A7.2 7.2 0 0 1 5 12c0-.8.1-1.6.4-2.4V6.5H1.4A12 12 0 0 0 0 12c0 1.9.5 3.8 1.4 5.5l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4A12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8Z"
      />
    </svg>
  );
}

export default function Reviews() {
  const [payload, setPayload] = useState<ReviewsPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/reviews", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Reviews request failed");
        return response.json() as Promise<ReviewsPayload>;
      })
      .then((data) => {
        setPayload(data);
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const envLinks = buildReviewLinks(import.meta.env.VITE_GOOGLE_PLACE_ID);
  const links = payload?.placeId ? payload : envLinks;
  const reviews = payload?.reviews ?? [];
  const showReviews = !loading && reviews.length > 0;

  return (
    <section id="reviews" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-purple-600">
            <GoogleMark />
            Google Reviews
          </span>
          <h2 className="font-display mt-3 text-3xl text-brand-ink-900 sm:text-4xl">
            What Neighbors Are Saying
          </h2>
          <p className="mt-4 text-lg text-brand-ink-700/80">
            A&amp;E Landworx serves Union County and the surrounding Carolinas.
            Read our Google reviews, or leave one after your project.
          </p>
          {showReviews && payload?.rating != null && (
            <p className="mt-4 text-sm font-semibold text-brand-ink-900">
              {payload.rating.toFixed(1)} out of 5
              {payload.userRatingCount != null
                ? ` · ${payload.userRatingCount} Google ${payload.userRatingCount === 1 ? "review" : "reviews"}`
                : ""}
            </p>
          )}
        </div>

        {loading && (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3" aria-hidden="true">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="h-48 animate-pulse rounded-2xl bg-brand-green-50"
              />
            ))}
          </div>
        )}

        {showReviews && (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={`${review.authorName}-${review.relativeTime}-${review.text.slice(0, 24)}`}
                className="flex h-full flex-col rounded-2xl border border-brand-ink-900/10 bg-white p-6 shadow-sm"
              >
                <Stars rating={review.rating} />
                {review.text ? (
                  <p className="mt-4 flex-1 leading-relaxed text-brand-ink-700/85">
                    {review.text}
                  </p>
                ) : (
                  <p className="mt-4 flex-1 text-brand-ink-700/60">Rated {review.rating} out of 5.</p>
                )}
                <div className="mt-5 flex items-center gap-3">
                  {review.authorPhotoUrl ? (
                    <img
                      src={review.authorPhotoUrl}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-500/15 text-sm font-bold text-brand-green-700">
                      {review.authorName.slice(0, 1)}
                    </span>
                  )}
                  <div className="min-w-0">
                    {review.authorUrl ? (
                      <a
                        href={review.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate font-semibold text-brand-ink-900 hover:text-brand-purple-600"
                      >
                        {review.authorName}
                      </a>
                    ) : (
                      <p className="truncate font-semibold text-brand-ink-900">{review.authorName}</p>
                    )}
                    {review.relativeTime && (
                      <p className="text-sm text-brand-ink-700/60">{review.relativeTime}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && reviews.length === 0 && (
          <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-brand-ink-900/10 bg-brand-green-50 px-8 py-12 text-center shadow-sm">
            <p className="text-lg leading-relaxed text-brand-ink-700/85">
              See what customers say about A&amp;E Landworx on Google, and
              tell the next neighbor how your project went.
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={links.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-ink-900/15 px-8 py-4 text-base font-bold text-brand-ink-900 transition-colors hover:border-brand-purple-500 hover:text-brand-purple-600 sm:w-auto"
          >
            <GoogleMark />
            See our reviews on Google
          </a>
          <a
            href={links.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-brand-green-500 px-8 py-4 text-base font-bold text-brand-ink-900 shadow-lg shadow-brand-green-500/20 transition-transform hover:scale-[1.03] hover:bg-brand-green-400 sm:w-auto"
          >
            Leave us a Google review
          </a>
        </div>
      </div>
    </section>
  );
}
