import { createFileRoute } from "@tanstack/react-router";
import { Award, CheckCircle2, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { LocationMapSection } from "@/components/location-map";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { SPA_BUSINESS, ALL_SERVICES } from "@/data/spa-data";
import { MandalaCenter, MandalaDivider } from "@/components/mandala-ornament";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments — Myla Thai Spa | Phoenix United Mall, Lucknow" },
      {
        name: "description",
        content:
          "Book your session at Myla Thai Spa. Call 757 199 0678 or visit Unit-09, Lower Ground Floor, Phoenix United Mall, Lucknow 226012. Open daily 10 am – 9 pm.",
      },
      { property: "og:title", content: "Contact & Appointments — Myla Thai Spa | Lucknow" },
      {
        property: "og:description",
        content:
          "Reserve a private massage or body treatment room at Myla Thai Spa, Phoenix United Mall, Lucknow. Call 757 199 0678.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Myla Thai Spa" },
    ],
  }),
  component: ContactPage,
});

export const BOOKING_TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM (Last booking)",
] as const;

const inputClasses =
  "w-full rounded-2xl border border-[#DECDB3] bg-[#FFFDF9] px-4 py-3 text-sm text-[#2C2623] placeholder:text-[#9C8F80] focus:border-[#B8860B] focus:outline-none focus:ring-2 focus:ring-[#B8860B]/20";

export function ContactBookingSection({
  titleTag = "h2",
  id = "contact-section",
}: {
  titleTag?: "h1" | "h2";
  id?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const time = String(formData.get("time") || "").trim();

    const messageLines = [
      "Hello Myla Thai Spa, I would like to book an appointment:",
      "",
      `• Name: ${name}`,
      `• Phone: ${phone}`,
      `• Service: ${service}`,
      `• Preferred Date: ${date}`,
      `• Preferred Time: ${time}`,
      "",
      "Please confirm my booking slot. Thank you!",
    ];

    const encoded = encodeURIComponent(messageLines.join("\n"));
    const url = `https://wa.me/917571990678?text=${encoded}`;

    setLastWhatsAppUrl(url);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  const HeadingTag = titleTag;

  return (
    <div id={id} className="relative">
      {/* Header */}
      <section className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6">
        <HeadingTag className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2623]">
          Visit Us or Book a Session
        </HeadingTag>

        <MandalaDivider className="my-5" />
      </section>

      {/* Contact info & Booking form */}
      <section className="mx-auto flex flex-col gap-6 px-4 pb-24 sm:px-6 md:grid md:grid-cols-[1fr_1.3fr] md:gap-10 max-w-6xl">
        {/* Business Details Column */}
        <div className="contents md:flex md:flex-col md:gap-6">
          {/* Primary Phone / Call to Book Card */}
          <div className="order-1 md:order-none rounded-3xl border border-[#B8860B]/30 bg-gradient-to-br from-[#FFFDF9] to-[#FAF5EB] p-7 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#B8860B] text-white shadow-md shadow-[#B8860B]/20">
                <Phone className="size-5" />
              </span>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B8860B]">
                  Primary Appointment Line
                </span>
                <a
                  href={SPA_BUSINESS.phoneTel}
                  className="mt-1 block font-numeric text-2xl sm:text-3xl font-bold tracking-wider text-[#2C2623] hover:text-[#B8860B] transition-colors"
                >
                  {SPA_BUSINESS.phoneDisplay}
                </a>
                <p className="mt-1 text-xs text-[#6F6760]">
                  Direct line to reception desk for instant slot confirmations.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={SPA_BUSINESS.phoneTel}
                    className="flex-1 flex h-11 items-center justify-center gap-2 rounded-full bg-[#B8860B] px-4 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#996e08] hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <Phone className="size-4 shrink-0" />
                    <span>Call to Book</span>
                  </a>

                  <a
                    href={SPA_BUSINESS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#20ba59] hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <WhatsAppIcon className="size-4 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Alternate numbers */}
            {SPA_BUSINESS.alternatePhones.length > 0 && (
              <div className="mt-5 border-t border-[#DECDB3] pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A7E73]">
                  Alternate Line:
                </p>
                <div className="mt-2 flex flex-wrap gap-4 text-xs font-medium text-[#2C2623]">
                  {SPA_BUSINESS.alternatePhones.map((p) => (
                    <a
                      key={p.tel}
                      href={p.tel}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2C2623] hover:text-[#B8860B] transition-colors"
                    >
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#FAF3E4] text-[#B8860B]">
                        <Phone className="size-3" />
                      </span>
                      <strong className="font-numeric tracking-wide font-bold">
                        Alt: {p.display}
                      </strong>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Visit Address Card */}
          <div className="order-3 md:order-none rounded-3xl border border-[#DECDB3] bg-[#FFFDF9] p-7 shadow-xs">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#FAF3E4] text-[#B8860B]">
                <MapPin className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-[#2C2623]">Location</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#2C2623] font-medium">
                  {SPA_BUSINESS.name}
                  <br />
                  {SPA_BUSINESS.address.unit}
                  <br />
                  {SPA_BUSINESS.address.building}
                  <br />
                  {SPA_BUSINESS.address.city} — {SPA_BUSINESS.address.pincode}
                </p>
                <p className="mt-2 text-xs text-[#6F6760]">
                  Located inside Phoenix United Mall, Kanpur Road, Alambagh area.
                </p>
              </div>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="order-4 md:order-none rounded-3xl border border-[#DECDB3] bg-[#FFFDF9] p-7 shadow-xs">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#FAF3E4] text-[#B8860B]">
                <Clock className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-[#2C2623]">Opening Hours</h2>
                <p className="mt-1.5 text-sm text-[#2C2623] font-medium">
                  Open Every Day (Monday – Sunday)
                </p>
                <p className="text-sm text-[#6F6760]">
                  10:00 AM – 9:00 PM
                </p>
                <p className="mt-1 text-xs text-[#8A7E73]">
                  Last therapy booking taken at 8:00 PM.
                </p>
              </div>
            </div>
          </div>

          {/* Management & Heritage Card */}
          <div className="order-5 md:order-none rounded-3xl border border-[#DECDB3] bg-[#FAF8F5] p-6 text-xs text-[#6F6760]">
            <div className="flex items-center gap-2 font-medium text-[#2C2623]">
              <Award className="size-4 text-[#B8860B]" />
              <span>{SPA_BUSINESS.experience}</span>
            </div>
            <p className="mt-2 leading-relaxed">
              Managed by founder <strong className="text-[#2C2623]">{SPA_BUSINESS.owner}</strong>.
              Dedicated to genuine Thai bodywork, relaxation massage, and pure botanical hygiene.
            </p>
          </div>
        </div>

        {/* Booking Request Form */}
        <div className="order-2 md:order-none rounded-3xl border border-[#DECDB3] bg-[#FFFDF9] p-8 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-[#FAF3E4] text-[#B8860B]">
                <CheckCircle2 className="size-10" />
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold text-[#2C2623]">
                Appointment Request Ready
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6F6760]">
                Thank you! Your booking message has been prepared for WhatsApp. If WhatsApp didn't open automatically, please tap the button below:
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={lastWhatsAppUrl || SPA_BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-all"
                >
                  <WhatsAppIcon className="size-4" /> Open in WhatsApp
                </a>
                <a
                  href={SPA_BUSINESS.phoneTel}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#996e08] transition-all"
                >
                  <Phone className="size-3.5" /> Call to Confirm Instantly
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center rounded-full border border-[#DECDB3] px-6 py-3 text-xs font-medium text-[#2C2623] hover:bg-[#F4EFE6] transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#2C2623]">
                  Book An Appointment
                </h2>
                <p className="mt-1 text-xs text-[#6F6760]">
                  Select your preferred treatment, date, and time. No upfront payment required.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7E73]">
                    Your Name
                  </span>
                  <input
                    required
                    name="name"
                    placeholder="e.g. Priya or Rahul"
                    className={inputClasses}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7E73]">
                    Phone Number
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="e.g. 757 199 0678"
                    className={inputClasses}
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7E73]">
                  Select Treatment
                </span>
                <select required name="service" className={inputClasses} defaultValue="">
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <optgroup label="Massage Therapies">
                    <option>Deep Tissue Therapy (60/90 min: ₹2,800/- | ₹3,800/-)</option>
                    <option>Hot Stone Therapy (90 min: ₹3,800/-)</option>
                    <option>Swedish Massage (60/90 min: ₹2,400/- | ₹3,400/-)</option>
                    <option>Traditional Thai Massage (60/90 min: ₹2,200/- | ₹3,000/-)</option>
                    <option>Aroma Therapy (60/90 min: ₹2,500/- | ₹3,400/-)</option>
                    <option>Balinese Therapy (60/90 min: ₹2,600/- | ₹3,500/-)</option>
                    <option>Foot Massage (30/60 min: ₹800/- | ₹1,200/-)</option>
                  </optgroup>
                  <optgroup label="Body Treatments">
                    <option>Body Pack (Full Body: ₹3,000/-)</option>
                    <option>Hot Compress Therapy (60 min: ₹3,000/-)</option>
                  </optgroup>
                  <option>Not sure yet — discuss options on call</option>
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7E73]">
                    Preferred Date
                  </span>
                  <input required name="date" type="date" className={inputClasses} />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7E73]">
                    Preferred Time Slot (10 AM – 8 PM)
                  </span>
                  <select required name="time" className={inputClasses} defaultValue="">
                    <option value="" disabled>
                      Choose time slot
                    </option>
                    {BOOKING_TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-8 py-4 text-sm font-semibold text-white hover:bg-[#20ba59] transition-all shadow-xs"
                >
                  <WhatsAppIcon className="size-5" />
                  <span>Request Appointment via WhatsApp</span>
                </button>
                <p className="mt-2.5 text-center text-xs text-[#8A7E73]">
                  Pre-fills your booking details directly into WhatsApp with our desk at 757 199 0678.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F5] text-[#2C2623]">
      <SiteHeader />

      <main className="flex-1">
        <ContactBookingSection titleTag="h1" />

        {/* Location & Directions Google Maps Embed */}
        <LocationMapSection />
      </main>

      <SiteFooter />
    </div>
  );
}
