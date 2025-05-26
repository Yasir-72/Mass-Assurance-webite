"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function InsurancePageContent() {
  const servicePackages = [
    {
      name: "MAS Compact",
      tagline: "Essential Maintenance",
      features: [
        "Engine Oil & Filter",
        "Air & Fuel Filter",
        "AC & Dust Filter",
        "Brake Service",
        "Labor & Scanning",
      ],
      image: "/images/compact-package.jpg",
    },
    {
      name: "MAS Compact Plus",
      tagline: "Comprehensive Care",
      features: [
        "All Compact Features",
        "Transmission Oil & Filter",
        "Brake Pads Front & Rear",
        "Wheel Alignment & Balancing",
        "Wiper Blades Replacement",
      ],
      image: "/images/compact-plus.jpg",
    },
  ];

  const warranties = [
    {
      name: "Comprehensive Warranty",
      tagline: "Maximum Protection",
      features: [
        "Engine & Transmission",
        "Brakes & Suspension",
        "Steering & Fuel Systems",
        "Electrical & AC Systems",
      ],
    },
    {
      name: "Essential Warranty",
      tagline: "Core Coverage",
      features: [
        "Brakes & Steering",
        "Electrical Components",
        "Fuel Injection & Oil Seals",
        "Suspension Parts",
      ],
    },
  ];

  const faqs = [
    {
      q: "Can I transfer my plan?",
      a: "Yes, both service packages and warranties are transferable to new owners within the coverage period.",
    },
    {
      q: "Where can I claim services?",
      a: "At any MAS-approved or authorized dealership nationwide using genuine OEM parts.",
    },
    {
      q: "What’s the waiting period?",
      a: "Service packages start immediately; warranties have a 30-day waiting period post-purchase.",
    },
  ];

  return (
    <main className="flex flex-col w-full space-y-32 py-16 bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-[24rem] overflow-hidden">
        <Image
          src="/images/insurance-hero.jpg"
          alt="Warranty Coverage"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-extrabold text-yellow-500 drop-shadow-lg"
          >
            Extended Protection Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg lg:text-xl text-gray-300 max-w-3xl"
          >
            Tailor your coverage with premium service packages and warranties—crafted exclusively for luxury vehicles.
          </motion.p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-yellow-500 mb-12"
        >
          Service Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicePackages.map((pkg, i) => (
            <motion.div
              key={i}
              className="group bg-zinc-900 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="relative h-56">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-semibold text-white">
                  {pkg.name}
                </h3>
              </div>
              <div className="p-8">
                <p className="text-yellow-500 font-medium italic mb-4">{pkg.tagline}</p>
                <ul className="space-y-2 text-gray-300">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mt-1 mr-2 text-yellow-500">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center text-yellow-500 font-semibold hover:underline">
                  Learn More <ChevronRight className="ml-1 text-yellow-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Warranty Plans */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-yellow-500 mb-12"
        >
          Extended Warranty Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {warranties.map((w, i) => (
            <motion.div
              key={i}
              className="relative bg-gradient-to-br from-zinc-900 to-gray-700 rounded-3xl p-8 text-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="absolute top-0 right-0 mt-4 mr-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                {i + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{w.name}</h3>
              <p className="italic mb-6 text-yellow-500">{w.tagline}</p>
              <ul className="space-y-2">
                {w.features.map((f, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="mt-1 mr-2 text-yellow-500">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-yellow-500 mb-12"
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {[
            { step: "1", title: "Select Plan", desc: "Choose your package online in minutes." },
            { step: "2", title: "Schedule Service", desc: "Book at any authorized center nationwide." },
            { step: "3", title: "Drive Worry-Free", desc: "Rest easy with seamless coverage." },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="flex-1 text-center p-6 bg-zinc-900 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-black text-2xl font-bold">
                {s.step}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">{s.title}</h4>
              <p className="text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-yellow-500 mb-12"
        >
          FAQs
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h5 className="font-semibold mb-2 text-white">{faq.q}</h5>
              <p className="text-gray-300">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-500 mb-4">
          Ready to Protect Your Ride?
        </h2>
        <p className="text-gray-300 mb-6">
          Get a personalized quote today and drive with confidence.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-600 transition"
        >
          <span>Get a Quote</span>
          <ChevronRight size={20} />
        </Link>
      </section>
    </main>
  );
}
