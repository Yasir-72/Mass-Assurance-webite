"use client";

import React, { useEffect, useRef, RefObject } from "react";
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
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = scrollRef1.current;
    const c2 = scrollRef2.current;
    if (!c1 || !c2) return;

    const scrollSpeed = 1;
    const totalWidth = c1.scrollWidth / 2;

    c2.scrollLeft = totalWidth / 10;

    const step = () => {
      if (!c1 || !c2) return;
      c1.scrollLeft = (c1.scrollLeft + scrollSpeed) % totalWidth;
      c2.scrollLeft = (c2.scrollLeft + scrollSpeed) % totalWidth;
      requestAnimationFrame(step);
    };

    const preventHorizontal = (e: WheelEvent) => {
      if (e.deltaX !== 0) {
        e.preventDefault();
      }
    };

    c1.addEventListener("wheel", preventHorizontal, { passive: false });
    c2.addEventListener("wheel", preventHorizontal, { passive: false });

    const animationId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animationId);
      c1.removeEventListener("wheel", preventHorizontal);
      c2.removeEventListener("wheel", preventHorizontal);
    };
  }, []);

  const loopedCards = [...cards, ...cards];

  const renderRow = (ref: React.RefObject<HTMLDivElement | null>) => (
    <div
      ref={ref}
      className="overflow-x-auto no-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex space-x-6 px-6 whitespace-nowrap ">
        {loopedCards.map((card, idx) => (
          <div
            key={`${card.id}-${idx}`}
            className={`w-80 p-6 rounded-xl flex-shrink-0 relative shadow-md border border-amber-50 ${
              card.dark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="  w-14 h-14 rounded-full overflow-hidden border-4 border-yellow-500 bg-white">
              <Image
                src={card.image}
                alt={card.name}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pt-4 pl-2 flex flex-col h-ful">
              <h2 className="font-bold text-lg mb-2 whitespace-normal truncate">
                {card.name}
              </h2>
              <p className="text-sm italic overflow-hidden block whitespace-normal line-clamp-5 break-words">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section className="bg-black py-16 space-y-10 max-w-screen-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 sm:px-16 lg:px-30">
          Testimonials
        </h1>
        {renderRow(scrollRef1)}
        {renderRow(scrollRef2)}
      </section>
      <section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 sm:px-16 lg:px-30">
          Process
        </h1>
      </section>
    </>
  );
}
