import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, Clock, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ServicesPricing } from "@/components/services-pricing";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { SPA_BUSINESS } from "@/data/spa-data";
import { MandalaCenter, MandalaDivider } from "@/components/mandala-ornament";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Myla Thai Spa (Natural Divinity) | Lucknow" },
      {
        name: "description",
        content:
          "Browse all massage therapies and body treatments at Myla Thai Spa: Deep Tissue, Swedish, Hot Stone, Traditional Thai, Balinese, Body Pack, and Hot Compress. Located at Phoenix United Mall, Lucknow. Call 757 199 0678 to book.",
      },
      { property: "og:title", content: "Services & Pricing — Myla Thai Spa (Natural Divinity)" },
      {
        property: "og:description",
        content:
          "Choose from our range of massages, body treatments, and relaxation therapies, designed to help you unwind at Myla Thai Spa, Phoenix United Mall, Lucknow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services & Pricing — Myla Thai Spa" },
      {
        name: "twitter:description",
        content:
          "Complete price list for massage therapies, herbal body treatments, and private spa experiences at Myla Thai Spa, Lucknow.",
      },
    ],
  }),
  component: ServicesPage,
});

const spaFeatures = [
  {
    title: "10+ Years in Lucknow",
    description: "A trusted sanctuary for holistic rejuvenation under the guidance of Mr. B K Dubey.",
    icon: Award,
  },
  {
    title: "Trained Thai Specialists",
    description: "Skilled therapists practicing authentic stretching, acupressure, and muscle soothing strokes.",
    icon: ShieldCheck,
  },
  {
    title: "Natural & Botanical Oils",
    description: "Pure herbal extracts, aromatic essential oils, and lotus & apricot granules without harsh chemicals.",
    icon: Sparkles,
  },
  {
    title: "Private Sanitized Suites",
    description: "Individual air-conditioned treatment rooms with fresh linens, ambient warm lighting, and complete privacy.",
    icon: CheckCircle2,
  },
];

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F5]">
      <SiteHeader />

      <main className="flex-1">
        {/* Main Services & Pricing Section */}
        <ServicesPricing titleTag="h1" />

        {/* Why Guests Trust Myla Thai Spa */}
        <section className="border-y border-[#E6DEC8] bg-[#F4EFE6]/50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                The Myla Thai Spa Promise
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-[#2C2623]">
                Natural Divinity &amp; Time-Honored Care
              </h2>
              <MandalaDivider className="my-4" />
              <p className="text-sm sm:text-base text-[#6F6760] font-sans">
                Every massage and body treatment is crafted to relax your body, calm the mind, and
                renew your spirit.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {spaFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-[#DECDB3] bg-[#FFFDF9] p-6 shadow-xs transition-transform hover:-translate-y-1"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#FAF3E4] text-[#B8860B]">
                    <feat.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#2C2623]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#6F6760] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Banner with Phone CTA */}
        <section className="relative bg-gradient-to-r from-[#2C2623] to-[#3B332F] text-[#FAF8F5] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10" aria-hidden="true">
            <MandalaCenter className="size-80 text-[#B8860B]" />
          </div>

          <div className="relative mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
                Direct Booking Assistance
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-white font-normal">
                Book Your Wellness Session Today
              </h2>
              <p className="mt-2 max-w-xl text-sm text-stone-300">
                Call our appointment desk to reserve your therapist and private room at Phoenix
                United Mall, Lucknow.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-stone-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-[#B8860B]" />
                  {SPA_BUSINESS.address.unit}, Phoenix United Mall
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4 text-[#B8860B]" />
                  {SPA_BUSINESS.hours}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 shrink-0">
              <a
                href={SPA_BUSINESS.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8860B] px-8 py-4 text-base font-semibold text-white hover:bg-[#996e08] hover:scale-105 transition-all"
              >
                <Phone className="size-5" />
                Call to Book: <span className="font-numeric tracking-wide font-bold">{SPA_BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={SPA_BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white hover:bg-[#20ba59] hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="size-5" />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-stone-400 px-7 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Online Form <ArrowRight className="size-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
