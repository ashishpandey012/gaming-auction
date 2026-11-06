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
    <header className="w-full bg-[#0d1424] border-b border-slate-800">
      <div
        className={`mx-auto flex ${
          showSearch ? "flex-col md:flex-row" : "flex-row"
        } items-center justify-between max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 gap-3.5 sm:gap-4 md:gap-0`}
      >
        {/* Brand Logo with Gaming Gavel Icon */}
        <div className="flex items-center">
          <Link
            href="/offer/2026"
            onClick={(e) => handleBrandOrHomeClick(e, "/offer/2026")}
            className="group flex items-center gap-2.5"
            id="brand-logo"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>

            <span className="text-2xl sm:text-[26px] font-black tracking-tight text-white">
              GAME<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">VAULT</span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 md:gap-10">
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
                className={`text-sm sm:text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Search Input Box */}
        {showSearch && (
          <div className="flex items-center justify-center w-full md:w-auto">
            <div className="relative w-64 sm:w-72 md:w-56">
              <input
                id="header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games..."
                className="w-full rounded-md bg-[#070a13] pl-3.5 pr-9 py-1.5 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-700/80 focus:border-violet-500 focus:outline-none transition-colors"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                <svg
                  className="h-4 w-4"
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
          </div>
        )}
      </div>
    </header>
  );
}
