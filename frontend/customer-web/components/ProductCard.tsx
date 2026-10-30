import Link from "next/link";
import { Star, MapPin, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  slug: string;
  name: string;
  price: number;
  unit: string;
  district: string;
  region: string;
  category: string;
  sellerName: string;
  rating?: number;
  image?: string;
  emoji?: string;
}

export default function ProductCard({
  slug,
  name,
  price,
  unit,
  district,
  region,
  sellerName,
  rating = 4.8,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="group block h-full select-none">
      <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
        
        {/* Photo Container */}
        <div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl bg-zinc-100">
              🏔️
            </div>
          )}

          {/* District & Region Origin Pill */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>{district}, {region === "kumaon" ? "Kumaon" : "Garhwal"}</span>
          </div>

          {/* Quick Rating Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-md text-zinc-800 text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col flex-1 justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
              {name}
            </h3>
            <p className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1 truncate">
              <span>By {sellerName}</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 inline" />
            </p>
          </div>

          {/* Price & Action */}
          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
            <div>
              <span className="text-base font-extrabold text-zinc-900">₹{price}</span>
              <span className="text-[11px] text-zinc-400 font-normal ml-1">/ {unit}</span>
            </div>
            
            <span className="text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg transition-colors">
              View Detail →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
