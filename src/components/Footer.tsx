import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0d14] border-t border-slate-800/90 pt-12 pb-8 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Trust & Value Proposition Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-violet-950/80 border border-violet-500/30 text-violet-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Authenticated</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Every game box, seal, disc, and promo insert inspected by certified grading experts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Escrow Protection</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Funds held securely in escrow until buyer receives and confirms package condition.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Anti-Sniping Shield</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Auctions extend automatically by 3 minutes if a bid lands in the final 60 seconds.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Vault Insured Shipping</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Double-boxed collector packaging with tamper-evident tape and full transit insurance.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Footer Links */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Live Marketplace</h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/videos" className="hover:text-violet-400 transition-colors">PlayStation 5 Exclusives</Link></li>
              <li><Link href="/videos" className="hover:text-violet-400 transition-colors">Rockstar Games Grails</Link></li>
              <li><Link href="/videos" className="hover:text-violet-400 transition-colors">Collector's Steelbooks</Link></li>
              <li><Link href="/videos" className="hover:text-violet-400 transition-colors">Ending Soon Lots</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Bidder Services</h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/unlock" className="hover:text-violet-400 transition-colors">VIP Bidder Pass</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">Escrow Guarantee</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">Grading Scale (1-10)</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">Proxy Auto-Bidding</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">About & Trust</h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">About GameVault</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">Authentication Process</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">Anti-Sniping Rules</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">Contact Support Team</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Supported Payments</h5>
            <p className="text-slate-400 leading-relaxed mb-3">
              Secure checkout via Visa, Mastercard, AMEX, PayPal, Apple Pay, Bitcoin & Ethereum.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">VISA</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">MC</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">PAYPAL</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-400">CRYPTO</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <p>© 2026 GameVault Auctions Inc. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <Link href="/about" className="hover:text-slate-300 transition-colors">Terms of Auction</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-300 transition-colors">Bidder Code of Conduct</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
