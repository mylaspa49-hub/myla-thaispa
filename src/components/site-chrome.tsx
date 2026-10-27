import { Link } from "@tanstack/react-router";
import { Award, Clock, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { SPA_BUSINESS } from "@/data/spa-data";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { MandalaCenter } from "@/components/mandala-ornament";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services & Pricing" },
  { to: "/contact", label: "Contact & Booking" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6DEC8]/80 bg-[#FAF8F5]/90 backdrop-blur-md">
      {/* Top micro bar for location and direct call */}
      <div className="hidden border-b border-[#E6DEC8]/50 bg-[#F4EFE6]/60 px-4 py-1.5 text-xs text-[#6F6760] sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#B8860B] font-medium">
              <Award className="size-3.5" />
              {SPA_BUSINESS.experience}
            </span>
            <span className="text-[#DECDB3]">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5 text-[#B8860B]" />
              {SPA_BUSINESS.address.full}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#6F6760]">
              <Clock className="size-3.5 text-[#B8860B]" />
              {SPA_BUSINESS.hours}
            </span>
            <span className="text-[#DECDB3]">•</span>
            <a
              href={SPA_BUSINESS.phoneTel}
              className="font-medium text-[#2C2623] hover:text-[#B8860B] transition-colors"
            >
              Call: <span className="font-numeric tracking-wide">{SPA_BUSINESS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-2xl border border-[#DECDB3] bg-[#FFFDF9] shadow-xs transition-transform group-hover:scale-105">
            <img
              src={SPA_BUSINESS.logo}
              alt="Myla Thai Spa Logo"
              className="size-full object-cover"
            />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl sm:text-3xl font-semibold tracking-wide text-[#2C2623]">
                {SPA_BUSINESS.name}
              </span>
            </div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#B8860B]">
              {SPA_BUSINESS.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium tracking-wide text-[#6F6760] transition-colors hover:text-[#B8860B] [&.active]:text-[#B8860B] [&.active]:font-semibold"
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={SPA_BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#20ba59] active:scale-95"
          >
            <WhatsAppIcon className="size-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href={SPA_BUSINESS.phoneTel}
            className="inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#996e08] active:scale-95"
          >
            <Phone className="size-4" />
            Call to Book
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SPA_BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center size-9 rounded-full bg-[#25D366] text-white"
            aria-label="WhatsApp Us"
          >
            <WhatsAppIcon className="size-4.5" />
          </a>

          <a
            href={SPA_BUSINESS.phoneTel}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#B8860B] px-3.5 py-2 text-xs font-semibold text-white"
            aria-label="Call to Book"
          >
            <Phone className="size-3.5" />
            Call
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex size-10 items-center justify-center rounded-full text-[#2C2623] hover:bg-[#F4EFE6]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#E6DEC8] bg-[#FAF8F5] px-4 py-5 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#2C2623] transition-colors hover:bg-[#F4EFE6] [&.active]:bg-[#F4EFE6] [&.active]:text-[#B8860B]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#E6DEC8]/60 mt-2 flex flex-col gap-2">
            <a
              href={SPA_BUSINESS.phoneTel}
              className="flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-6 py-3.5 text-center text-sm font-semibold text-white"
            >
              <Phone className="size-4" />
              Call to Book: <span className="font-numeric tracking-wide font-bold">{SPA_BUSINESS.phoneDisplay}</span>
            </a>
            <a
              href={SPA_BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="size-4.5" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-[#B8860B] px-6 py-3 text-center text-sm font-medium text-[#2C2623] hover:bg-[#F4EFE6]"
            >
              Book Online
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E6DEC8] bg-[#FFFDF9] text-[#2C2623]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:px-8 md:grid-cols-4">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center overflow-hidden rounded-2xl border border-[#DECDB3] bg-[#FFFDF9] shadow-xs">
              <img
                src={SPA_BUSINESS.logo}
                alt="Myla Thai Spa Logo"
                className="size-full object-cover"
              />
            </span>
            <div>
              <span className="font-display text-2xl font-semibold text-[#2C2623]">
                {SPA_BUSINESS.name}
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                {SPA_BUSINESS.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#6F6760]">
            A sanctuary of tranquility and rejuvenation in Lucknow. Dedicated to restoring bodily
            harmony through authentic massage therapies and botanical wellness treatments.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#FAF5EB] border border-[#DECDB3] px-3 py-1.5 text-xs text-[#2C2623]">
            <Award className="size-3.5 text-[#B8860B]" />
            <span>{SPA_BUSINESS.experience}</span>
          </div>
          <p className="mt-2 text-xs text-[#6F6760]">
            Owner / Founder: <strong className="text-[#2C2623]">{SPA_BUSINESS.owner}</strong>
          </p>
        </div>

        {/* Visit & Location */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
            Visit Us
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#2C2623]">
            {SPA_BUSINESS.address.unit}
            <br />
            {SPA_BUSINESS.address.building}
            <br />
            {SPA_BUSINESS.address.city} {SPA_BUSINESS.address.pincode}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-[#6F6760]">
            <Clock className="size-3.5 text-[#B8860B]" />
            <span>{SPA_BUSINESS.hours}</span>
          </div>
          <p className="mt-2 text-xs text-[#8A7E73]">
            Walk-ins welcome based on room availability. Prior booking recommended.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-[#6F6760]">
            <li>
              <Link to="/" className="hover:text-[#B8860B] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#B8860B] transition-colors">
                Services &amp; Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#B8860B] transition-colors">
                Contact &amp; Booking
              </Link>
            </li>
            <li>
              <a href="#massage-therapies" className="hover:text-[#B8860B] transition-colors">
                Massage Therapies
              </a>
            </li>
            <li>
              <a href="#body-treatments" className="hover:text-[#B8860B] transition-colors">
                Body Treatments &amp; Packs
              </a>
            </li>
          </ul>
        </div>

        {/* Book & Phone */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
            Appointments
          </h3>
          <p className="mt-4 text-xs text-[#6F6760]">
            Call our reception desk directly for same-day bookings and consultations:
          </p>
          <a
            href={SPA_BUSINESS.phoneTel}
            className="mt-3 flex items-center gap-2 font-numeric text-xl font-bold tracking-wide text-[#2C2623] hover:text-[#B8860B] transition-colors"
          >
            <Phone className="size-4 text-[#B8860B]" />
            {SPA_BUSINESS.phoneDisplay}
          </a>

          {SPA_BUSINESS.alternatePhones.length > 0 && (
            <div className="mt-2 space-y-1 text-xs">
              {SPA_BUSINESS.alternatePhones.map((p) => (
                <div key={p.tel} className="flex items-center gap-1.5">
                  <Phone className="size-3 text-[#B8860B]" />
                  <a
                    href={p.tel}
                    className="font-numeric font-bold tracking-wide text-[#2C2623] hover:text-[#B8860B] transition-colors"
                  >
                    Alt: {p.display}
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href={SPA_BUSINESS.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#996e08] transition-colors"
            >
              <Phone className="size-3.5" />
              Call to Book
            </a>
            <a
              href={SPA_BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-all"
            >
              <WhatsAppIcon className="size-3.5" />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#B8860B]/50 px-5 py-2 text-xs font-medium text-[#2C2623] hover:bg-[#F4EFE6] transition-colors"
            >
              Request Online Slot
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Attributions Bar */}
      <div className="border-t border-[#E6DEC8] py-6 text-xs text-[#8A7E73] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-left">
          <p>
            © {new Date().getFullYear()} {SPA_BUSINESS.name} (tagline: "{SPA_BUSINESS.tagline}").
            Unit-09, Phoenix United Mall, Lucknow 226012. All rights reserved.
          </p>

          <p className="shrink-0">
            A product of{" "}
            <a
              href="https://www.prometrion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2C2623] hover:text-[#B8860B] underline decoration-[#DECDB3] hover:decoration-[#B8860B] transition-colors"
            >
              Prometrion
            </a>
            . Built with 💻 &amp; ☕. By{" "}
            <a
              href="https://www.rajnikantg.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2C2623] hover:text-[#B8860B] underline decoration-[#DECDB3] hover:decoration-[#B8860B] transition-colors"
            >
              Rajnikant Gaurav
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
