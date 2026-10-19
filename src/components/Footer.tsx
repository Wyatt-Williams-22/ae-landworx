import logo from "../assets/logo.jpg";
import { business, navLinks } from "../data/business";
import { SocialLinks } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-brand-ink-900 py-12 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-8 sm:flex-row sm:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="A&E Landworx logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-display text-lg text-white">
              A&amp;E Landworx
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold hover:text-brand-green-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks
            className="flex gap-3"
            linkClassName="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-purple-600 hover:text-white"
            iconClassName="h-4 w-4"
          />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} A&amp;E Landworx. All rights
            reserved.
          </p>
          <p>{business.address.full}</p>
        </div>
      </div>
    </footer>
  );
}
