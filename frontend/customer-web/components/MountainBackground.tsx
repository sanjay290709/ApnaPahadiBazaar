/** Mountain silhouette SVG background — used in hero and auth pages */
export function MountainBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b8d4e8] via-[#c9dff0] to-[#d4e8c2]" />

      {/* Far mountains - light blue/grey */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "75%" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Farthest range - lightest */}
        <path
          d="M0 320 L0 200 L120 120 L240 180 L360 100 L480 160 L600 80 L720 140 L840 90 L960 150 L1080 70 L1200 130 L1320 100 L1440 160 L1440 320Z"
          fill="#a8c5d8"
          opacity="0.5"
        />
        {/* Mid range */}
        <path
          d="M0 320 L0 230 L180 140 L300 200 L420 130 L540 190 L660 110 L780 175 L900 120 L1020 180 L1140 105 L1260 170 L1380 140 L1440 190 L1440 320Z"
          fill="#7aab92"
          opacity="0.6"
        />
        {/* Closer mountains - medium green */}
        <path
          d="M0 320 L0 260 L100 170 L200 230 L320 155 L440 220 L540 160 L640 215 L740 150 L860 210 L980 145 L1100 200 L1200 160 L1340 215 L1440 180 L1440 320Z"
          fill="#3a8a5c"
          opacity="0.75"
        />
        {/* Foreground hills - darker green */}
        <path
          d="M0 320 L0 285 L80 250 L180 270 L280 240 L380 265 L500 235 L620 260 L740 240 L860 265 L980 242 L1100 268 L1220 245 L1340 270 L1440 255 L1440 320Z"
          fill="#2D6A4F"
        />
        {/* Forest treeline */}
        <path
          d="M0 320 L0 295 L30 285 L60 295 L90 282 L120 292 L150 280 L180 290 L210 278 L240 288 L280 276 L320 286 L360 275 L400 284 L450 272 L500 282 L550 270 L600 280 L650 268 L700 278 L750 266 L800 276 L850 265 L900 275 L960 263 L1020 273 L1080 262 L1140 272 L1200 261 L1260 271 L1320 262 L1380 272 L1440 265 L1440 320Z"
          fill="#1B4332"
        />
        {/* Village/ground */}
        <rect x="0" y="305" width="1440" height="15" fill="#155d27" />
      </svg>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
    </div>
  );
}

/** Smaller mountain silhouette for auth page bottoms */
export function MountainFooter() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 100 }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#c9dff0] to-[#2D6A4F]" />
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 800 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100 L0 60 L100 20 L200 55 L300 15 L400 50 L500 10 L600 45 L700 20 L800 55 L800 100Z"
          fill="#2D6A4F"
          opacity="0.7"
        />
        <path
          d="M0 100 L0 70 L80 40 L160 65 L240 38 L320 60 L400 35 L480 58 L560 38 L640 62 L720 40 L800 65 L800 100Z"
          fill="#1B4332"
        />
        <path
          d="M0 100 L0 80 L60 68 L120 78 L200 65 L280 75 L360 64 L440 74 L520 63 L600 73 L680 63 L760 74 L800 68 L800 100Z"
          fill="#155d27"
        />
      </svg>
    </div>
  );
}
