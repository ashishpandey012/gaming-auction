"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnlockAccessView from "@/components/UnlockAccessView";

export default function StandaloneUnlockPage() {
  const router = useRouter();

  const handleClose = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/offer/2026");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#070a13] text-white selection:bg-violet-600 selection:text-white">
      {/* Navigation Header without search box */}
      <Header showSearch={false} />

      {/* Main VIP Bidder Pass View */}
      <main className="flex-1 flex flex-col">
        <UnlockAccessView onClose={handleClose} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
