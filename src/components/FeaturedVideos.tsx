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

  // Remaining seconds for each item to tick down realistically
  const [timeRemaining, setTimeRemaining] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    FEATURED_AUCTIONS.forEach((item) => {
      initial[item.id] = Math.floor(item.initialHoursLeft * 3600);
    });
    return initial;
  });

  // Dynamic ticking countdown every second
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
    <section className="w-full pt-6 sm:pt-8 md:pt-10 pb-8" id="featured-auctions">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Gaming Auction Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Live Bidding Arena
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Featured Gaming Auctions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Verified authentic collector boxes, limited steelbooks, and holy-grail physical releases.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              5 Hot Lots Closing Today
            </span>
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Featured Auctions Grid showcasing the 5 game images */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {auctions.map((lot) => {
            const seconds = timeRemaining[lot.id] ?? 3600;
            const isUrgent = seconds < 3600;

            return (
              <article
                key={lot.id}
                onClick={() => handleCardClick(lot)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(139,92,246,0.2)] cursor-pointer"
              >
                {/* Image Container with Platform Badge and Countdown Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={lot.thumbnail}
                    alt={lot.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-violet-600 text-white shadow-md border border-violet-400/30">
                      {lot.platform}
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-md backdrop-blur-sm ${
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

                  {/* Bottom Countdown Timer Strip on Image */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Time Left
                    </span>
                    <span
                      className={`font-mono font-bold ${
                        isUrgent ? "text-amber-400 animate-pulse" : "text-emerald-400"
                      }`}
                    >
                      {formatTimer(seconds)}
                    </span>
                  </div>
                </div>

                {/* Card Body & Auction Information */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between">
                  <div>
                    {/* Edition and Condition */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                      <span className="font-semibold text-violet-400 truncate max-w-[65%]">
                        {lot.edition}
                      </span>
                      <span className="text-emerald-400 font-medium truncate">
                        {lot.condition}
                      </span>
                    </div>

                    {/* Game Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2 leading-snug">
                      {lot.title}
                    </h3>
                  </div>

                  {/* Bidding Summary Strip */}
                  <div className="mt-4 pt-3.5 border-t border-slate-800/90 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                        Current Bid
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                        ${lot.currentBid.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="text-right mr-1">
                        <span className="text-[11px] text-slate-400 block font-medium">
                          {lot.totalBids} bids
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {lot.highBidder}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleQuickBidClick(e, lot)}
                        className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-violet-700/20 active:scale-95 transition-all cursor-pointer"
                      >
                        Bid Now
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Quick Bid / Lot Modal */}
      <QuickBidModal
        item={selectedLot}
        onClose={() => setSelectedLot(null)}
        onBidSuccess={handleBidSuccess}
      />
    </section>
  );
}
