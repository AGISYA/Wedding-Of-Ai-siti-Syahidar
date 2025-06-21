"use client";

import { Calendar, Clock, MapPin, ExternalLink, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { Button } from "./ui/button";

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
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-400 font-bold  mb-4">
            Detail Acara
          </h2>
          <p className="text-white text-lg">
            Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dalam
            momen bahagia kami
          </p>
          <div className="flex items-center mt-8 justify-center space-x-4">
            <div className="w-16 h-px bg-emerald-300"></div>
            <Heart className="w-6 h-6 text-emerald-400" />
            <div className="w-16 h-px bg-emerald-300"></div>
          </div>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center text-white">
          {/* Akad Nikah */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-500">Akad Nikah</h3>
            <p>Ijab Kabul</p>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <p className="font-semibold">Senin, 30 Juni 2025</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <p>08:00 WIB s.d. selesai</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="text-left">
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
          </div>

          {/* Resepsi */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-500">Resepsi</h3>
            <p>Walimatul Ursy</p>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <p className="font-semibold">Senin, 30 Juni 2025</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-400" />
                <p>10:00 WIB s.d. selesai</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <div className="text-left">
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
          </div>
        </div>
      </div>
    </section>
  );
}
