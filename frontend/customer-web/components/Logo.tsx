export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl";
  const iconSize = size === "sm" ? 28 : size === "lg" ? 48 : 36;

  return (
    <div className="flex items-center gap-2">
      {/* SVG Mountain Logo */}
      <svg width={iconSize} height={iconSize} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sun */}
        <circle cx="30" cy="14" r="8" fill="#F5A623" />
        {/* Sun rays */}
        <line x1="30" y1="4" x2="30" y2="1" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="38" y1="6" x2="40" y2="4" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="22" y1="6" x2="20" y2="4" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="42" y1="14" x2="45" y2="14" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="14" x2="15" y2="14" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        {/* Left mountain */}
        <path d="M2 50 L18 22 L34 50Z" fill="#2D6A4F" />
        {/* Right mountain */}
        <path d="M26 50 L42 18 L58 50Z" fill="#1B4332" />
        {/* Snow cap right */}
        <path d="M42 18 L36 30 L48 30Z" fill="white" opacity="0.9"/>
        {/* Trees left */}
        <path d="M6 50 L10 42 L14 50Z" fill="#1B4332"/>
        <path d="M12 50 L16 40 L20 50Z" fill="#2D6A4F"/>
        {/* Ground */}
        <rect x="0" y="49" width="60" height="4" fill="#40916C" rx="1"/>
      </svg>

      <div>
        <p className={`font-bold text-[#174B35] leading-none ${textSize}`}>
          Apna Pahadi Bazaar
        </p>
        {size !== "sm" && (
          <p className="text-[9px] text-[#737B73] leading-none mt-0.5 tracking-wide">
            Local Products • Local People • A Stronger Uttarakhand
          </p>
        )}
      </div>
    </div>
  );
}
