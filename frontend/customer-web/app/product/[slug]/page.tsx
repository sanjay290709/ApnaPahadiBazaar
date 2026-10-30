import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { products } from "@/lib/mockData";
import Link from "next/link";
import { Star, ShieldCheck, MapPin, Truck, ChevronRight } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-zinc-500 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-emerald-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <Link href="/shop" className="hover:text-emerald-800">Catalogue</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <Link href={`/region/${product.region}`} className="capitalize hover:text-emerald-800">{product.region}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-zinc-900 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-sm">
          {/* Image display */}
          <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200/70 relative">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-8xl bg-zinc-100">
                🌿
              </div>
            )}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{product.district}, {product.region === "kumaon" ? "Kumaon" : "Garhwal"}</span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                  {product.district} Origin
                </span>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full capitalize">
                  {product.region} Division
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-zinc-800 ml-auto bg-zinc-100 px-2.5 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{product.rating.toFixed(1)}</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-zinc-500 mt-2">
                Certified Producer:{" "}
                <span className="font-bold text-zinc-900">
                  {product.seller.name}
                </span>{" "}
                • {product.seller.district}, Uttarakhand
              </p>

              <div className="mt-5 pt-5 border-t border-zinc-100 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-zinc-900">
                  ₹{product.price}
                </span>
                <span className="text-sm text-zinc-400 font-medium">/ {product.unit}</span>
              </div>

              <div className="mt-5 text-sm text-zinc-600 leading-relaxed">
                {product.description}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 space-y-4">
              <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-2xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                    Phase 1 Catalogue Pilot
                  </p>
                  <p className="text-xs text-emerald-900/80 mt-0.5 leading-relaxed">
                    Product verified directly with Uttarakhand village producer. Ordering & delivery workflows going live shortly.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full block text-center bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold py-4 rounded-2xl transition-all shadow-md shadow-emerald-950/20"
              >
                Pre-Book or Enquire About Product
              </Link>
            </div>
          </div>
        </div>

        {/* Nutritional & provenance specifications */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {product.ingredients && (
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                Traditional Ingredients
              </p>
              <p className="text-xs text-zinc-600 leading-relaxed">{product.ingredients}</p>
            </div>
          )}

          {product.shelfLife && (
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                Shelf Life & Care
              </p>
              <p className="text-xs text-zinc-600 leading-relaxed">{product.shelfLife}</p>
            </div>
          )}

          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm">
            <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              Mountain Provenance
            </p>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Harvested and crafted exclusively in {product.district}, {product.region === "kumaon" ? "Kumaon" : "Garhwal"}, Uttarakhand.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
