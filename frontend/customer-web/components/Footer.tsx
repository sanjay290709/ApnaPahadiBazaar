import Link from "next/link";
import { 
  Heart, 
  ShieldCheck, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  Mail,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  Discover: [
    { label: "All Products", href: "/shop" },
    { label: "Kumaon Origin", href: "/region/kumaon" },
    { label: "Garhwal Origin", href: "/region/garhwal" },
    { label: "Featured Artisans", href: "/about" },
  ],
  Categories: [
    { label: "Food & Staples", href: "/category/food-beverages" },
    { label: "Traditional Sweets", href: "/category/sweets" },
    { label: "Wellness & Herbs", href: "/category/wellness-herbs" },
    { label: "Heritage Handicrafts", href: "/category/handicrafts" },
    { label: "Pahadi Homestays", href: "/category/homestays" },
    { label: "Handwoven Woollens", href: "/category/clothing-accessories" },
  ],
  "Pahadi Bazaar": [
    { label: "Our Story & Mission", href: "/about" },
    { label: "Meet the Producers", href: "/about" },
    { label: "Contact Team", href: "/contact" },
    { label: "Help & FAQs", href: "/faq" },
  ],
  "Trust & Legal": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Refunds & Returns", href: "/refunds" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1715] text-zinc-300 border-t border-zinc-800/80">
      {/* Upper Newsletter / Mission Banner (replaces the overwhelming green block) */}
      <div className="border-b border-zinc-800/60 bg-gradient-to-b from-[#14231e] to-[#0f1715]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct From Uttarakhand Farms</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Pahadon ka swaad, ab har ghar.
              </h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Empowering smallholder mountain women collectives, organic millet growers, and generational confectioners across Uttarakhand.
              </p>
            </div>

            {/* Seller & Shop CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-lg shadow-emerald-950/50"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 border border-zinc-700/80 font-medium text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
              >
                <span>Register as Seller</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 flex items-center justify-center text-white shadow-md">
                <span className="text-lg">🏔️</span>
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block">
                  Pahadi Bazaar
                </span>
                <span className="text-[10px] text-zinc-500 font-medium tracking-wide block">
                  Uttarakhand First Marketplace
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 mt-4 leading-relaxed max-w-sm">
              Discover authentic mountain harvest, hand-ground spices, raw forest honey, and centuries-old artisan sweets shipped with verified origin traceability.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Verified Regional Origin</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Covering all 13 Districts of Uttarakhand</span>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="col-span-1">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {section}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Clean Integrated Copyright & Badges Bar (Inside main footer container, removing the repetitive extra bar) */}
        <div className="mt-12 pt-8 border-t border-zinc-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Pahadi Bazaar Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
            <Link href="/shipping" className="hover:text-zinc-300 transition-colors">Shipping</Link>
            <span className="inline-flex items-center gap-1.5 text-zinc-400">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Uttarakhand
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
