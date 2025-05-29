"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export const cards = [
  {
    id: 1,
    name: "WILLAMS",
    description: `Our flagship plan that offers all-inclusive coverage for major mechanical and electrical systems including the engine, automatic transmission, air conditioning, suspension, braking, steering, fuel injection system, oil seals`,
    image: "/images/download.jpeg",
    dark: true,
  },
  {
    id: 2,
    name: "WILLAMS",
    description: `Our flagship plan that offers all-inclusive coverage for major mechanical and electrical systems including the engine, automatic transmission, air conditioning, suspension, braking, steering, fuel injection system, oil seals`,
    image: "/images/download.jpeg",
    dark: false,
  },
  {
    id: 3,
    name: "WILLAMS",
    description: `Our flagship plan that offers all-inclusive coverage for major mechanical and electrical systems including the engine, automatic transmission, air conditioning, suspension, braking, steering, fuel injection system, oil seals`,
    image: "/images/download.jpeg",
    dark: true,
  },
  {
    id: 4,
    name: "WILLAMS",
    description: `Our flagship plan that offers all-inclusive coverage for major mechanical and electrical systems including the engine, automatic transmission, air conditioning, suspension, braking, steering, fuel injection system, oil seals`,
    image: "/images/download.jpeg",
    dark: false,
  },
  {
    id: 5,
    name: "WILLAMS",
    description: `Our flagship plan that offers all-inclusive coverage for major mechanical and electrical systems including the engine, automatic transmission, air conditioning, suspension, braking, steering, fuel injection system, oil seals`,
    image: "/images/download.jpeg",
    dark: true,
  },
  {
    id: 6,
    name: "WILLAMS",
    description: `Our flagship plan that offers all-inclusive coverage for major mechanical and electrical systems including the engine, automatic transmission, air conditioning, suspension, braking, steering, fuel injection system, oil seals`,
    image: "/images/download.jpeg",
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

  const loopedCards = [...cards, ...cards];

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
              <div className="w-10 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 sm:border-4 border-yellow-500 bg-white">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="pt-3 sm:pt-4 pl-2 flex flex-col h-full">
                <h2 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 whitespace-normal truncate">
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
