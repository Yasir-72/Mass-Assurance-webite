"use client";
import React from "react";
import Image from "next/image";
import TalkToAdvisor from "@/components/layout/talktoadvisor";
import { motion } from "framer-motion";
import GetQuote from "@/components/layout/getquote";

export default function Herosection() {
  const handleClick = () => {
    window.location.href = "tel:+918850687306";
  };
  return (
    <section className="relative bg-black overflow-hidden mt-10 w-full">
      {/* Content area */}
      <motion.div
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl text-white">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Mas <span className="text-yellow-500">Assurance</span>
          </motion.h1>
          <motion.p
            className="relative my-6 py-1 text-sm sm:text-base md:text-lg lg:text-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span
              className="absolute inset-x-0 top-0 h-1 w-36 sm:w-54 bg-[#FFB600]
              [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"
            ></span>
            Beyond Insurance – Your Car’s Best Assurance
            <span
              className="absolute inset-x-0 bottom-0 h-1 w-36 sm:w-54 bg-[#FFB600]
              [clip-path:polygon(100%_50%,_0%_0%,_0%_100%)]"
            ></span>
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            MAS Assurance is a premier risk assurance company, offering top-tier
            extended warranty and comprehensive service solutions exclusively
            for premium and luxury vehicles. We are driven by a singular
            purpose: to provide peace of mind to vehicle owners by delivering
            industry-leading protection plans that go far beyond standard
            coverage. We understand that owning a luxury vehicle is not just
            about mobility—it’s about investment, pride, and performance. Our
            services are thoughtfully crafted to support that lifestyle by
            ensuring your car stays as flawless and functional as the day it
            left the showroom.
          </motion.p>
        </div>
      </motion.div>

      {/* Background image & CTAs */}
      <motion.div
        className="relative w-full max-w-screen-2xl mx-auto h-[240px] sm:h-[300px] md:h-[400px] lg:h-[500px] sm:px-6 lg:px-16 overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image
          src="/images/Lamborgini_bacground.jpg"
          alt="Lamborghini"
          fill
          className="object-cover object-center opacity-60"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-6 lg:px-16 space-y-4">
          {/* Get Quote button */}
         <GetQuote />

          {/* Talk to Advisor trigger */}
          <motion.button
             className="px-5 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg hover:scale-105 transition flex items-center justify-center gap-2 group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Talk to Advisor</span>
        <svg
          className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
