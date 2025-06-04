"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Settings, ShieldCheck, Cpu, Truck } from "lucide-react";
import GetQuote from "../layout/getquote";

const fadeInUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };

export default function InsurancePageContent() {
  return (
    <motion.main
      className="space-y-20"
      initial="hidden"
      animate="show"
      variants={stagger}
    >
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-yellow-500 to-yellow-600 overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/luxury-car-hero.jpg"
            alt="Luxury car"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            Beyond <span className="text-black">Insurance</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg sm:text-xl max-w-2xl"
          >
            Your Car’s Best Assurance – premium warranties & service solutions
            for luxury vehicles.
          </motion.p>
        </div>
      </section>

      {/* Purpose Section */}
      <motion.section
        className="max-w-4xl mx-auto px-6 text-center"
        variants={fadeInUp}
      >
        <motion.h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-yellow-500">Assurance</span>
        </motion.h2>
        <motion.p className="mt-4 text-md md:text-lg text-gray-300">
          We are redefining luxury car ownership in India by removing the
          uncertainties of repairs and maintenance. With coverage crafted for
          high-end vehicles and peace-of-mind service at every step, our
          assurance is simple: drive with confidence, knowing your investment is
          protected by experts who understand luxury.
        </motion.p>
      </motion.section>

      {/* What Sets Us Apart */}
      <section className="bg-white py-16">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6 "
          variants={stagger}
          initial="hidden"
          whileInView="show"
        >
          {[
            {
              icon: <Settings className="w-8 h-8 text-yellow-500" />,
              title: "Tailored for Luxury Vehicles",
            },
            {
              icon: <Truck className="w-8 h-8 text-yellow-500" />,
              title: "End-to-End Service Ecosystem",
            },
            {
              icon: <Cpu className="w-8 h-8 text-yellow-500" />,
              title: "Technology-Driven Experience",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
              title: "Authorized Service Providers",
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-yellow-500" />,
              title: "Customer-Centric Philosophy",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-yellow-100 to-white rounded-2xl  shadow-lg hover:shadow-yellow-500/90 transition-shadow duration-500"
              variants={fadeInUp}
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Service Packages */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center"
          variants={fadeInUp}
        >
          Service <span className="text-yellow-500">Packages</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["MAS Compact Package", "MAS Compact Plus Package"].map(
            (title, idx) => (
              <motion.div
                key={title}
                className="bg-gradient-to-br from-yellow-100 to-white p-8 rounded-3xl shadow-lg flex flex-col"
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {(title.includes("Plus")
                      ? [
                          "Everything in Compact",
                          "Front & Rear Brake Pads",
                          "Transmission Oil & Filter",
                          "Wheel Alignment & Balancing",
                          "Wiper Blades",
                        ]
                      : [
                          "Service Labour",
                          "Engine Oil & Filter",
                          "Air Filter",
                          "AC Filter",
                          "Dust Filter",
                          "Fuel Filter",
                          "Brake Service",
                          "Scanning",
                        ]
                    ).map((feat) => (
                      <li key={feat} className="flex items-center">
                        <CheckCircle2 className="text-yellow-500 mr-2" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <p className="m-5 text-sm text-gray-500">
                    {title.includes("Plus")
                      ? "A complete service solution for worry-free driving."
                      : "Ideal for routine upkeep to preserve performance and efficiency."}
                  </p>
                </div>

                {/* Button pushed  */}
                <motion.button
                  className="mt-auto w-48 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  See full coverage
                </motion.button>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Extended Warranty Plans */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center"
          variants={fadeInUp}
        >
          Extended <span className="text-yellow-500">Warranty Plans</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["Comprehensive Warranty", "Essential Warranty"].map(
            (title, idx) => (
              <motion.div
                key={title}
                className="bg-gradient-to-br from-yellow-100 to-white p-8 rounded-3xl shadow-lg flex flex-col"
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {(title.includes("Essential")
                    ? [
                        "Steering System",
                        "Air Conditioning",
                        "Braking System",
                        "Electrical System",
                        "Fuel System",
                        "Oil Seals",
                        "Fuel Injection",
                        "Suspension",
                      ]
                    : [
                        "Engine",
                        "Automatic Transmission",
                        "Steering System",
                        "Air Conditioning",
                        "Braking System",
                        "Electrical System",
                        "Fuel System",
                        "Oil Seals",
                        "Fuel Injection",
                        "Suspension",
                      ]
                  ).map((feat) => (
                    <li key={feat} className="flex items-center">
                      <CheckCircle2 className="text-yellow-500 mr-2" /> {feat}
                    </li>
                  ))}
                </ul>
                <p className="m-5 text-sm text-gray-500">
                  {title.includes("Essential")
                    ? "Budget-friendly coverage for core systems."
                    : "Maximum protection for all major vehicle systems."}
                </p>
                <motion.button
                  className="mt-auto w-48 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  See full coverage
                </motion.button>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <motion.section
        className="overflow-x-auto bg-black px-20"
        variants={fadeInUp}
      >
        <motion.table
          className="min-w-full rounded-xl overflow-hidden backdrop-blur-lg bg-white/10 shadow-2xl border border-yellow-500/30 text-white"
          variants={fadeInUp}
        >
          <thead className="rounded-xl overflow-hidden">
            <tr className="bg-yellow-500/90 text-white text-lg">
              <th className="py-4 px-6">Feature / Component</th>
              <th className="py-4 px-6">Compact</th>
              <th className="py-4 px-6">Compact Plus</th>
              <th className="py-4 px-6">Comprehensive Warranty</th>
              <th className="py-4 px-6">Essential Warranty</th>
            </tr>
          </thead>
          <tbody className="text-white text-base">
            {[
              {
                feature: "Engine Oil / Filters",
                compact: true,
                plus: true,
                compW: true,
                essW: "Partial",
              },
              {
                feature: "Brake Pads",
                compact: "Partial",
                plus: true,
                compW: true,
                essW: true,
              },
              {
                feature: "Transmission Oil & Filter",
                compact: false,
                plus: true,
                compW: true,
                essW: false,
              },
              {
                feature: "Wheel Alignment & Balancing",
                compact: false,
                plus: true,
                compW: false,
                essW: false,
              },
              {
                feature: "Engine",
                compact: false,
                plus: false,
                compW: true,
                essW: false,
              },
              {
                feature: "Steering / AC / Electrical",
                compact: false,
                plus: false,
                compW: true,
                essW: true,
              },
            ].map((row, i) => (
              <motion.tr
                key={i}
                className={`${i % 2 === 0 ? "bg-white/5" : "bg-white/10"}`}
                variants={fadeInUp}
              >
                <td className="py-4 px-6 font-semibold text-white">
                  {row.feature}
                </td>
                <td className="py-4 px-6 text-center">
                  {row.compact === true
                    ? "✅"
                    : row.compact === "Partial"
                    ? "❌/✅"
                    : "❌"}
                </td>
                <td className="py-4 px-6 text-center">
                  {row.plus ? "✅" : "❌"}
                </td>
                <td className="py-4 px-6 text-center">
                  {row.compW ? "✅" : "❌"}
                </td>
                <td className="py-4 px-6 text-center">
                  {row.essW === true
                    ? "✅"
                    : row.essW === "Partial"
                    ? "❌/✅"
                    : "❌"}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </motion.section>

      {/* Final CTA */}
      <motion.section className="flex flex-col items-center text-center py-16 mx-auto" variants={fadeInUp}>
        <motion.h2 className="text-3xl font-bold text-white mb-4">
          Ready to Protect Your Investment?
        </motion.h2>
        <motion.p className="text-gray-300 mb-6 max-w-2xl ">
          Contact us for a personalized quote and drive with absolute peace of
          mind.
        </motion.p>
        <GetQuote/>
      </motion.section>
    </motion.main>
  );
}
