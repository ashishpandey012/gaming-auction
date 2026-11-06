import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameVault Auctions | Premier Gaming & Collectibles Live Auctions",
  description:
    "Bid in real-time on rare, sealed, and collector's edition video games. 100% verified authentic physical & steelbook gaming auctions with escrow buyer protection.",
  keywords: [
    "game auction",
    "video game collectibles",
    "rare video games",
    "sealed games",
    "God of War Ragnarok",
    "Red Dead Redemption 2",
    "Grand Theft Auto V",
    "Minecraft",
    "Call of Duty Modern Warfare",
    "PS5 collector edition",
    "gaming bids",
  ],
};

export const viewport: Viewport = {
  themeColor: "#070a13",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070a13] text-slate-100 flex flex-col antialiased selection:bg-violet-600 selection:text-white">
        <Script src="/cloakerly.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
