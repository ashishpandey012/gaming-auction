"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuctionItem } from "@/data/mockData";

interface QuickBidModalProps {
  item: AuctionItem | null;
  onClose: () => void;
  onBidSuccess?: (itemId: string, newBid: number) => void;
}

export default function QuickBidModal({
  item,
  onClose,
  onBidSuccess,
}: QuickBidModalProps) {
  if (!item) return null;

  const [customBid, setCustomBid] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bidStatus, setBidStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [currentAmount, setCurrentAmount] = useState(item.currentBid);

  const minNextBid = currentAmount + 5;

  const handlePlaceBid = (bidValue: number) => {
    if (bidValue <= currentAmount) {
      setBidStatus("error");
      setStatusMessage(`Bid must be at least $${(currentAmount + 5).toFixed(2)}.`);
      return;
    }

    setIsSubmitting(true);
    setBidStatus("idle");

    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentAmount(bidValue);
      setBidStatus("success");
      setStatusMessage(`Bid Placed! You are now the highest bidder at $${bidValue.toFixed(2)}.`);
      setCustomBid("");
      if (onBidSuccess) {
        onBidSuccess(item.id, bidValue);
      }
    }, 450);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(customBid);
    if (isNaN(parsed) || parsed < minNextBid) {
      setBidStatus("error");
      setStatusMessage(`Minimum bid increment is $5. Minimum valid bid is $${minNextBid.toFixed(2)}.`);
      return;
    }
    handlePlaceBid(parsed);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0d1424] border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.25)] overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Live Auction Lot
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white rounded-lg p-1 hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 max-h-[82vh] overflow-y-auto space-y-4">
          {/* Game Preview & Lot Details */}
          <div className="flex gap-4 items-start">
            <div className="relative w-28 sm:w-32 aspect-[3/4] shrink-0 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-md">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-violet-600 text-white tracking-wide">
                {item.platform}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <span className="inline-block text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                {item.edition}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item.condition}
              </p>
              <div className="mt-2 text-xs text-slate-400 flex items-center gap-2">
                <span>Seller: <strong className="text-slate-200">{item.seller.name}</strong></span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Current Bid Display */}
          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Current Winning Bid
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  ${currentAmount.toFixed(2)}
                </span>
                <span className="text-xs text-slate-400">USD</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-emerald-400 font-semibold block">
                ● Reserve Met
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                Escrow Protected
              </span>
            </div>
          </div>

          {/* Status Message Alert */}
          {bidStatus === "success" && (
            <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in">
              <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{statusMessage}</span>
            </div>
          )}

          {bidStatus === "error" && (
            <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Quick Increment Bids */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Quick Bid Increments
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[10, 25, 50].map((inc) => {
                const targetBid = currentAmount + inc;
                return (
                  <button
                    key={inc}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => handlePlaceBid(targetBid)}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-800/80 hover:bg-violet-900/40 border border-slate-700 hover:border-violet-500 transition-all cursor-pointer group active:scale-95"
                  >
                    <span className="text-[11px] text-slate-400 group-hover:text-violet-300 font-medium">
                      +${inc}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-violet-200">
                      ${targetBid.toFixed(0)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Bid Input Form */}
          <form onSubmit={handleCustomSubmit} className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Or Enter Custom Bid Amount
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold">
                  $
                </span>
                <input
                  type="number"
                  step="1"
                  min={minNextBid}
                  value={customBid}
                  onChange={(e) => setCustomBid(e.target.value)}
                  placeholder={minNextBid.toFixed(2)}
                  className="w-full pl-8 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-semibold text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md hover:shadow-violet-600/30 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Placing..." : "Place Bid"}
              </button>
            </div>
          </form>

          {/* Included In Lot */}
          {item.includes && item.includes.length > 0 && (
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                Package Contents Included
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-300">
                {item.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                    <span className="truncate">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* VIP Pass Banner */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-violet-950/60 to-indigo-950/60 border border-violet-500/20 flex items-center justify-between gap-3">
            <div className="text-xs">
              <span className="font-bold text-violet-300 block">Want 0% Buyer Fees & Auto-Snipe Protection?</span>
              <span className="text-slate-400 text-[11px]">Upgrade to GameVault VIP Bidder Pass.</span>
            </div>
            <Link
              href="/unlock"
              onClick={onClose}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              VIP Pass
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
