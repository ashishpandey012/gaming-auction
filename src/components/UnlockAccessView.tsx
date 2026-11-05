"use client";

import React, { useState } from "react";
import Link from "next/link";

interface UnlockAccessViewProps {
  onClose?: () => void;
}

export default function UnlockAccessView({ onClose }: UnlockAccessViewProps) {
  const [selectedTier, setSelectedTier] = useState<"free" | "vip">("vip");
  const [gamerTag, setGamerTag] = useState("");
  const [email, setEmail] = useState("");
  const [primaryPlatform, setPrimaryPlatform] = useState("PS5");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setGamerTag("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-8 sm:py-12">
      <div className="relative w-full max-w-[500px] rounded-2xl bg-[#0d1424] p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.25)] border border-violet-500/30 text-white">
        {/* Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {isSuccess ? (
          /* Success Screen: Instant Bidder Pass Issued */
          <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">
                VERIFICATION APPROVED
              </span>
              <h2 className="text-2xl font-black text-white mt-1">
                Welcome to GameVault, {gamerTag || "Collector"}!
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Your <strong className="text-violet-400">{selectedTier === "vip" ? "VIP Collector Pass" : "Standard Bidder Pass"}</strong> has been activated.
              </p>
            </div>

            {/* Virtual Bidder Card Preview */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-violet-900/60 to-slate-900 border border-violet-500/40 text-left space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-extrabold text-violet-300">GAMEVAULT BIDDER ID</span>
                <span className="text-emerald-400 font-mono font-bold">● ACTIVE</span>
              </div>
              <div className="text-lg font-mono font-bold tracking-wider text-white">
                GV-2026-{(Math.floor(Math.random() * 89999) + 10000)}
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-700">
                <span>Tag: <strong className="text-slate-200">{gamerTag || "Bidder"}</strong></span>
                <span>Platform: <strong className="text-slate-200">{primaryPlatform}</strong></span>
                <span>Power: <strong className="text-emerald-300">{selectedTier === "vip" ? "Unlimited" : "$500 Max"}</strong></span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/videos"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm text-center shadow-lg transition-all"
              >
                Jump into Live Bids
              </Link>
              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm transition-colors"
              >
                Register Another
              </button>
            </div>
          </div>
        ) : (
          /* Registration View */
          <>
            {/* Header Badge */}
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                OFFICIAL BIDDER PASS
              </div>

              <h2 className="text-2xl sm:text-[28px] font-black text-white tracking-tight">
                Unlock Live Bidding
              </h2>

              <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                Get authenticated to place real-time bids on rare games, sealed grails, and collector editions.
              </p>
            </div>

            {/* Tier Selector: Free vs VIP Pass */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedTier("free")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedTier === "free"
                    ? "bg-violet-900/40 border-violet-500 shadow-md"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Standard Pass</span>
                  {selectedTier === "free" && (
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                  )}
                </div>
                <div className="mt-1 text-sm font-extrabold text-slate-200">FREE</div>
                <div className="mt-1 text-[11px] text-slate-400 leading-tight">
                  Up to $500 bidding limit • Standard lots
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTier("vip")}
                className={`relative p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedTier === "vip"
                    ? "bg-violet-900/50 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950">
                  POPULAR
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-violet-300">VIP Collector</span>
                  {selectedTier === "vip" && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <div className="mt-1 text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">
                  $14.99 <span className="text-xs text-slate-400 font-normal">/ mo</span>
                </div>
                <div className="mt-1 text-[11px] text-slate-300 leading-tight">
                  Unlimited bids • 0% buyer fee • Anti-sniping
                </div>
              </button>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="mt-5 space-y-3.5">
              {/* Gamer Tag */}
              <div>
                <label
                  htmlFor="gamerTag"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                >
                  GamerTag / Collector Handle
                </label>
                <input
                  id="gamerTag"
                  type="text"
                  required
                  value={gamerTag}
                  onChange={(e) => setGamerTag(e.target.value)}
                  placeholder="e.g. MasterChief_99"
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="collector@example.com"
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Preferred Gaming Platform */}
              <div>
                <label
                  htmlFor="platform"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                >
                  Primary Platform of Interest
                </label>
                <select
                  id="platform"
                  value={primaryPlatform}
                  onChange={(e) => setPrimaryPlatform(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-3.5 py-2 text-sm text-white focus:border-violet-500 focus:outline-none transition-colors"
                >
                  <option value="PS5">PlayStation 5</option>
                  <option value="PS4">PlayStation 4</option>
                  <option value="PC">PC / Steam</option>
                  <option value="Xbox">Xbox Series X / One</option>
                  <option value="Switch">Nintendo Switch</option>
                  <option value="Retro">Retro Cartridges & Sealed Classics</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-extrabold py-3 text-sm shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all cursor-pointer"
              >
                {selectedTier === "vip"
                  ? "Activate VIP Collector Pass ($14.99/mo)"
                  : "Issue Free Bidder Pass"}
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-4 text-center text-[11px] text-slate-400 leading-relaxed">
              By registering, you agree to GameVault&apos;s{" "}
              <Link href="/about" className="text-violet-400 hover:underline font-semibold">
                Auction Rules
              </Link>{" "}
              and{" "}
              <Link href="/about" className="text-violet-400 hover:underline font-semibold">
                Anti-Sniping Code
              </Link>
              . All bids are binding commitments backed by Escrow Protection.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
