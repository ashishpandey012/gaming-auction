"use client";

import React from "react";
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
    <section className="w-full pt-8 md:pt-12 pb-12" id="categories">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Accent Underline */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-white tracking-normal">
            Browse Gaming Categories
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-14 sm:w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        </div>

        {/* Categories Grid with game covers */}
        <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={onCardClick}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(139,92,246,0.2)] cursor-pointer"
            >
              {/* Category Thumbnail Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                <img
                  src={cat.thumbnail}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/40 to-transparent" />

                {/* Platform Tag */}
                <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-sm border border-white/20 text-slate-200">
                  {cat.tag}
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
