"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AUCTION_CATEGORIES, ALL_AUCTIONS } from "@/data/mockData";

export default function CategoriesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"all" | "playstation" | "open-world" | "action" | "fps" | "sandbox">("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("unlock") === "true") {
        router.replace("/unlock");
      }
    }
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col bg-[#070a13] text-white selection:bg-violet-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <section className="w-full pt-8 sm:pt-12 pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Page Heading */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>COLLECTOR VAULTS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Browse Gaming Categories
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Explore rare video games by franchise universe, console platform, and collector edition rarity.
              </p>
            </div>

            {/* Featured Category Banners (Grid of 6) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AUCTION_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/videos`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(139,92,246,0.25)] cursor-pointer"
                >
                  {/* Category Image Header */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <img
                      src={cat.thumbnail}
                      alt={cat.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/50 to-transparent" />

                    {/* Tag badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-violet-600 text-white shadow-md">
                      {cat.tag}
                    </span>

                    {/* Lot Count */}
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900/90 border border-slate-700 text-emerald-400 shadow">
                      {cat.lotCount} Active Lots
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                        {cat.title}
                      </h2>
                      <p className="mt-1 text-xs text-slate-400">
                        {cat.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Verified Authentic Lots</span>
                      <span className="text-violet-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Explore Vault →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Platform Quick-Access Strip */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e1628] to-[#0a0f1c] border border-violet-500/20">
              <h3 className="text-lg font-bold text-white mb-2">
                Browse by Hardware & Console Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-2xl">
                Filter live auction items certified by platform architecture, regional compatibility (NTSC / PAL), and factory seal grading.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: "PlayStation 5", count: "34 Lots", icon: "PS5" },
                  { name: "PlayStation 4", count: "48 Lots", icon: "PS4" },
                  { name: "Xbox Series X", count: "22 Lots", icon: "XBOX" },
                  { name: "Nintendo Switch", count: "29 Lots", icon: "SWITCH" },
                  { name: "PC & Steelbook", count: "18 Lots", icon: "PC" },
                  { name: "Retro Classics", count: "15 Lots", icon: "RETRO" },
                ].map((plat, i) => (
                  <Link
                    key={i}
                    href="/videos"
                    className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-violet-950/40 border border-slate-800 hover:border-violet-500/50 transition-all text-center group cursor-pointer"
                  >
                    <span className="text-xs font-black text-violet-400 uppercase tracking-wider block mb-1 group-hover:text-violet-300">
                      {plat.icon}
                    </span>
                    <span className="text-xs font-bold text-white block">
                      {plat.name}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {plat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
