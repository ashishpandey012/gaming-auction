"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickBidModal from "@/components/QuickBidModal";
import { ALL_AUCTIONS, AuctionItem } from "@/data/mockData";

export default function VideosPage() {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"time" | "bid-high" | "bids-count">("time");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [selectedLot, setSelectedLot] = useState<AuctionItem | null>(null);

  // Dynamic ticking countdowns
  const [timeRemaining, setTimeRemaining] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    ALL_AUCTIONS.forEach((item) => {
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("unlock") === "true") {
        router.replace("/unlock");
      }
    }
  }, [router]);

  const handleCardClick = (lot: AuctionItem) => {
    setSelectedLot(lot);
  };

  // Filter and sort items
  const filteredItems = ALL_AUCTIONS.filter((item) => {
    const matchesPlatform =
      selectedPlatform === "All" ||
      (selectedPlatform === "PlayStation" && (item.platform === "PS5" || item.platform === "PS4")) ||
      (selectedPlatform === "Nintendo" && item.platform === "Nintendo Switch") ||
      (selectedPlatform === "Xbox" && item.platform === "Xbox") ||
      item.platform === selectedPlatform;

    const matchesSearch =
      item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.game.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.edition.toLowerCase().includes(searchFilter.toLowerCase());

    return matchesPlatform && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "bid-high") return b.currentBid - a.currentBid;
    if (sortBy === "bids-count") return b.totalBids - a.totalBids;
    // Default time remaining
    const timeA = timeRemaining[a.id] ?? 99999;
    const timeB = timeRemaining[b.id] ?? 99999;
    return timeA - timeB;
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#070a13] text-white selection:bg-violet-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <section className="w-full pt-8 sm:pt-12 pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header Title with Gaming Auction Theme */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE LIVE LOTS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Live Gaming Auctions Catalog
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Bid in real-time on authenticated physical editions, collector steelbooks, and vintage gaming grails.
              </p>
            </div>

            {/* Filter and Search Bar Controls */}
            <div className="mt-8 p-4 rounded-2xl bg-[#0d1424] border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Platform Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {["All", "PlayStation", "Xbox", "Nintendo", "Multiplatform"].map((plat) => (
                  <button
                    key={plat}
                    type="button"
                    onClick={() => setSelectedPlatform(plat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedPlatform === plat
                        ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-700/60"
                    }`}
                  >
                    {plat}
                  </button>
                ))}
              </div>

              {/* Search & Sort Dropdown */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full sm:w-48">
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filter by title..."
                    className="w-full pl-3 pr-8 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                  />
                  {searchFilter && (
                    <button
                      onClick={() => setSearchFilter("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs text-slate-400 shrink-0">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full sm:w-auto px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white font-semibold focus:outline-none focus:border-violet-500 cursor-pointer"
                  >
                    <option value="time">Ending Soonest</option>
                    <option value="bid-high">Highest Bid</option>
                    <option value="bids-count">Most Bids</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Showing <strong>{filteredItems.length}</strong> active auction lots</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live anti-sniping protection enabled
              </span>
            </div>

            {/* 4-Column Responsive Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {filteredItems.map((lot) => {
                const seconds = timeRemaining[lot.id] ?? 3600;
                const isUrgent = seconds < 3600;

                return (
                  <article
                    key={lot.id}
                    onClick={() => handleCardClick(lot)}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(139,92,246,0.2)] cursor-pointer"
                  >
                    {/* Image Container with Badges */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                      <img
                        src={lot.thumbnail}
                        alt={lot.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Top platform chip */}
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-violet-600 text-white shadow-md border border-violet-400/30">
                        {lot.platform}
                      </span>

                      {/* Condition Chip */}
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-sm text-slate-200 border border-white/20">
                        {lot.condition}
                      </span>

                      {/* Timer Overlay */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px]">
                        <span className="text-slate-400">Ends in:</span>
                        <span
                          className={`font-mono font-bold ${
                            isUrgent ? "text-amber-400 animate-pulse" : "text-emerald-400"
                          }`}
                        >
                          {formatTimer(seconds)}
                        </span>
                      </div>
                    </div>

                    {/* Lot Details */}
                    <div className="flex flex-1 flex-col p-4 justify-between">
                      <div>
                        <span className="text-[10px] font-semibold text-violet-400 uppercase tracking-wider block mb-1 truncate">
                          {lot.edition}
                        </span>
                        <h2 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2 leading-snug">
                          {lot.title}
                        </h2>
                      </div>

                      {/* Current Bid & Action */}
                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                            Current Bid
                          </span>
                          <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                            ${lot.currentBid.toFixed(2)}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block mb-1">
                            {lot.totalBids} bids
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLot(lot);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow transition-all cursor-pointer"
                          >
                            Bid
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Quick Bid Modal */}
      <QuickBidModal
        item={selectedLot}
        onClose={() => setSelectedLot(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
