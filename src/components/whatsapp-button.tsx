import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SPA_BUSINESS } from "@/data/spa-data";

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function WhatsAppButton({
  className = "",
  label = "WhatsApp Us",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={SPA_BUSINESS.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-all ${className}`}
    >
      <WhatsAppIcon className="size-4.5" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero-section");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Hidden when in hero section (rect.bottom > 120), visible once hero is scrolled up
        setIsVisible(rect.bottom <= 120);
      } else {
        // On pages without hero section (e.g. /services, /contact), show after initial scroll
        setIsVisible(window.scrollY > 150);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Direct Quick Contact Actions"
      className={`fixed bottom-20 sm:bottom-24 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
          : "opacity-0 pointer-events-none translate-y-6 scale-95"
      }`}
    >
      {/* Floating Call Button (Above) */}
      <a
        href={SPA_BUSINESS.phoneTel}
        aria-label="Call Myla Thai Spa at 757 199 0678"
        className="flex items-center gap-2 rounded-full bg-[#B8860B] text-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-md hover:bg-[#996e08] hover:scale-105 active:scale-95 transition-all"
      >
        <Phone className="size-5 text-white" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          Call: <strong className="font-numeric">{SPA_BUSINESS.phoneDisplay}</strong>
        </span>
      </a>

      {/* Floating WhatsApp Button (Below) */}
      <a
        href={SPA_BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Myla Thai Spa on WhatsApp at 757 199 0678"
        className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-md hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all"
      >
        <WhatsAppIcon className="size-5 sm:size-6 text-white" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          WhatsApp: <strong className="font-numeric">{SPA_BUSINESS.phoneDisplay}</strong>
        </span>
      </a>
    </aside>
  );
}
