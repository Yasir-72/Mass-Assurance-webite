"use client";

import React, { useEffect, useRef } from "react";
import PersonIcon from "@/icons/person.svg";

export const testimonials = [
  {
    id: 1,
    name: "Chetan Kothari",
    description: `MAS Assurance gave me peace of mind with their comprehensive vehicle protection plan. The claims process was seamless and quick—highly recommend!`,
    image: PersonIcon,
    dark: true,
  },
  {
    id: 2,
    name: "Manoj Pardasny",
    description: `Excellent customer service and honest pricing. MAS Assurance’s coverage saved me from expensive repairs after an unexpected breakdown.`,
    image: PersonIcon,
    dark: false,
  },
  {
    id: 3,
    name: "Ragendra Bohra",
    description: `Their authorized service partners are top-notch. I trust MAS Assurance for all my car maintenance needs. Reliable and professional!`,
    image: PersonIcon,
    dark: true,
  },
  {
    id: 4,
    name: "Bipin Panchal",
    description: `The add-ons like tire protection and key replacement made my plan very valuable. MAS Assurance truly goes above and beyond.`,
    image: PersonIcon,
    dark: false,
  },
  {
    id: 5,
    name: "Pushpak Ranka",
    description: `Fast claims and 24/7 roadside assistance make MAS Assurance stand out. I never worry about my car anymore thanks to their excellent support.`,
    image: PersonIcon,
    dark: true,
  },
  {
    id: 6,
    name: "Rahul Bhansali",
    description: `Professional, reliable, and transparent. MAS Assurance is the best choice for anyone looking for trustworthy car insurance coverage.`,
    image: PersonIcon,
    dark: false,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;
    const totalWidth = container.scrollWidth / 2;

    const step = () => {
      if (!container) return;
      container.scrollLeft = (container.scrollLeft + scrollSpeed) % totalWidth;
      requestAnimationFrame(step);
    };

    const preventHorizontal = (e: WheelEvent) => {
      if (e.deltaX !== 0) e.preventDefault();
    };

    container.addEventListener("wheel", preventHorizontal, { passive: false });

    const animationId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("wheel", preventHorizontal);
    };
  }, []);

  const loopedCards = [...testimonials, ...testimonials];

  return (
    <section className="bg-black py-16 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 px-4 sm:px-6 lg:px-16">
        Testimonials
      </h1>
      <div
        ref={scrollRef}
        className="overflow-x-auto h-[290px] no-scrollbar px-4 sm:px-6 lg:px-16"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex space-x-4 sm:space-x-6 whitespace-nowrap">
          {loopedCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className={`w-64 sm:w-72 md:w-80 lg:w-96 p-4 sm:p-5 md:p-6 rounded-xl flex-shrink-0 relative shadow-md border border-amber-50 ${
                card.dark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="w-10 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 sm:border-4 border-yellow-500 bg-white flex items-center justify-center">
                <card.image
                  className={`w-full h-full p-2  text-yellow-500 rounded-2xl ${
                    card.dark ? "bg-white" : "bg-black"
                  }`}
                  fill="currentColor"
                />
              </div>

              <div className="pt-3 sm:pt-4 pl-2 flex flex-col h-full">
                <h2
                  className={`font-bold text-base sm:text-lg mb-1 sm:mb-2 whitespace-normal truncate ${
                    card.dark ? "text-yellow-500" : "text-black"
                  }`}
                >
                  {card.name}
                </h2>
                <p className="text-xs sm:text-sm italic whitespace-normal line-clamp-5 break-words">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
