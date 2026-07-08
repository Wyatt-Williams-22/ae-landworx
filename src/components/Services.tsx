import {
  CircleDot,
  ClipboardCheck,
  Mountain,
  Route,
  Trees,
  Wrench,
} from "lucide-react";
import { business, services } from "../data/business";

const icons = {
  ClipboardCheck,
  Wrench,
  Mountain,
  Trees,
  CircleDot,
  Route,
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-purple-600">
            What We Do
          </span>
          <h2 className="font-display mt-3 text-3xl text-brand-ink-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-brand-ink-700/80">
            From septic to site work, A&amp;E Landworx handles the dirty work
            so your property is ready for what's next.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-brand-ink-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-green-400 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-500/10 text-brand-green-600 transition-colors group-hover:bg-brand-green-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-brand-ink-700/75">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={business.phoneHref}
            className="rounded-full bg-brand-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-purple-600/20 transition-transform hover:scale-[1.03] hover:bg-brand-purple-500"
          >
            Request a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
