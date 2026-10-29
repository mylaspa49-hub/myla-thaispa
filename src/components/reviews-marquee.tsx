import { ExternalLink, Star } from "lucide-react";
import {
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_COUNT,
  GOOGLE_REVIEW_URL,
  REVIEWS_ROW_1,
  REVIEWS_ROW_2,
  type GoogleReview,
} from "@/data/reviews-data";

function GoogleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  // Extract initials or clean fallback
  const initial = review.name.trim().charAt(0).toUpperCase() || "M";

  return (
    <div className="w-[300px] sm:w-[350px] shrink-0 rounded-2xl border border-[#E6DEC8] bg-[#FAF8F5] p-5 shadow-xs transition-all hover:border-[#B8860B]/70 hover:bg-white hover:shadow-md hover:shadow-[#B8860B]/10">
      {/* Header: User avatar + name + Google logo */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-9 shrink-0 rounded-full bg-[#FAF3E4] border border-[#DECDB3] text-[#B8860B] font-semibold text-sm flex items-center justify-center">
            {initial}
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-sm text-[#2C2623] truncate">
              {review.name}
            </h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="flex text-[#B8860B]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-3 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-numeric text-[#8A7E73]">
                {review.rating}.0
              </span>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-1 rounded-md bg-white px-2 py-1 border border-[#E6DEC8]/60 shadow-xs">
          <GoogleIcon className="size-3.5" />
          <span className="text-[10px] font-medium text-[#6F6760]">Review</span>
        </div>
      </div>

      {/* Review Message */}
      <blockquote className="mt-3.5 text-xs sm:text-sm text-[#4A423D] leading-relaxed italic line-clamp-3">
        "{review.message}"
      </blockquote>
    </div>
  );
}

export function ReviewsMarquee() {
  return (
    <section className="relative overflow-hidden border-t border-[#E6DEC8] bg-[#FFFDF9] py-20 px-0">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DEC8] bg-[#FAF8F5] px-4 py-1.5 shadow-xs mb-3">
          <GoogleIcon className="size-4" />
          <span className="flex text-[#B8860B] text-xs">★★★★★</span>
          <span className="text-xs font-semibold text-[#2C2623] tracking-wide">
            Google Maps Reviews
          </span>
          <span className="text-xs font-numeric font-bold text-[#B8860B]">
            5.0 ({GOOGLE_REVIEWS_COUNT})
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#2C2623]">
          Loved by Lucknow Patrons
        </h2>
        <p className="mt-2 text-sm text-[#6F6760] max-w-xl mx-auto font-sans">
          Real guest feedback from visitors at Phoenix United Mall, Lucknow.
        </p>

        {/* Review Us Button in Testimonials Header */}
        <div className="mt-6 flex items-center justify-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#DECDB3] bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#2C2623] shadow-xs transition-all hover:border-[#B8860B] hover:bg-[#FAF8F5] hover:text-[#B8860B] hover:shadow-md hover:scale-105 active:scale-95"
            aria-label="Review Myla Thai Spa on Google Maps"
          >
            <GoogleIcon className="size-4" />
            <span>Review Us on Google</span>
            <ExternalLink className="size-3.5 text-[#B8860B]" />
          </a>
        </div>
      </div>

      {/* Cross Marquees with Edge Fade Gradients */}
      <div className="relative w-full space-y-4">
        {/* Edge Gradient Overlays */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10"
          aria-hidden="true"
        />

        {/* Row 1 - Moves Left */}
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 gap-4 animate-marquee-left hover:[animation-play-state:paused]">
            {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((review, idx) => (
              <ReviewCard key={`r1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right (Cross Marquee) */}
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 gap-4 animate-marquee-right hover:[animation-play-state:paused]">
            {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((review, idx) => (
              <ReviewCard key={`r2-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Callout & Secondary Review Button */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-center">
        <p className="text-xs sm:text-sm text-[#6F6760]">
          Visited Myla Thai Spa recently? We'd love to hear about your experience.
        </p>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#DECDB3] bg-[#FAF8F5] px-4 py-2 text-xs font-semibold text-[#2C2623] shadow-xs transition-all hover:border-[#B8860B] hover:bg-white hover:text-[#B8860B] hover:scale-105 active:scale-95"
          aria-label="Write a review on Google"
        >
          <GoogleIcon className="size-3.5" />
          <span>Review Us</span>
          <ExternalLink className="size-3 text-[#B8860B]" />
        </a>
      </div>
    </section>
  );
}
