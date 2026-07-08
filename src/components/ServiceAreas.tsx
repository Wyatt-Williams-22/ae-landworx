import { MapPin } from "lucide-react";
import { serviceAreas } from "../data/business";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-brand-ink-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-green-400">
            Where We Work
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Proudly Serving the Carolinas
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A&amp;E Landworx is based in Monroe, NC and serves surrounding
            communities in North &amp; South Carolina.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-brand-green-400/50 hover:bg-white/10"
            >
              <MapPin className="h-5 w-5 shrink-0 text-brand-green-400" />
              <span className="font-semibold">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-white/60">
          Don't see your area listed? Give us a call &mdash; we may still be
          able to help.
        </p>
      </div>
    </section>
  );
}
