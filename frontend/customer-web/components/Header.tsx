"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { Search, User, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Catalogue" },
  { href: "/region/kumaon", label: "Kumaon" },
  { href: "/region/garhwal", label: "Garhwal" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-zinc-200/80 sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        
        {/* Brand Logo */}
        <Link href="/" className="shrink-0">
          <Logo size="md" />
        </Link>

        {/* Modern Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-zinc-600 hover:text-emerald-800 hover:bg-emerald-50/70 text-xs lg:text-sm font-semibold px-3 py-2 rounded-lg transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Stack */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/shop"
            className="p-2 text-zinc-600 hover:text-emerald-800 hover:bg-zinc-100 rounded-full transition-colors"
            title="Browse Catalogue"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold text-zinc-700 hover:text-emerald-800 px-3 py-2 rounded-lg transition-colors"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 px-4 py-2 rounded-xl transition-all shadow-sm"
          >
            <span>Join</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-700 hover:text-emerald-800 hover:bg-emerald-50"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
            <Link
              href="/login"
              className="text-sm font-semibold text-zinc-700"
              onClick={() => setMobileOpen(false)}
            >
              Customer Sign In
            </Link>
            <Link
              href="/admin/login"
              className="text-xs font-semibold text-emerald-800"
              onClick={() => setMobileOpen(false)}
            >
              Admin Portal →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
