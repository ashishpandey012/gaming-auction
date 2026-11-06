"use client";

import React, { useState, useEffect } from "react";
import { FEATURED_AUCTIONS, AuctionItem } from "@/data/mockData";
import QuickBidModal from "@/components/QuickBidModal";

interface FeaturedVideosProps {
  onCardClick?: () => void;
}

export default function FeaturedVideos({ onCardClick }: FeaturedVideosProps) {
  const [auctions, setAuctions] = useState<AuctionItem[]>(FEATURED_AUCTIONS);
  const [selectedLot, setSelectedLot] = useState<AuctionItem | null>(null);

  // Dynamic countdown timer
  const [timeRemaining, setTimeRemaining] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    FEATURED_AUCTIONS.forEach((item) => {
      initial[item.id] = Math.floor(item.initialHoursLeft * 3600);
    });
    return initial;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        const next: Record<string, number> = { ...prev };
        Object.keys(next).forEach((key) => {
          if (next[key] > 0) {
            next[key] -= 1;
          }
        });
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    if (seconds <= 0) return "AUCTION ENDED";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}h ${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  const handleCardClick = (item: AuctionItem) => {
    if (onCardClick) {
      onCardClick();
    } else {
      setSelectedLot(item);
    }
  };

  const handleQuickBidClick = (e: React.MouseEvent, item: AuctionItem) => {
    e.stopPropagation();
    setSelectedLot(item);
  };

  const handleBidSuccess = (itemId: string, newBid: number) => {
    setAuctions((prev) =>
      prev.map((lot) =>
        lot.id === itemId
          ? {
              ...lot,
              currentBid: newBid,
              totalBids: lot.totalBids + 1,
              highBidder: "You (Winning)",
            }
          : lot
      )
    );
  };

  return (
    <section className="w-full pt-4 sm:pt-6 md:pt-8 pb-6" id="videos">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Cyber Accent Underline */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-[26px] font-semibold text-white tracking-normal">
            Featured Gaming Auctions
          </h2>
          <div className="mx-auto mt-2.5 h-[3px] w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        </div>

        {/* Featured Auctions Grid */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {auctions.map((lot) => {
            const seconds = timeRemaining[lot.id] ?? 3600;
            const isUrgent = seconds < 3600;

            return (
              <article
                key={lot.id}
                onClick={() => handleCardClick(lot)}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(139,92,246,0.2)] cursor-pointer"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <img
                    src={lot.thumbnail}
                    alt={lot.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-black/40" />

                  {/* Top Badges: Platform & Edition */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-violet-600 text-white shadow border border-violet-400/30">
                      {lot.platform}
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider shadow backdrop-blur-sm ${
                        lot.badgeColor === "rose"
                          ? "bg-rose-500/90 text-white"
                          : lot.badgeColor === "amber"
                          ? "bg-amber-500/90 text-slate-950 font-black"
                          : lot.badgeColor === "emerald"
                          ? "bg-emerald-500/90 text-slate-950 font-black"
                          : lot.badgeColor === "cyan"
                          ? "bg-cyan-500/90 text-slate-950 font-black"
                          : "bg-violet-500/90 text-white"
                      }`}
                    >
                      {lot.badge}
                    </span>
                  </div>

                  {/* Countdown Timer Strip */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-[11px] text-slate-400 font-medium">Ends in:</span>
                    <span
                      className={`font-mono font-bold text-xs ${
                        isUrgent ? "text-amber-400 animate-pulse" : "text-emerald-400"
                      }`}
                    >
                      {formatTimer(seconds)}
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="flex flex-1 flex-col p-4 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-semibold text-violet-400 truncate max-w-[65%]">
                        {lot.edition}
                      </span>
                      <span className="text-emerald-400 font-medium truncate">
                        {lot.condition}
                      </span>
                    </div>

                    <h3 className="text-[15px] sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors leading-snug line-clamp-2">
                      {lot.title}
                    </h3>
                  </div>

                  {/* Pricing & Bid Button */}
                  <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                        Current Bid
                      </span>
                      <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                        ${lot.currentBid.toFixed(2)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleQuickBidClick(e, lot)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-violet-700/20 active:scale-95 transition-all cursor-pointer"
                    >
                      Bid Now
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Quick Bid Modal */}
      <QuickBidModal
        item={selectedLot}
        onClose={() => setSelectedLot(null)}
        onBidSuccess={handleBidSuccess}
      />
    </section>
  );
}
