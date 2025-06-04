"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CompactIcon from "@/icons/compact.svg";
import CompactPlusIcon from "@/icons/compactplus.svg";
import ComprehensiveIcon from "@/icons/comprehensive.svg";
import EssentialIcon from "@/icons/essential.svg";

const packages = [
  {
    id: 1,
    title: "Compact Package",
    Icon: CompactIcon,
    description:
      "An essential maintenance plan covering all your core servicing needs including engine oil changes, AC filter checks, and fuel filter service.",
  },
  {
    id: 2,
    title: "Compact Plus Package",
    Icon: CompactPlusIcon,
    description:
      "Everything in the Compact Package, plus coverage for brakes, wheel alignment & balancing, and wiper blades.",
  },
  {
    id: 3,
    title: "Comprehensive Warranty",
    Icon: ComprehensiveIcon,
    description:
      "All-inclusive coverage for mechanical and electrical systems: engine, transmission, suspension, braking, steering, and more.",
  },
  {
    id: 4,
    title: "Essential Warranty",
    Icon: EssentialIcon,
    description:
      "A more economical solution that still provides robust protection for critical systems like brakes, electrics, AC, fuel systems, and steering components.",
  },
];

export default function ServicePackages() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-6 ">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Service <span className="text-yellow-500">Packages</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Choose from our tailored service and warranty packages designed to
          keep your vehicle running at its peak performance and protect you on
          the road.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-600/50 transition-shadow duration-500 flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center items-center h-64 bg-zinc-800">
                <pkg.Icon
                  className="w-40 h-40 text-yellow-500"
                  fill="currentColor"
                  aria-label={pkg.title}
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl text-white font-bold mb-4">
                  {pkg.title}
                </h2>
                <p className="text-gray-400 flex-1 mb-6">{pkg.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link
            href="/insurance"
            className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition "
          >
            Explore the full package
          </Link>
        </div>
      </div>
    </section>
  );
}
