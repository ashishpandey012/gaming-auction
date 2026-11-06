import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070a13] text-white selection:bg-violet-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16">
          {/* Centered Heading with Gaming Violet Glow Underline */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>ESTABLISHED 2024</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              About GameVault Auctions
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-2xl mx-auto">
              The premier authenticated live auction marketplace connecting video game collectors, enthusiasts, and preservationists worldwide.
            </p>
          </div>

          {/* About Content Sections */}
          <div className="mt-10 sm:mt-14 space-y-10 text-sm sm:text-base leading-relaxed text-slate-300">
            {/* Intro paragraph card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1424] border border-violet-500/20 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                Our Mission & Story
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Welcome to GameVault Auctions. We were founded with a singular conviction: video games are modern historical artifacts, artistic masterpieces, and priceless cultural treasures. From legendary PlayStation 5 collector boxes and rare Rockstar Games launch kits to sealed vintage cartridges and exclusive steelbooks, our platform empowers collectors to buy and sell authentic pieces of gaming history with absolute confidence.
              </p>
            </div>

            {/* Core Trust Pillars */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                The Four Pillars of GameVault Integrity
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#0d1424] border border-slate-800">
                  <div className="flex items-center gap-2.5 text-violet-400 font-bold text-base mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    1. Rigorous Authentication
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Every lot submitted to GameVault undergoes a thorough 12-point authentication inspection by certified gaming curators, checking factory shrink wrap seam signatures, print registration, disc laser read surface, and promotional vouchers.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#0d1424] border border-slate-800">
                  <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2. Escrow Protection Guarantee
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    When you win an auction, your funds are safely held in bonded escrow. The seller is only disbursed payment once the item has arrived at your door and you have confirmed condition accuracy.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#0d1424] border border-slate-800">
                  <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3. Anti-Sniping Protection
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    No bot snipers allowed. If a bid is placed within the final 60 seconds of any lot, the clock dynamically resets by 3 minutes to guarantee every legitimate collector has an equal opportunity to respond.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#0d1424] border border-slate-800">
                  <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-base mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    4. Vault-Grade Insured Shipping
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Collectibles are shipped in archival UV-protective acrylic sleeves, corner-cushioned shock boxes, and sealed with tamper-evident tape. Full transit value replacement insurance is included on every order.
                  </p>
                </div>
              </div>
            </div>

            {/* Condition Grading Scale */}
            <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-3">
                GameVault Physical Grading Scale
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li><strong className="text-amber-400">Gem Mint (10.0 / 9.8 A+):</strong> Unopened original factory seal with zero scuffs, tight wrap, and flawless structural box corners.</li>
                <li><strong className="text-emerald-400">Mint (9.6 / 9.4 A):</strong> Factory sealed or unopened with near-imperceptible micro-wear on outer plastic or slipcase.</li>
                <li><strong className="text-cyan-400">Near Mint (9.0 - 9.2):</strong> Complete In Box (CIB) with pristine disc, clean steelbook, uncreased manual, and verified working codes.</li>
                <li><strong className="text-slate-300">Collector Grade CIB:</strong> Complete boxed set with all original components, maps, figures, and certificates included.</li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-2">
                Contact & Collector Support
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Have questions regarding lot authentication, proxy bidding limits, or consigning rare games? Our dedicated support team is available 24/7.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold">
                <a
                  href="mailto:support@gamevaultauctions.com"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-violet-900/50 text-white border border-slate-700 transition-colors"
                >
                  support@gamevaultauctions.com
                </a>
                <Link
                  href="/unlock"
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                >
                  Apply for VIP Bidder Pass →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
