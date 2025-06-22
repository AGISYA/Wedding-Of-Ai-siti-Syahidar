"use client";

import { Gift, Copy, Check, Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg-section.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Gift Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-emerald-800/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-md w-full">
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
              <h3 className="text-2xl font-bold text-white">Dana Digital</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-4 text-center">
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
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-8 text-center mt-12"
        >
          <h3 className="text-2xl font-serif font-bold text-emerald-600 mb-4">
            Terima Kasih
          </h3>
          <p className="text-white leading-relaxed">
            Kehadiran Anda di hari bahagia kami sudah merupakan hadiah yang
            sangat berharga. Terima kasih atas doa dan dukungan yang telah Anda
            berikan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
