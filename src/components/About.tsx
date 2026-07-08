import { Heart, Users } from "lucide-react";
import adamEcho from "../assets/adam-echo.jpg";

export default function About() {
  return (
    <section id="about" className="bg-brand-green-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-purple-600">
              Meet the Owners
            </span>
            <h2 className="font-display mt-3 text-3xl text-brand-ink-900 sm:text-4xl">
              About A&amp;E Landworx
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-brand-ink-700/85">
              A&amp;E Landworx is proudly{" "}
              <span className="font-bold text-brand-green-700">
                female owned and family operated
              </span>
              . Adam and Echo built this company on hard work, honesty, and
              taking care of neighbors across North and South Carolina.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-brand-ink-700/85">
              We inspect, install, and repair septic systems in NC, and
              install and repair septic systems in SC. We also provide
              grading, land clearing and excavating, dig perc holes, and
              install or refresh driveways &mdash; all with the same
              hands-on, family-first approach.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
                <Heart className="h-6 w-6 shrink-0 text-brand-green-600" />
                <span className="font-semibold text-brand-ink-900">
                  Female Owned
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
                <Users className="h-6 w-6 shrink-0 text-brand-purple-600" />
                <span className="font-semibold text-brand-ink-900">
                  Family Operated
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-green-400 to-brand-purple-500 opacity-20 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={adamEcho}
                alt="Adam and Echo, owners of A&E Landworx"
                className="w-full rounded-3xl object-cover shadow-2xl ring-4 ring-white"
              />
              <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full bg-brand-ink-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg">
                Adam &amp; Echo &mdash; A&amp;E Landworx
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
