"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/mockData";

interface HeaderProps {
  showSearch?: boolean;
  onHomeClick?: () => void;
}

export default function Header({
  showSearch = true,
  onHomeClick,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const handleBrandOrHomeClick = (e: React.MouseEvent, href: string) => {
    if (onHomeClick && (href === "/" || href === "/offer/2026")) {
      onHomeClick();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0d14]/90 backdrop-blur-md border-b border-violet-900/30">
      {/* Top Gaming Auction Alert Banner */}
      <div className="w-full bg-gradient-to-r from-violet-900/70 via-indigo-900/70 to-slate-900 py-1 px-4 text-center text-[11px] sm:text-xs font-semibold text-slate-200 border-b border-violet-500/10 flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-emerald-400 uppercase tracking-wider font-extrabold">LIVE AUCTION:</span>
        <span className="hidden sm:inline">5 Hot Lots Ending Today • 100% Authenticated Games & Escrow Protection</span>
        <span className="sm:hidden">5 Hot Lots Ending Today</span>
        <Link href="/videos" className="text-violet-300 hover:text-white underline ml-1 font-bold">
          View Bids →
        </Link>
      </div>

      <div
        className={`mx-auto flex ${
          showSearch ? "flex-col md:flex-row" : "flex-row"
        } items-center justify-between max-w-6xl px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 gap-3.5 md:gap-0`}
      >
        {/* Brand Logo with Gaming Gavel Icon */}
        <div className="flex items-center gap-3">
          <Link
            href="/offer/2026"
            onClick={(e) => handleBrandOrHomeClick(e, "/offer/2026")}
            className="group flex items-center gap-2.5"
            id="brand-logo"
          >
            {/* Controller / Gavel Emblem */}
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
                GAME<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">VAULT</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-violet-950 border border-violet-500/40 text-violet-300 ml-1">
                  AUCTIONS
                </span>
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 md:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/offer/2026" && pathname === "/") ||
              (link.href !== "/" && link.href !== "/offer/2026" && pathname?.startsWith(link.href));

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleBrandOrHomeClick(e, link.href)}
                className={`text-xs sm:text-sm font-semibold transition-all relative py-1 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Search & VIP Bidder CTA */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center">
          {showSearch && (
            <div className="relative w-56 sm:w-64 md:w-52">
              <input
                id="header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games, editions..."
                className="w-full rounded-xl bg-[#0e1627] pl-3.5 pr-8 py-2 text-xs text-white placeholder-slate-500 border border-slate-700/80 focus:border-violet-500 focus:outline-none transition-colors"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Bidder Pass Button */}
          <Link
            href="/unlock"
            className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-violet-600/30 transition-all shrink-0 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Bidder Pass</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
