import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { SPA_BUSINESS } from "@/data/spa-data";
import { WhatsAppIcon } from "@/components/whatsapp-button";

export function LocationMapSection() {
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Myla+Thai+Spa+Phoenix+United+Mall+Lucknow";

  return (
    <section className="border-t border-[#E6DEC8] bg-[#FAF8F5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E6DEC8] bg-[#FFFDF9] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] shadow-xs mb-3">
            <MapPin className="size-3.5" />
            Location &amp; Directions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#2C2623]">
            Visit Us at Phoenix United Mall, Lucknow
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6F6760] font-sans">
            Lower Ground Floor, Unit-09. Conveniently accessible with ample mall parking.
          </p>
        </div>

        {/* Map + Quick Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#E6DEC8] bg-[#FFFDF9] p-7 sm:p-8 shadow-xs">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#FAF3E4] text-[#B8860B] border border-[#DECDB3]">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2C2623]">
                    {SPA_BUSINESS.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#4A423D] leading-relaxed">
                    {SPA_BUSINESS.address.unit}
                    <br />
                    {SPA_BUSINESS.address.building}
                    <br />
                    Sector B, Bargawan, Alambagh, {SPA_BUSINESS.address.city} — {SPA_BUSINESS.address.pincode}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E6DEC8]/60">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#FAF3E4] text-[#B8860B] border border-[#DECDB3]">
                  <Clock className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2C2623]">
                    Opening Hours
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#2C2623]">
                    Open Every Day (Monday – Sunday)
                  </p>
                  <p className="text-xs text-[#6F6760]">
                    10:00 AM – 9:00 PM (Last booking at 8:00 PM)
                  </p>
                </div>
              </div>

              {/* Contact Numbers with Bold text & Call Icon + WhatsApp Button */}
              <div className="pt-4 border-t border-[#E6DEC8]/60 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A7E73]">
                  Call / WhatsApp Appointments
                </p>

                {/* Primary Number: 757 199 0678 */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={SPA_BUSINESS.phoneTel}
                    className="inline-flex items-center gap-2 text-base text-[#2C2623] hover:text-[#B8860B] transition-colors"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#FAF3E4] text-[#B8860B]">
                      <Phone className="size-4" />
                    </span>
                    <strong className="font-numeric tracking-wide text-base font-bold">
                      {SPA_BUSINESS.phoneDisplay}
                    </strong>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={SPA_BUSINESS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#20ba59] transition-all"
                  >
                    <WhatsAppIcon className="size-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Alt Landline Number: 0522 298 0678 (Bold with Call Icon) */}
                <div className="pt-1">
                  <a
                    href="tel:05222980678"
                    className="inline-flex items-center gap-2 text-sm text-[#2C2623] hover:text-[#B8860B] transition-colors"
                  >
                    <span className="flex size-7 items-center justify-center rounded-full bg-[#FAF3E4] text-[#B8860B]">
                      <Phone className="size-3.5" />
                    </span>
                    <strong className="font-numeric tracking-wide font-bold">
                      Alt: 0522 298 0678
                    </strong>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Directions CTA */}
            <div className="mt-6 pt-5 border-t border-[#E6DEC8]">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B8860B] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#996e08] transition-all"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          {/* Embedded Map (7 cols) */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-[#E6DEC8] shadow-sm bg-[#F3EFE8] min-h-[380px] sm:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2953409702154!2d80.8969602!3d26.798723100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff02aad92c91%3A0x1b091ca10bc0015d!2sMyla%20Thai%20Spa!5e0!3m2!1sen!2sin!4v1793124072323!5m2!1sen!2sin"
              title="Myla Thai Spa Location at Phoenix United Mall, Lucknow"
              className="absolute inset-0 size-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
