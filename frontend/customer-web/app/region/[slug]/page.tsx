import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import { regions, products } from "@/lib/mockData";
import { MapPin, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export default async function RegionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);
  if (!region) notFound();

  const regionProducts = products.filter((p) => p.region === slug);

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header />

      {/* Region hero */}
      <section className="bg-emerald-950 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Uttarakhand Division</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{region.name}</h1>
          <p className="text-emerald-100 text-base sm:text-lg max-w-xl mt-2 font-medium">{region.tagline}</p>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mt-3 leading-relaxed">
            {region.description}
          </p>
        </div>
      </section>

      {/* Districts bar */}
      <section className="bg-white py-4 px-4 sm:px-6 border-b border-zinc-200/80 shadow-sm sticky top-16 z-20">
        <div className="max-w-[1240px] mx-auto flex items-center gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-xs font-bold text-zinc-900 uppercase shrink-0 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Districts:</span>
          </span>
          <div className="flex gap-2">
            {region.districts.map((d) => (
              <span
                key={d}
                className="text-xs font-semibold text-zinc-700 bg-zinc-100 border border-zinc-200/70 px-3 py-1 rounded-full whitespace-nowrap"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products list */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
              Authentic Harvest & Produce from {region.name}
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Showing {regionProducts.length} verified products with direct producer attribution
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {regionProducts.map((p) => (
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

      <Footer />
    </div>
  );
}
