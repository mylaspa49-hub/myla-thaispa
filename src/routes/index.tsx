import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ServicesPricing } from "@/components/services-pricing";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { ReviewsMarquee } from "@/components/reviews-marquee";
import { LocationMapSection } from "@/components/location-map";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { SPA_BUSINESS } from "@/data/spa-data";
import { MandalaCenter, MandalaDivider } from "@/components/mandala-ornament";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Myla Thai Spa — Natural Divinity | Phoenix United Mall, Lucknow" },
      {
        name: "description",
        content:
          "Welcome to Myla Thai Spa in Phoenix United Mall, Lucknow. Experience authentic Thai massages, deep tissue, body packs, and herbal relaxation therapies. 10+ years in business. Call 757 199 0678.",
      },
      { property: "og:title", content: "Myla Thai Spa — Natural Divinity | Lucknow" },
      {
        property: "og:description",
        content:
          "A sanctuary of calm in Phoenix United Mall, Lucknow. Over 10+ years offering authentic massage and body treatments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Myla Thai Spa — Natural Divinity" },
    ],
  }),
  component: Index,
});

const reasons = [
  {
    icon: Award,
    title: "10+ Years in Lucknow",
    text: "Founded and managed by Mr. B K Dubey, serving Lucknow with unwavering standards of authentic relaxation and guest trust.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Thai Therapists",
    text: "Trained therapists who understand the body's flow of energy, adjusting pressure to soothe your muscles deeply.",
  },
  {
    icon: Sparkles,
    title: "Pure Botanical Ingredients",
    text: "Natural oils, herbal packs with Poo Loey, sea salts, and lotus & apricot granules without harsh artificial additives.",
  },
  {
    icon: Users,
    title: "Private Sanitized Suites",
    text: "Individual air-conditioned rooms with soft warm lighting, hygienic linens, and dedicated shower facilities.",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F5] text-[#2C2623]">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero-section"
          className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#2C2623]"
        >
          {/* Background Slideshow: enterance, hot stone therapy, foot massage, aroma therapy */}
          <HeroSlideshow />

          {/* Decorative Gold Mandala in background - hidden on mobile view only */}
          <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 opacity-10 hidden sm:block">
            <MandalaCenter className="size-[500px] text-[#B8860B]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B8860B]/40 bg-[#1C1714]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B] backdrop-blur-sm">
                <MandalaCenter className="size-4 text-[#B8860B] hidden sm:block" />
                <span>{SPA_BUSINESS.name} • {SPA_BUSINESS.tagline}</span>
              </div>

              <h1 className="mt-6 font-display text-5xl font-normal leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                Natural Divinity.
                <span className="block italic text-[#E5B54F]">Sacred Healing Touch.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-stone-300 font-sans max-w-xl">
                Step away from the bustle of the city into a calm, aromatic sanctuary. Over a decade of
                authentic Thai therapies, hot compress, and restorative wellness in Lucknow.
              </p>

              {/* CTAs - 3 Equal-Sized Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl">
                <a
                  href={SPA_BUSINESS.phoneTel}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#B8860B] px-4 text-sm font-semibold text-white transition-all hover:bg-[#996e08] hover:scale-105 active:scale-95 text-center"
                >
                  <Phone className="size-4.5 shrink-0" />
                  <span>Call to Book</span>
                </a>

                <a
                  href={SPA_BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white transition-all hover:bg-[#20ba59] hover:scale-105 active:scale-95 text-center"
                >
                  <WhatsAppIcon className="size-5 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="#services-section"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-[#B8860B]/70 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-[#B8860B] hover:scale-105 active:scale-95 text-center"
                >
                  <span className="truncate">View Services &amp; Rates</span>
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </div>

              {/* Trust Strip */}
              <div className="mt-10 pt-8 border-t border-stone-700/60 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-stone-300">
                <span className="flex items-center gap-1.5 font-medium text-stone-200">
                  <Award className="size-4 text-[#B8860B]" />
                  {SPA_BUSINESS.experience}
                </span>
                <span className="text-[#B8860B]">•</span>
                <span>Owned by {SPA_BUSINESS.owner}</span>
                <span className="text-[#B8860B]">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-[#B8860B]" />
                  Unit-09, Phoenix United Mall, Lucknow
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Promise Banner */}
        <section className="border-b border-[#E6DEC8] bg-[#FFFDF9] py-14 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <MandalaCenter className="mx-auto size-8 text-[#B8860B]" />
            <p className="mt-4 font-display text-2xl sm:text-3xl italic leading-relaxed text-[#2C2623]">
              "True wellness begins when the body relaxes into stillness. We bring authentic Thai
              and global therapeutic traditions together with natural, chemical-free care."
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#B8860B] font-semibold">
              Myla Thai Spa • Natural Divinity
            </p>
          </div>
        </section>

        {/* Main Services & Pricing Section (Complete Embed) */}
        <div id="services-section">
          <ServicesPricing />
        </div>

        {/* Why Guests Trust Us */}
        <section className="border-y border-[#E6DEC8] bg-[#F4EFE6]/50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                The Lucknow Standard
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#2C2623]">
                Care You Can Feel, Trust Built Over 10+ Years
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6F6760]">
                Every detail at Myla Thai Spa is designed for your privacy, peace of mind, and physical relief.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-3xl border border-[#DECDB3] bg-[#FFFDF9] p-7 shadow-xs transition-all hover:-translate-y-1 hover:border-[#B8860B]/60 hover:shadow-lg hover:shadow-[#B8860B]/10"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#FAF3E4] text-[#B8860B]">
                    <r.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[#2C2623]">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#6F6760] leading-relaxed">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ambience & Experience Split */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
            {/* Image side using authentic photo */}
            <div className="relative overflow-hidden rounded-3xl border border-[#E6DEC8] shadow-sm">
              <img
                src="/Your Private Sanctuary.jpeg"
                alt="Your Private Sanctuary at Myla Thai Spa Phoenix United Mall"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] sm:aspect-[16/11] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-xl bg-[#2C2623]/80 px-3.5 py-1.5 backdrop-blur-sm text-xs font-medium text-[#FAF8F5] border border-white/20">
                Your Private Sanctuary
              </div>
            </div>

            {/* Content side */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                Your Private Sanctuary
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-[#2C2623]">
                Warm Light, Soothing Music &amp; Unhurried Hands
              </h2>
              <MandalaDivider className="my-5 justify-start" />
              <p className="text-sm sm:text-base leading-relaxed text-[#6F6760]">
                From the moment you enter Unit-09 on the Lower Ground Floor of Phoenix United Mall, the
                pace slows down. Soft amber lighting, gentle aroma, and pristine sanitization prepare
                the space for your personalized therapy.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#6F6760]">
                Whether you select our deep tissue therapy for muscular tightness or a traditional Thai
                assisted stretch session, our therapists listen to your preferences to ensure optimal comfort.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={SPA_BUSINESS.phoneTel}
                  className="inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#996e08] transition-all"
                >
                  <Phone className="size-4" />
                  Call to Book: <span className="font-numeric tracking-wide">{SPA_BUSINESS.phoneDisplay}</span>
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DECDB3] bg-[#FFFDF9] px-6 py-3.5 text-sm font-medium text-[#2C2623] hover:bg-[#F4EFE6] transition-colors"
                >
                  Explore All Rates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real Google Maps Reviews - Dual-Row Cross Marquee */}
        <ReviewsMarquee />

        {/* Location & Directions Map Embed */}
        <LocationMapSection />

        {/* Bottom Banner Call to Book */}
        <section className="relative overflow-hidden bg-[#2C2623] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <MandalaCenter className="mx-auto size-[450px] text-[#B8860B]" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <HeartHandshake className="mx-auto size-9 text-[#B8860B]" />
            <h2 className="mt-4 font-display text-3xl sm:text-5xl text-white font-normal">
              Your Body Deserves Stillness
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed">
              Step into Myla Thai Spa at Phoenix United Mall, Lucknow. Call directly to book your session
              or drop in during opening hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SPA_BUSINESS.phoneTel}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#B8860B] px-8 py-4 text-base font-semibold text-white hover:bg-[#996e08] transition-transform hover:scale-105"
              >
                <Phone className="size-5" />
                Call to Book: <span className="font-numeric tracking-wide font-bold">{SPA_BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={SPA_BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white hover:bg-[#20ba59] transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="size-5" />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-stone-400 px-7 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Reserve Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
