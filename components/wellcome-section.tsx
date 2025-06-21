"use client";

import { Calendar, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function WelcomeSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-30T08:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const saveToCalendar = () => {
    const eventDetails = {
      text: "Ai siti & Syahidar Wedding",
      details: "Hadiri acara pernikahan Ai siti & Syahidar",
      location:
        "LAPANGAN VOLY CIBOLANG, Kp.Cibolang, RT.03 RW.09, Desa Cidatar, Kec.Cisurupan-Garut",
      dates: "20250630T010000Z/20250630T070000Z", // 08:00-14:00 WIB in UTC
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.text
    )}&details=${encodeURIComponent(
      eventDetails.details
    )}&location=${encodeURIComponent(eventDetails.location)}&dates=${
      eventDetails.dates
    }`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section
      id="welcome"
      className="min-h-screen relative overflow-hidden py-16 px-4 flex flex-col items-center justify-center"
    >
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-section.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-green-800/50 to-teal-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* Opening Text */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-400 font-bold  mb-4">
            The Wedding Of
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-emerald-300"></div>
            <Heart className="w-6 h-6 text-emerald-400" />
            <div className="w-16 h-px bg-emerald-300"></div>
          </div>
        </div>
        {/* Wedding Image */}
        <div className="relative w-80 h-80 mx-auto mb-8 animate-fade-in-up">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/couple.png"
              alt="Wedding Illustration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
            <div className="absolute top-4 right-4">
              <Heart className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart
                className="w-4 h-4 text-teal-400 animate-pulse"
                fill="currentColor"
              />
            </div>
          </div>
        </div>

        {/* Names */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 animate-zoom-in">
          Ai siti <span className="text-emerald-300">&</span> Syahidar
        </h1>

        {/* Date */}
        <h3 className="text-xl md:text-2xl font-light text-white/80 animate-fade-in-right">
          30 Juni 2025
        </h3>

        {/* Countdown */}
        <div className="animate-fade-in-up">
          <div className="text-white rounded-2xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">
              Menuju Hari Bahagia
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {["Hari", "Jam", "Menit", "Detik"].map((label, i) => {
                const value = [
                  timeLeft.days,
                  timeLeft.hours,
                  timeLeft.minutes,
                  timeLeft.seconds,
                ][i];
                return (
                  <div className="text-center" key={label}>
                    <div className="bg-emerald-500 text-white rounded-lg p-4 mb-2">
                      <span className="text-2xl md:text-3xl font-bold">
                        {String(value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-sm text-white font-medium">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Save to Calendar Button */}
        <div className="flex justify-center animate-fade-in-up">
          <button
            onClick={saveToCalendar}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Simpan di Kalender
          </button>
        </div>
      </div>

      {/* Decorative Hearts */}
      <div className="absolute top-10 left-10 opacity-30">
        <Heart className="w-8 h-8 text-emerald-300 animate-float" />
      </div>
      <div className="absolute top-20 right-16 opacity-30">
        <Heart className="w-6 h-6 text-teal-300 animate-float-delayed" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-30">
        <Heart className="w-10 h-10 text-green-300 animate-float" />
      </div>

      {/* Ayat Penutup */}
      <div className="relative z-10 text-white text-center px-4 md:px-8 py-12 mt-12 border-t border-white/20 max-w-3xl mx-auto animate-fade-in-up">
        <p className="text-sm md:text-base font-medium uppercase mb-2">
          QS. Ar-Rum Ayat 21
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ
          اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </p>
        <p className="italic text-sm md:text-base leading-relaxed">
          &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&quot;
        </p>
      </div>
    </section>
  );
}
