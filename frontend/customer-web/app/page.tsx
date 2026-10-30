import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { categories, featuredProducts, sellers } from "@/lib/mockData";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Leaf, 
  MapPin, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 selection:bg-emerald-500 selection:text-white">
      <Header />
      <HeroSection />

      {/* ── TRUST & VALUE METRICS BAR ─────────────────────────────────── */}
      <section className="border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">100% Native Crops</p>
                <p className="text-[11px] text-zinc-500">Heirloom Mandua & Gahat</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">Authentic Traceability</p>
                <p className="text-[11px] text-zinc-500">Direct village origin labels</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">Verified Producers</p>
                <p className="text-[11px] text-zinc-500">Women cooperatives & SHGs</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">Pan-India Delivery</p>
                <p className="text-[11px] text-zinc-500">Direct from the mountains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODERN CATEGORIES GRID ────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Curated Mountain Categories
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <span>View All Products</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-emerald-600/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-50 group-hover:bg-emerald-50 text-2xl flex items-center justify-center transition-colors mb-4">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                  Explore items →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS (MODERN E-COMMERCE GRID) ────────────────── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-y border-zinc-200/80">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Direct From Source
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-1">
                Handpicked Pahadi Harvest
              </h2>
            </div>
            
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-xl transition-colors self-start sm:self-auto"
            >
              <span>Explore All ({featuredProducts.length}+)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {featuredProducts.map((p) => (
              <ProductCard
                key={p.slug}
                slug={p.slug}
                name={p.name}
                price={p.price}
                unit={p.unit}
                district={p.district}
                region={p.region}
                category={p.category}
                sellerName={p.seller.name}
                rating={p.rating}
                image={p.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO REGIONS EDITORIAL DUAL HERO CARDS ─────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
            Geographic Provenance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-1">
            Two Mountain Traditions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2">
            Each region brings unique terroir, sacred recipes, and endemic spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kumaon Card */}
          <Link
            href="/region/kumaon"
            className="group relative rounded-3xl overflow-hidden bg-zinc-900 text-white min-h-[340px] sm:min-h-[380px] p-8 flex flex-col justify-end shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="/images/catalog/img_03.jpg"
              alt="Kumaon region"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                Eastern Uttarakhand • 6 Districts
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Kumaon Division
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-md leading-relaxed">
                Home of legendary roasted khoya Bal Mithai, Singori in Maalu leaves, Bageshwar Rajma, and Bhang ki Chutney.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                <span>Browse Kumaon Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Garhwal Card */}
          <Link
            href="/region/garhwal"
            className="group relative rounded-3xl overflow-hidden bg-zinc-900 text-white min-h-[340px] sm:min-h-[380px] p-8 flex flex-col justify-end shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="/images/catalog/img_04.jpg"
              alt="Garhwal region"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
                Western Uttarakhand • 7 Districts
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Garhwal Division
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-md leading-relaxed">
                Land of high-altitude organic Mandua flour, mineral-dense Gahat dal, Chamoli Jakhiya seeds, and Uttarkashi woollens.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                <span>Browse Garhwal Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── VERIFIED PRODUCERS SPOTLIGHT ─────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-zinc-100/70 border-t border-zinc-200/80">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Our Mountain Partners
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-1">
                Meet the Verified Producers
              </h2>
            </div>
            <Link
              href="/about"
              className="text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
            >
              <span>Learn About Our Verification Model</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sellers.map((s) => (
              <div
                key={s.slug}
                className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                      📍 {s.district}, {s.region}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Certified Producer</span>
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-zinc-900">
                    {s.name}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mt-1">
                    "{s.tagline}"
                  </p>
                  <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <Link
                    href={`/shop?seller=${encodeURIComponent(s.name)}`}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
                  >
                    <span>View Producer Catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
