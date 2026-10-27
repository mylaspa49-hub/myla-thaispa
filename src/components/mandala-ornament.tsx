import type { SVGProps } from "react";

export function MandalaCenter({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Outer subtle ring */}
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 2.5" />
      <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.8" />

      {/* 8 Outer Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={`petal-${angle}`} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 14 C44 26 44 34 50 38 C56 34 56 26 50 14 Z"
            stroke="currentColor"
            strokeWidth="0.75"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <circle cx="50" cy="18" r="1.2" fill="currentColor" fillOpacity="0.8" />
          <path
            d="M50 22 C48 27 48 31 50 34 C52 31 52 27 50 22 Z"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </g>
      ))}

      {/* 8 Secondary interlaced curved accents */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <g key={`accent-${angle}`} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 24 C47 31 47 36 50 40 C53 36 53 31 50 24 Z"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle cx="50" cy="27" r="0.8" fill="currentColor" />
        </g>
      ))}

      {/* Middle band */}
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 1.5" />

      {/* Inner 8-pointed star / lotus core */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path
          key={`core-${angle}`}
          d="M50 34 L52 42 L50 44 L48 42 Z"
          transform={`rotate(${angle} 50 50)`}
          stroke="currentColor"
          strokeWidth="0.6"
          fill="currentColor"
          fillOpacity="0.2"
        />
      ))}

      {/* Center focal point */}
      <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="50" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function MandalaDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className || ""}`} aria-hidden="true">
      <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#B8860B]/60" />
      <MandalaCenter className="size-6 text-[#B8860B]" />
      <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#B8860B]/60" />
    </div>
  );
}

export function MandalaCorner({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M2 38 V14 C2 7.37 7.37 2 14 2 H38" stroke="currentColor" strokeWidth="1" />
      <path d="M6 38 V16 C6 10.48 10.48 6 16 6 H38" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 2" />
      <path d="M12 12 Q20 12 20 20 Q12 20 12 12 Z" stroke="currentColor" strokeWidth="0.75" fill="currentColor" fillOpacity="0.1" />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}
