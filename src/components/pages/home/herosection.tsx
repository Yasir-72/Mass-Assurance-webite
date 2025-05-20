import React from "react";
import Image from "next/image";

export default function Herosection() {
  return (
    <section className="relative bg-black overflow-hidden mt-20 w-full  ">
      {/* Inner padding wrapper */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 relative z-20">
        <div className="max-w-4xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Mas Assurance
          </h1>

          {/* 1st paragraph with stripes */}
          <p className="relative my-6 py-1 text-sm sm:text-base md:text-lg lg:text-xl">
            <span className="absolute inset-x-0 top-0 h-1 w-36 sm:w-54 bg-[#FFB600] [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></span>
            Beyond Insurance – Your Car’s Best Assurance
            <span className="absolute inset-x-0 bottom-0 h-1 w-36 sm:w-54 bg-[#FFB600] [clip-path:polygon(100%_50%,_0%_0%,_0%_100%)]"></span>
          </p>

          {/* 2nd paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 italic">
            MAS Assurance is a premier risk assurance company, offering top-tier
            extended warranty and comprehensive service solutions exclusively
            for premium and luxury vehicles. We are driven by a singular
            purpose: to provide peace of mind to vehicle owners by delivering
            industry-leading protection plans that go far beyond standard
            coverage. We understand that owning a luxury vehicle is not just
            about mobility—
          </p>
        </div>
      </div>

      {/* Background image & buttons */}
      <div className="relative w-full max-w-screen-2xl mx-auto h-[240px] sm:h-[300px] md:h-[400px] lg:h-[500px] sm:px-6 lg:px-16 overflow-hidden">
        <Image
          src="/images/Lamborgini_bacground.jpg"
          alt="Lamborghini"
          fill
          className="object-cover object-center opacity-60 "
          priority
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-6 lg:px-16 space-y-4">
          <button className="text-white px-4 sm:px-6 py-2 rounded-md bg-black/50 border border-transparent [border-image:linear-gradient(to_right,#FFB600,rgba(255,255,255,0)_100%)_1]">
            Get Quote
          </button>
          <button className="text-white px-4 sm:px-6 py-2 rounded-md bg-black/50 border border-transparent [border-image:linear-gradient(to_right,#FFB600,rgba(255,255,255,0)_100%)_1]">
            Talk to Advisory
          </button>
        </div>
      </div>
    </section>
  );
}
