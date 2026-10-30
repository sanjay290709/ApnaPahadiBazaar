import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import { categories, products } from "@/lib/mockData";
import { Sparkles } from "lucide-react";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const catProducts = products.filter((p) => p.category === slug);

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header />

      <div className="bg-white border-b border-zinc-200/80 py-10 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Category</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{cat.icon}</span>
            <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">{cat.name}</h1>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2 max-w-xl">{cat.description}</p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10">
        {catProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200/80">
            <p className="text-5xl mb-3">🏔️</p>
            <p className="text-base font-bold text-zinc-900">New Products Coming Soon</p>
            <p className="text-xs text-zinc-500 mt-1">
              We are currently onboarding verified regional producers for {cat.name}.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold text-zinc-500 mb-6">
              Showing {catProducts.length} authentic mountain specialty {catProducts.length !== 1 ? "items" : "item"}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {catProducts.map((p) => (
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
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
