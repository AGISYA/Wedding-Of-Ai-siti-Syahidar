"use client";

import { Calendar, Clock, MapPin, ExternalLink, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function EventSection() {
  const openGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/555d6nuNbiZNyDmy6?g_st=ac", "_blank");
  };

  return (
    <section
      id="event"
      className="min-h-screen relative overflow-hidden py-16 px-4"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg-section.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-400 font-bold mb-4">
            Detail Acara
          </h2>
          <p className="text-lg">
            Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dalam
            momen bahagia kami
          </p>
          <div className="flex items-center mt-8 justify-center space-x-4">
            <div className="w-16 h-px bg-emerald-300"></div>
            <Heart className="w-6 h-6 text-emerald-400" />
            <div className="w-16 h-px bg-emerald-300"></div>
          </div>
        </motion.div>

        {/* Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-emerald-500">Akad Nikah</h3>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <p className="font-semibold">Senin, 30 Juni 2025</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <p>08:00 WIB s.d. selesai</p>
              </div>
              <div className="flex items-start space-x-2 text-left">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <p className="font-semibold">LAPANGAN VOLY CIBOLANG</p>
                  <p className="text-sm">Kp. Cibolang, RT.03 RW.09</p>
                  <p className="text-sm">
                    Desa Cidatar, Kec. Cisurupan - Garut
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={openGoogleMaps}
              className="inline-flex items-center justify-center text-white underline hover:text-emerald-300 transition"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Buka Google Maps
            </button>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-green-400">Resepsi</h3>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <p className="font-semibold">Senin, 30 Juni 2025</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-400" />
                <p>10:00 WIB s.d. selesai</p>
              </div>
              <div className="flex items-start space-x-2 text-left">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <p className="font-semibold">LAPANGAN VOLY CIBOLANG</p>
                  <p className="text-sm">Kp. Cibolang, RT.03 RW.09</p>
                  <p className="text-sm">
                    Desa Cidatar, Kec. Cisurupan - Garut
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={openGoogleMaps}
              className="inline-flex items-center justify-center text-white underline hover:text-green-300 transition"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Buka Google Maps
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
