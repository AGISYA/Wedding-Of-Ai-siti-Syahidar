"use client";

import CoupleSection from "@/components/couple-section";
import EventSection from "@/components/event-section";
import GiftSection from "@/components/gift-section";
import HomeSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import WelcomeSection from "@/components/wellcome-section";
import WishesSection from "@/components/wishas-section";
import { useEffect, useRef, useState, Suspense } from "react";

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
        <Suspense
          fallback={
            <div className="text-center py-10 text-white">
              Loading undangan...
            </div>
          }
        >
          <HomeSection
            isMuted={isMuted}
            onToggleMusic={toggleMusic}
            onOpenInvitation={openInvitation}
            isOpened={false}
          />
        </Suspense>
      ) : (
        <>
          <Suspense
            fallback={
              <div className="text-center py-10 text-white">
                Loading undangan...
              </div>
            }
          >
            <HomeSection
              isMuted={isMuted}
              onToggleMusic={toggleMusic}
              onOpenInvitation={openInvitation}
              isOpened={true}
            />
          </Suspense>
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
