import Link from "next/link";
import { Search, Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[500px] sm:min-h-[540px] flex items-center justify-center text-center">
      {/* Real ground-level terraced farm & village photograph from Uttarakhand */}
      <img
        src="/images/landscape-hero.jpg"
        alt="Real terrace farming and village houses in Uttarakhand"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
      />

      {/* Gentle natural vignette overlay: preserves the real fields and houses while making text pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-20 w-full flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide backdrop-blur-md mb-5 shadow-sm uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Direct From Uttarakhand Farms</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white max-w-4xl drop-shadow-md">
          Discover Authentic <br className="hidden sm:inline" />
          <span className="text-amber-300 drop-shadow">Himalayan Harvest</span> & Native Produce
        </h1>

        {/* Subheading */}
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-100 max-w-2xl font-medium drop-shadow leading-relaxed">
          Grown in organic mountain step-fields and crafted by generational artisans across Kumaon & Garhwal.
        </p>

        {/* Floating Search Bar */}
        <div className="mt-8 sm:mt-9 w-full max-w-xl">
          <form 
            action="/shop" 
            method="GET" 
            className="bg-white/95 backdrop-blur-md border border-white/80 p-1.5 rounded-2xl shadow-2xl flex items-center gap-2 transition-all focus-within:ring-4 focus-within:ring-emerald-500/30"
          >
            <div className="pl-3.5 text-zinc-400">
              <Search className="w-5 h-5 text-zinc-500" />
            </div>
            <input
              type="text"
              name="q"
              placeholder="Search Bal Mithai, Mandua, Jakhiya, Raw Honey..."
              className="w-full bg-transparent text-zinc-900 placeholder:text-zinc-500 text-xs sm:text-sm px-2 py-2.5 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </button>
          </form>

          {/* Quick filter pills */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-white/90 drop-shadow">
            <span className="text-zinc-200 font-semibold text-[11px]">Popular:</span>
            {["Almora Bal Mithai", "Mandua Roti", "Jakhiya Seeds", "Raw Honey", "Bhang Chutney"].map((term) => (
              <Link
                key={term}
                href={`/shop?q=${encodeURIComponent(term)}`}
                className="px-2.5 py-1 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-all backdrop-blur-sm text-[11px]"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
