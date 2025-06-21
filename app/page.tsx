"use client";

import CoupleSection from "@/components/couple-section";
import EventSection from "@/components/event-section";
import GiftSection from "@/components/gift-section";
import HomeSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import WelcomeSection from "@/components/wellcome-section";
import WishesSection from "@/components/wishas-section";
import { useEffect, useRef, useState } from "react";
// ... import komponen lain

export default function Home() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const openInvitation = () => {
    setIsInvitationOpened(true);
  };

  const toggleMusic = () => {
    setIsMuted((prev) => !prev);
  };

  // Sinkronisasi mute dengan audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;

      if (!isMuted && isInvitationOpened) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio autoplay blocked:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted, isInvitationOpened]);

  return (
    <div className="min-h-screen">
      {/* Audio tag - disembunyikan */}
      <audio
        ref={audioRef}
        src="/audio/wedding-nasheed.mp3"
        loop
        autoPlay
        muted={isMuted}
      />

      {/* Halaman sebelum dibuka */}
      {!isInvitationOpened ? (
        <HomeSection
          isMuted={isMuted}
          onToggleMusic={toggleMusic}
          onOpenInvitation={openInvitation}
          isOpened={false}
        />
      ) : (
        <>
          {/* Setelah dibuka */}
          <HomeSection
            isMuted={isMuted}
            onToggleMusic={toggleMusic}
            onOpenInvitation={openInvitation}
            isOpened={true}
          />
          <WelcomeSection />
          <CoupleSection />
          <EventSection />
          <GiftSection />
          <WishesSection />
          <Navigation />
        </>
      )}
    </div>
  );
}
