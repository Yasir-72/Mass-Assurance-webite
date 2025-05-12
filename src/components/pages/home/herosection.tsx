import React from "react";
import Image from "next/image";

export default function Herosection() {
  return (
    <section className="relative  bg-black overflow-hidden mt-28 w-full sm:px-16 lg:px-30">
      <div className="relative z-20">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Mass Assurance  
          </h1>

          {/* 1st paragraph with stripes */}
          <p
            className="relative my-8 py-1 text-sm 
                       before:content-[''] before:absolute before:inset-x-0 before:top-0
                       before:h-1 before:w-54 before:bg-[#FFB600] 
                       before:[clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]
                       after:content-[''] after:absolute after:inset-x-0 after:bottom-0
                       after:h-1 after:w-54 after:bg-[#FFB600]
                       after:[clip-path:polygon(100%_50%,_0%_0%,_0%_100%)]"
          >
            Beyond Insurance – Your Car’s Best Assurance
          </p>

          {/* 2nd paragraph */}
          <p className="text-lg text-white/90 italic">
            MAS Assurance is a premier risk assurance company, offering top-tier
            extended warranty and comprehensive service solutions exclusively
            for premium and luxury vehicles. We are driven by a singular
            purpose: to provide peace of mind to vehicle owners by delivering
            industry-leading protection plans that go far beyond standard
            coverage. We understand that owning a luxury vehicle is not just
            about mobility—
          </p>
        </div>

        {/* ──────────────── Background Image + Buttons Overlay ──────────────── */}
        <div className="relative w-full  overflow-hidden rounded-lg ">
          {/* Background */}
          <Image
            src="/images/Lamborgini_bacground.jpg"
            alt="Lamborghini"
            width={800}
            height={800}
            className="mx-auto object-cover object-center opacity-60"
            priority
          />

          {/* Buttons on top */}
          <div className="absolute top-0 left-0 flex flex-col items-start justify-start gap-4 mt-12 z-10">
            <button
              className="
                inline-block px-6 py-2 rounded-md
                border border-transparent
                [border-image:linear-gradient(to_right,#FFB600,rgba(255,255,255,0)_100%)_1]
                bg-black/50
              "
            >
              Get Quote
            </button>
            <button
              className="
                 inline-block px-6 py-2 rounded-md
                border border-transparent
                [border-image:linear-gradient(to_right,#FFB600,rgba(255,255,255,0)_100%)_1]
                bg-black/50
              "
            >
              Talk to Advisory
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
