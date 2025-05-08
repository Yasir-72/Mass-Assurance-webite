import React from "react";
import Image from "next/image";

export default function Herosection() {
  return (
    <section className="relative h-[600px] bg-black overflow-hidden">
      {/* Background Image using Next.js Image */}
      <Image
        src="/images/Lamborgini_bacground.jpg"
        alt="Hero Background"
        fill
        className="object-cover object-center opacity-30"
        priority
        
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 sm:px-16 lg:px-24">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Protecting What Matters Most
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Comprehensive insurance solutions tailored for your life and business
            needs.
          </p>
        </div>
      </div>
    </section>
  );
}