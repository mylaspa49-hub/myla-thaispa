import { useEffect, useState } from "react";

export interface HeroSlide {
  src: string;
  alt: string;
  label: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/enterance.jpg",
    alt: "Myla Thai Spa authentic entrance at Phoenix United Mall, Lucknow",
    label: "Entrance",
  },
  {
    src: "/Hot Stone Therapy.jpeg",
    alt: "Hot Stone Therapy warm basalt stones ritual",
    label: "Hot Stone Therapy",
  },
  {
    src: "/foot massage.jpeg",
    alt: "Relaxing foot massage and reflexology",
    label: "Foot Massage",
  },
  {
    src: "/Aroma Therapy.jpeg",
    alt: "Aroma Therapy session with natural essential oils",
    label: "Aroma Therapy",
  },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Slide Images */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-45 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="size-full object-cover transition-transform duration-[6000ms] ease-out"
              style={{
                transform: isActive ? "scale(1.04)" : "scale(1)",
              }}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        );
      })}

      {/* Multi-layered dark luxury gradient overlay for optimal readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14100E]/95 via-[#231C18]/85 to-[#231C18]/60" />
      <div className="absolute inset-0 bg-radial-[at_top_right] from-transparent via-[#14100E]/40 to-[#14100E]/90" />

      {/* Slide Indicators on the bottom-right of the hero */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 rounded-full bg-[#1C1714]/70 backdrop-blur-md px-3.5 py-1.5 border border-[#B8860B]/30">
        <span className="text-[10px] font-medium uppercase tracking-wider text-[#DECDB3] mr-1">
          {HERO_SLIDES[currentIndex]?.label}
        </span>
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-[#B8860B]" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
