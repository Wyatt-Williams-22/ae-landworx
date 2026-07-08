import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { business } from "../data/business";
import { FacebookIcon, TikTokIcon } from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-purple-600">
            Get In Touch
          </span>
          <h2 className="font-display mt-3 text-3xl text-brand-ink-900 sm:text-4xl">
            Contact A&amp;E Landworx
          </h2>
          <p className="mt-4 text-lg text-brand-ink-700/80">
            Give us a call, send an email, or reach out on social &mdash;
            we're always open and ready to help.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href={business.phoneHref}
            className="flex items-start gap-4 rounded-2xl border border-brand-ink-900/10 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-green-400 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-500/10 text-brand-green-600">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-ink-700/60">
                Phone
              </p>
              <p className="mt-1 text-lg font-bold text-brand-ink-900">
                {business.phone}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${business.email}`}
            className="flex items-start gap-4 rounded-2xl border border-brand-ink-900/10 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-green-400 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-500/10 text-brand-green-600">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-ink-700/60">
                Email
              </p>
              <p className="mt-1 text-lg font-bold break-all text-brand-ink-900">
                {business.email}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-brand-ink-900/10 p-6 shadow-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple-500/10 text-brand-purple-600">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-ink-700/60">
                Mailing Address
              </p>
              <p className="mt-1 text-lg font-bold text-brand-ink-900">
                {business.address.line1}
              </p>
              <p className="text-lg font-bold text-brand-ink-900">
                {business.address.line2}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-brand-ink-900/10 p-6 shadow-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple-500/10 text-brand-purple-600">
              <Clock className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-ink-700/60">
                Hours
              </p>
              <p className="mt-1 text-lg font-bold text-brand-ink-900">
                {business.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="A&E Landworx on Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink-900 text-white transition-colors hover:bg-brand-purple-600"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={business.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="A&E Landworx on TikTok"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink-900 text-white transition-colors hover:bg-brand-purple-600"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
