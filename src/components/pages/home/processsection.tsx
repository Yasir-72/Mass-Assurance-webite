"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const labelRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // reset refs
    circleRefs.current = [];
    labelRefs.current = [];

    // Animate line on scroll into view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(lineRef.current, {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power1.inOut",
        });
        // animate steps sequentially after line
        circleRefs.current.forEach((circle, i) => {
          const delay = 1.3 + i * 0.3;
          gsap.to(circle, {
            backgroundColor: "#fff",
            duration: 0.3,
            delay,
            ease: "power1.out",
          });
          gsap.to(labelRefs.current[i], {
            color: "#fff",
            duration: 0.3,
            delay,
            ease: "power1.out",
          });
        });
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-black">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 px-4 sm:px-6 lg:px-16">
        Process
      </h1>
      <div className="relative w-full overflow-hidden py-16">
        {/* base line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2">
          <div
            ref={lineRef}
            className="h-full bg-yellow-600 origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* steps */}
        <div className="relative flex justify-between items-center px-4 sm:px-6 lg:px-16">
          {["CHOOSE", "COMPARE", "BUY", "CLAIM"].map((text, idx) => (
            <div key={text} className="flex flex-col items-center">
              <div
                ref={(el) => {
                  if (el) circleRefs.current[idx] = el;
                }}
                className="w-6 h-6 rounded-full bg-gray-500 mb-2"
              />
              <div
                ref={(el) => {
                  if (el) labelRefs.current[idx] = el;
                }}
                className="text-gray-500 font-bold"
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
