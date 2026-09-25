import { Phone, ShieldCheck } from "lucide-react";
import { business } from "../data/business";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-ink-900 text-white"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-purple-500/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-green-300 ring-1 ring-white/15">
            <ShieldCheck className="h-4 w-4" />
            {business.tagline}
          </span>

          <h1 className="font-display mt-6 text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Septic, Grading &amp; Land Clearing
            <span className="block text-brand-green-400">
              Done Right in the Carolinas
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/75 sm:text-xl">
            A&amp;E Landworx inspects (including POS), installs, and repairs
            septic systems — residential and commercial — plus grading, land
            clearing, excavating, perc holes, and driveways across North &amp;
            South Carolina.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={business.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green-500 px-8 py-4 text-base font-bold text-brand-ink-900 shadow-lg shadow-brand-green-500/20 transition-transform hover:scale-[1.03] hover:bg-brand-green-400 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>
            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-base font-bold text-white transition-colors hover:border-brand-purple-400 hover:text-brand-purple-300 sm:w-auto"
            >
              Get a Free Quote
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-white/60">
            {business.hours} &middot; Serving Monroe, NC &amp; the
            surrounding Carolinas
          </p>
        </div>
      </div>
    </section>
  );
}
