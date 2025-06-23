"use client";

import { Heart, Music, VolumeX, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import GuestName from "@/components/guestname";

interface HomeSectionProps {
  isMuted: boolean;
  onToggleMusic: () => void;
  onOpenInvitation: () => void;
  isOpened: boolean;
}

export default function HomeSection({
  isMuted,
  onToggleMusic,
  onOpenInvitation,
  isOpened,
}: HomeSectionProps) {
  const scrollToCouple = () => {
    const element = document.getElementById("welcome");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/backgroundImage.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
        <div className="text-center space-y-6 max-w-md mx-auto">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-lg font-light tracking-wider">The Wedding Of</p>
            <h1 className="text-4xl md:text-5xl font-bold font-serif italic">
              Ai siti & Syahidar
            </h1>
            <p className="text-xl font-light">30 Juni 2025</p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-4 my-8">
            <div className="w-12 h-px bg-white/60"></div>
            <Heart className="w-6 h-6 text-emerald-300" />
            <div className="w-12 h-px bg-white/60"></div>
          </div>

          {/* Recipient */}
          <div className="space-y-3">
            <p className="text-base font-light">Kepada Yth:</p>
            <GuestName />
            <p className="text-sm font-light italic">Di Tempat</p>
          </div>

          {/* Open Button */}
          <div className="pt-6">
            {!isOpened ? (
              <Button
                onClick={onOpenInvitation}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105"
              >
                📧 Buka Undangan
              </Button>
            ) : (
              <Button
                onClick={scrollToCouple}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105"
              >
                👇 Lihat Detail
              </Button>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        {isOpened && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        )}
      </div>

      {/* Music Toggle */}
      <button
        onClick={onToggleMusic}
        className="fixed top-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Music className="w-5 h-5" />
        )}
      </button>

      {/* Welcome Message */}
      {isOpened && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white/80">
          <p className="text-sm">Selamat datang di undangan pernikahan kami</p>
          <p className="text-xs">Scroll ke bawah untuk melihat detail acara</p>
        </div>
      )}
    </section>
  );
}
