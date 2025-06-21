"use client";

import { Gift, Copy, Check, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { Button } from "./ui/button";

export default function GiftSection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (text: string, accountType: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(accountType);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section
      id="gift"
      className="min-h-screen relative overflow-hidden py-16 px-4"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-section.jpeg')",
        }}
      >
        {/* Emerald Overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-500 mb-4">
            Wedding Gift
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
            kado secara cashless.
          </p>
          <div className="flex items-center mt-8 justify-center space-x-4">
            <div className="w-16 h-px bg-emerald-300"></div>
            <Heart className="w-6 h-6 text-emerald-400" />
            <div className="w-16 h-px bg-emerald-300"></div>
          </div>
        </div>

        {/* Gift Options */}
        <div className="flex justify-center">
          <div className="bg-emerald-800 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Dana Digital</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Dana</p>
                <p className="font-mono text-lg font-bold text-gray-800">
                  085860250027
                </p>
                <p className="text-sm text-gray-700">a.n. Ai siti Nurlatifah</p>
                <button
                  onClick={() => copyToClipboard("085860250027", "dana")}
                  className="mt-2 w-full bg-white text-emerald-600 border border-emerald-300 hover:bg-emerald-50 font-medium py-2 px-4 rounded flex items-center justify-center gap-2 text-sm"
                >
                  {copiedAccount === "dana" ? (
                    <>
                      <Check className="w-4 h-4" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin Nomor
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className=" p-8 text-center mt-12">
          <h3 className="text-2xl font-serif font-bold text-emerald-600 mb-4">
            Terima Kasih
          </h3>
          <p className="text-white leading-relaxed">
            Kehadiran Anda di hari bahagia kami sudah merupakan hadiah yang
            sangat berharga. Terima kasih atas doa dan dukungan yang telah Anda
            berikan.
          </p>
        </div>
      </div>
    </section>
  );
}
