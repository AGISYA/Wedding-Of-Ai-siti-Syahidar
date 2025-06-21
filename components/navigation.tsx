"use client";

import {
  Home,
  Users,
  Calendar,
  Gift,
  MessageSquare,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "welcome", icon: Heart, label: "Welcome" },
    { id: "couple", icon: Users, label: "Couple" },
    { id: "event", icon: Calendar, label: "Event" },
    { id: "gift", icon: Gift, label: "Gift" },
    { id: "wishes", icon: MessageSquare, label: "Wishes" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 animate-slide-up">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "text-emerald-600 bg-emerald-50"
                  : "text-gray-600 hover:text-emerald-500"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
