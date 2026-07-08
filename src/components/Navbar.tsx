import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { business, navLinks } from "../data/business";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled
          ? "bg-brand-ink-900/95 shadow-lg backdrop-blur"
          : "bg-brand-ink-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="A&E Landworx logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="font-display text-lg text-white sm:text-xl">
            A&amp;E Landworx
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/85 transition-colors hover:text-brand-green-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-full bg-brand-green-500 px-5 py-2.5 text-sm font-bold text-brand-ink-900 transition-colors hover:bg-brand-green-400"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-ink-900 lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/5 hover:text-brand-green-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-green-500 px-5 py-3 text-base font-bold text-brand-ink-900"
            >
              <Phone className="h-4 w-4" />
              Call {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
