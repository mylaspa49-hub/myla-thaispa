import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Phone, Sparkles, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import {
  SPA_BUSINESS,
  SPA_CATEGORIES,
  ALL_SERVICES,
  SANCTUARY_HIGHLIGHTS,
  type SpaService,
} from "@/data/spa-data";
import { MandalaCenter, MandalaCorner, MandalaDivider } from "@/components/mandala-ornament";

interface ServicesPricingProps {
  showHeroIntro?: boolean;
  activeCategoryFilter?: string;
  titleTag?: "h1" | "h2";
}

export function ServicesPricing({ titleTag = "h2" }: ServicesPricingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = SPA_CATEGORIES.map((c) => c.title);

  const displayedCategories =
    selectedCategory === "All"
      ? SPA_CATEGORIES
      : SPA_CATEGORIES.filter((c) => c.title === selectedCategory);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory((current) => (current === cat ? "All" : cat));
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] py-12 sm:py-20 text-[#2C2623] overflow-hidden">
      {/* Decorative background subtle mandalas */}
      <div className="pointer-events-none absolute -top-24 -right-24 opacity-5" aria-hidden="true">
        <MandalaCenter className="size-96 text-[#B8860B]" />
      </div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 opacity-5" aria-hidden="true">
        <MandalaCenter className="size-96 text-[#B8860B]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title over Filter Bar */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          {titleTag === "h1" ? (
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2623]">
              Our Services &amp; Prices
            </h1>
          ) : (
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2623]">
              Our Services &amp; Prices
            </h2>
          )}
          <MandalaDivider className="mt-4" />
        </div>

        {/* Category Filter Tabs: Massage Therapies & Body Treatments only */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#E6DEC8] bg-[#FFFDF9] p-1.5 shadow-xs max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryClick(cat)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#B8860B] text-white"
                    : "text-[#6F6760] hover:text-[#2C2623] hover:bg-[#F4EFE6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Service Cards */}
        <div className="mt-12 space-y-20">
          {displayedCategories.map((category) => (
            <div key={category.title} className="scroll-mt-24" id={category.title.toLowerCase().replace(/\s+/g, "-")}>
              {/* Category Header */}
              <div className="mb-8 flex flex-col items-center text-center">
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-8 bg-[#B8860B]/40" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
                    Category
                  </span>
                  <span className="h-px w-8 bg-[#B8860B]/40" />
                </div>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-[#2C2623]">
                  {category.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-[#6F6760] font-sans">
                  {category.subtitle}
                </p>
              </div>

              {/* Service Cards Grid - Mobile First */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}

          {/* Inside The Sanctuary - In place of former Spa Experience category */}
          <div className="scroll-mt-24 pt-8 border-t border-[#E6DEC8]/60" id="inside-the-sanctuary">
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                Inside The Sanctuary
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-[#2C2623]">
                Our Lucknow Spa Rooms &amp; Ambiance
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#6F6760] font-sans">
                Take a look inside our peaceful retreat located at Phoenix United Mall, Lucknow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SANCTUARY_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-[#E6DEC8] bg-[#FFFDF9] shadow-xs"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#F3EFE8]">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-[#FFFDF9]">
                    <h3 className="font-display text-lg font-semibold text-[#2C2623]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#6F6760]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Page Call To Action (Required) */}
        <div className="mt-20 relative overflow-hidden rounded-3xl border border-[#B8860B]/30 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5ECE0] p-8 sm:p-12 shadow-sm">
          {/* Subtle Corner Mandalas */}
          <MandalaCorner className="absolute top-2 left-2 size-12 text-[#B8860B]/30" />
          <MandalaCorner className="absolute bottom-2 right-2 size-12 text-[#B8860B]/30 rotate-180" />

          <div className="mx-auto max-w-3xl text-center">
            <MandalaCenter className="mx-auto size-10 text-[#B8860B]" />
            <h3 className="mt-4 font-display text-3xl sm:text-4xl text-[#2C2623]">
              Ready to Unwind at Myla Thai Spa?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#6F6760] leading-relaxed max-w-xl mx-auto font-sans">
              Experience authentic Thai hospitality and holistic relaxation in Lucknow.
              Call directly to reserve your private room and preferred time slot.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SPA_BUSINESS.phoneTel}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#B8860B] px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#996e08] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="size-4.5" />
                Call to Book: <span className="font-numeric tracking-wider font-bold">{SPA_BUSINESS.phoneDisplay}</span>
              </a>

              <a
                href={SPA_BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#20ba59] hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="size-4.5" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#B8860B]/60 bg-[#FFFDF9] px-7 py-3.5 text-sm sm:text-base font-medium text-[#2C2623] transition-all hover:bg-[#F4EFE6] hover:border-[#B8860B]"
              >
                Book Appointment Online
              </Link>
            </div>

            {/* Quick Details strip */}
            <div className="mt-8 border-t border-[#E6DEC8] pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs sm:text-sm text-[#6F6760]">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4 text-[#B8860B]" />
                {SPA_BUSINESS.address.full}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-[#B8860B]" />
                {SPA_BUSINESS.hours}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: SpaService }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E6DEC8] bg-[#FFFDF9] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8860B]/50 hover:shadow-xl hover:shadow-[#B8860B]/10">
      {/* Image Container with aspect ratio - only if matching image exists, otherwise blank */}
      {service.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3EFE8]">
          <img
            src={service.image}
            alt={service.alt || service.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

          {/* Category / Highlight Tag */}
          {service.tag && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#B8860B] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                <Sparkles className="size-3" />
                {service.tag}
              </span>
            </div>
          )}

          {/* Corner Mandala decoration */}
          <div className="absolute top-3 right-3 opacity-60 text-white/90 drop-shadow-sm">
            <MandalaCenter className="size-6" />
          </div>
        </div>
      ) : (
        service.tag && (
          <div className="pt-6 px-6 sm:px-7">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#B8860B] px-3 py-1 text-xs font-semibold text-white shadow-sm">
              <Sparkles className="size-3" />
              {service.tag}
            </span>
          </div>
        )
      )}

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Service Title */}
        <h3 className="font-display text-2xl font-semibold text-[#2C2623] group-hover:text-[#B8860B] transition-colors">
          {service.name}
        </h3>

        {/* Description: 1-3 sentences, relaxation language */}
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#6F6760] font-sans">
          {service.description}
        </p>

        {/* Durations & Pricing Options */}
        <div className="mt-5 border-t border-[#EAE3D5] pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9C8F80]">
            Duration &amp; Pricing
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {service.options.map((opt) => (
              <span
                key={opt.duration}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#DECDB3] bg-[#FAF5EB] px-3 py-1.5 text-xs font-semibold text-[#2C2623]"
              >
                <Clock className="size-3 text-[#B8860B]" />
                <span className="font-numeric tracking-wide">{opt.duration}:</span>
                <span className="text-[#B8860B] font-numeric font-bold text-sm tracking-wide">{opt.price}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: "Call to Book" & "Book Now" */}
        <div className="mt-6 flex items-center gap-2.5">
          <a
            href={SPA_BUSINESS.phoneTel}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#B8860B] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#996e08]"
          >
            <Phone className="size-3.5" />
            Call to Book
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-[#DECDB3] bg-[#FFFDF9] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#2C2623] transition-colors hover:bg-[#F4EFE6] hover:border-[#B8860B]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
