import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories, regions } from "@/lib/mockData";

export default function ShopPage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">Explore All Products</h1>
          <p className="text-sm text-[#6B7280] mt-1">
            Handcrafted foods, herbs, and heritage craft directly from Uttarakhand
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── FILTER SIDEBAR ─────────────────────────────────────── */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm h-fit">
            {/* Search */}
            <div>
              <p className="text-xs font-semibold text-[#174B35] uppercase tracking-wider mb-2">
                Search
              </p>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Filter by name..."
                  className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3.5 py-2 text-sm text-[#1F2937] placeholder:text-gray-400 focus:outline-none focus:border-[#174B35] focus:bg-white"
                />
              </div>
            </div>

            {/* Category filter */}
            <div>
              <p className="text-xs font-semibold text-[#174B35] uppercase tracking-wider mb-2.5">
                Category
              </p>
              <ul className="space-y-1">
                <li>
                  <button className="w-full text-left text-xs font-medium text-white bg-[#174B35] px-3 py-2 rounded-lg">
                    All Categories
                  </button>
                </li>
                {categories.map((c) => (
                  <li key={c.slug}>
                    <button className="w-full text-left text-xs font-medium text-[#4B5563] hover:bg-[#E8EFE6] hover:text-[#174B35] px-3 py-2 rounded-lg transition-colors flex items-center gap-2">
                      <span>{c.icon}</span>
                      <span>{c.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Region filter */}
            <div>
              <p className="text-xs font-semibold text-[#174B35] uppercase tracking-wider mb-2.5">
                Region
              </p>
              <ul className="space-y-1">
                <li>
                  <button className="w-full text-left text-xs font-medium text-white bg-[#174B35] px-3 py-2 rounded-lg">
                    All Regions
                  </button>
                </li>
                {regions.map((r) => (
                  <li key={r.slug}>
                    <button className="w-full text-left text-xs font-medium text-[#4B5563] hover:bg-[#E8EFE6] hover:text-[#174B35] px-3 py-2 rounded-lg transition-colors">
                      {r.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sort */}
            <div>
              <p className="text-xs font-semibold text-[#174B35] uppercase tracking-wider mb-2">
                Sort By
              </p>
              <select className="w-full text-xs text-[#374151] border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#174B35]">
                <option>Featured First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
            </div>
          </aside>

          {/* ── PRODUCT GRID ───────────────────────────────────────── */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs sm:text-sm font-medium text-[#6B7280]">
                Showing <span className="text-[#1F2937] font-bold">{products.length}</span> authentic products
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              {products.map((p) => (
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
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
