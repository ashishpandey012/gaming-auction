"use client";

import React from "react";
import Link from "next/link";
import { AUCTION_CATEGORIES, CategoryItem } from "@/data/mockData";

interface BrowseCategoriesProps {
  categories?: CategoryItem[];
  onCardClick?: () => void;
}

export default function BrowseCategories({
  categories = AUCTION_CATEGORIES,
  onCardClick,
}: BrowseCategoriesProps) {
  return (
    <section className="w-full pt-8 md:pt-12 pb-10" id="categories">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Gaming Auction Theme */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Curated Vaults
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Browse Gaming Categories
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Explore authentic releases classified by franchise, console platform, and rarity tier.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors"
          >
            <span>View All Vaults</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Categories Grid with our game artwork thumbnails */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={onCardClick}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,92,246,0.2)] cursor-pointer"
            >
              {/* Category Thumbnail Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                <img
                  src={cat.thumbnail}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/40 to-transparent" />

                {/* Platform Tag */}
                <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-sm border border-white/20 text-slate-200">
                  {cat.tag}
                </span>

                {/* Lot Count Chip */}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-violet-600/90 text-white shadow">
                  {cat.lotCount} Lots
                </span>
              </div>

              {/* Category Titles */}
              <div className="p-3 bg-[#0d1424]">
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-violet-300 transition-colors truncate">
                  {cat.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-slate-400 truncate">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
