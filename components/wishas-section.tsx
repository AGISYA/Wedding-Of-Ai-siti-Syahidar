"use client";

import type React from "react";
import { MessageSquare, Send, Heart } from "lucide-react";
import { useState } from "react";

export default function WishesSection() {
  const [newWish, setNewWish] = useState({
    name: "",
    message: "",
    attendance: "",
  });

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.name && newWish.message && newWish.attendance) {
      const text = `Halo, saya ${newWish.name}.\n\nUcapan & Doa:\n${newWish.message}\n\nKonfirmasi Kehadiran: ${newWish.attendance}`;
      const phoneNumber = "+6285640604572"; // Ganti dengan nomor tujuan (tanpa +)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        text
      )}`;

      window.open(whatsappUrl, "_blank");

      // Reset form
      setNewWish({ name: "", message: "", attendance: "" });
    }
  };

  return (
    <section
      id="wishes"
      className="min-h-screen relative overflow-hidden py-16 px-4 pb-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-section.jpeg')" }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <MessageSquare className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-500 mb-4">
            Ucapan & Doa
          </h2>
          <p className="text-white text-lg">
            Berikan ucapan terbaik untuk kedua mempelai
          </p>
          <div className="flex items-center mt-6 justify-center space-x-4">
            <div className="w-16 h-px bg-emerald-300"></div>
            <Heart className="w-6 h-6 text-emerald-400" />
            <div className="w-16 h-px bg-emerald-300"></div>
          </div>
        </div>

        {/* Bagian form ditengah */}
        <div className="flex justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-full max-w-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Kirim Ucapan
            </h3>
            <form onSubmit={handleSubmitWish} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={newWish.name}
                  onChange={(e) =>
                    setNewWish({ ...newWish, name: e.target.value })
                  }
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ucapan & Doa
                </label>
                <textarea
                  value={newWish.message}
                  onChange={(e) =>
                    setNewWish({ ...newWish, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none bg-white/80 backdrop-blur-sm"
                  placeholder="Tulis ucapan dan doa terbaik Anda..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setNewWish({ ...newWish, attendance: "Hadir" })
                    }
                    className={`p-3 rounded-lg border-2 transition-all bg-white/80 backdrop-blur-sm ${
                      newWish.attendance === "Hadir"
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-gray-300 hover:border-emerald-300 text-gray-500"
                    }`}
                  >
                    ✓ Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setNewWish({ ...newWish, attendance: "Tidak Hadir" })
                    }
                    className={`p-3 rounded-lg border-2 transition-all bg-white/80 backdrop-blur-sm ${
                      newWish.attendance === "Tidak Hadir"
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-gray-300 hover:border-red-300 text-gray-500"
                    }`}
                  >
                    ✗ Tidak Hadir
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-200"
              >
                <Send className="w-4 h-4" />
                Kirim ke WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Penutup */}
        <div className="text-center mt-16 py-8 space-y-4">
          <p className="text-white italic">
            &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang.&quot;
          </p>
          <p className="text-white text-sm">QS. Ar-Rum: 21</p>

          <div className="pt-6">
            <p className="text-white font-medium">
              Wassalamu&apos;alaikum Wr. Wb.
            </p>
            <p className="text-white">Kami yang berbahagia,</p>
            <p className="text-white font-semibold text-lg">
              Ai siti & Syahidar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
