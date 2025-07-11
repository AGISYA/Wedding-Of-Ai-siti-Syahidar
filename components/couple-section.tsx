"use client";

import { Heart, Instagram } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="min-h-screen relative overflow-hidden py-16 px-4"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-section.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-emerald-600 opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-400 font-bold mb-4">
            Mempelai
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-emerald-300"></div>
            <Heart className="w-6 h-6 text-emerald-400" />
            <div className="w-16 h-px bg-emerald-300"></div>
          </div>
        </motion.div>

        {/* Couple Profiles */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bride */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Gambar & Nama */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto mb-6 overflow-hidden relative">
                <Image
                  src="/images/pengantin wanita 01.png"
                  alt="Ai siti"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 256px"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-serif font-bold text-emerald-400">
                Ai siti
              </h3>
              <p className="text-lg text-white font-medium">
                Ai siti Nurlatifah
              </p>
              <p className="text-emerald-500">Putri Pertama dari</p>
              <div>
                <p className="text-white font-medium">Bapak Ade Kodir</p>
                <p className="text-white">&</p>
                <p className="text-white font-medium">Ibu Nani</p>
              </div>
              <div className="inline-flex items-center space-x-1 mt-4 bg-white rounded-xl px-2 py-1 shadow">
                <Instagram className="w-4 h-4 text-emerald-500" />
                <a
                  href="https://instagram.com/stynl08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  @stynl08
                </a>
              </div>
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto mb-6 overflow-hidden relative">
                <Image
                  src="/images/pengantin pria.png"
                  alt="Syahidar"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 256px"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-teal-500" />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-serif font-bold text-emerald-400">
                Syahidar
              </h3>
              <p className="text-lg text-white font-medium">
                Syahidar Rajabil Akbar
              </p>
              <p className="text-emerald-500">Putra Ketiga dari</p>
              <div>
                <p className="text-white font-medium">Bapak Ade Hidayat</p>
                <p className="text-white">&</p>
                <p className="text-white font-medium">Ibu Mimin</p>
              </div>
              <div className="inline-flex items-center space-x-1 mt-4 bg-white rounded-xl px-2 py-1 shadow">
                <Instagram className="w-4 h-4 text-emerald-500" />
                <a
                  href="https://instagram.com/syahidar_ra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  @syahidar_ra
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Love Story */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-bold text-center text-gray-800 mb-6">
            Kisah Cinta Kami
          </h3>
          <div className="prose prose-gray max-w-none text-center">
            <p className="text-gray-600 leading-relaxed">
              &quot;Pertemuan kami dimulai dari sebuah kebetulan yang indah...
              Kami percaya bahwa cinta sejati adalah anugerah terindah
              dari-Nya.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
