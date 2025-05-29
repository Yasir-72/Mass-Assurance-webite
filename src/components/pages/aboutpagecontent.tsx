"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPageContent() {
  const purpose =
    "Transforming the post-purchase experience of luxury vehicle ownership in India. Eliminating uncertainties around repairs and maintenance so you drive with confidence and zero worry.";
  const mission =
    "To ensure every luxury vehicle owner experiences worry-free driving by providing reliable, affordable, and comprehensive protection—backed by expert service and a human touch.";
  const vision =
    "Become the most trusted name in vehicle risk assurance by delivering superior value, transparent service, and complete peace of mind.";

  const values = [
    {
      icon: "/icons/integrity.svg",
      title: "Integrity",
      desc: "Honesty, transparency, and accountability are at the core of everything we do.",
    },
    {
      icon: "/icons/customer-first.svg",
      title: "Customer First",
      desc: "We build long-term relationships by listening, personalizing, and exceeding expectations.",
    },
    {
      icon: "/icons/innovation.svg",
      title: "Innovation",
      desc: "Smart tools and predictive analytics simplify protection and maximize convenience.",
    },
    {
      icon: "/icons/quality.svg",
      title: "Quality Assurance",
      desc: "Certified centers, trained technicians, and genuine OEM parts guarantee world-class care.",
    },
  ];

  const highlights = [
    {
      icon: "/icons/luxury.svg",
      title: "Tailored for Luxury Vehicles",
      desc: "Component-level plans designed for premium brands—German engineering, Italian performance, and more.",
    },
    {
      icon: "/icons/ecosystem.svg",
      title: "End-to-End Service Ecosystem",
      desc: "Extended warranties, service packages, and 24/7 assistance in one seamless platform.",
    },
    {
      icon: "/icons/tech.svg",
      title: "Technology-Driven",
      desc: "Digital claims, proactive reminders, and a smart, simplified ownership experience.",
    },
    {
      icon: "/icons/partners.svg",
      title: "Authorized Partners",
      desc: "Repairs at OEM dealerships or MAS-approved facilities with genuine parts.",
    },
  ];
  // Features for "Why Choose Us"
  const features = [
    {
      icon: "/icons/coverage.svg",
      title: "Comprehensive Coverage",
      desc: "From engine to electronics—our plans protect every inch of your luxury vehicle.",
    },
    {
      icon: "/icons/fast-claims.svg",
      title: "Fast Claims",
      desc: "Lightning-fast claims processing with dedicated concierge support, 24/7.",
    },
    {
      icon: "/icons/network.svg",
      title: "Vehicle Servicing",
      desc: "Comprehensive luxury vehicle servicing at our certified centers—ensuring peak performance and longevity.",
    },
  ];

  // Leadership Team
  const team = [
    { name: "Alice Johnson", role: "CEO", img: "/images/dummy1.png" },
    { name: "Mark Thompson", role: "CTO", img: "/images/dummy2.png" },
    { name: "Sara Lee", role: "COO", img: "/images/dummy1.png" },
    { name: "David Kim", role: "CFO", img: "/images/dummy2.png" },
  ];

  return (
    <main className="flex flex-col w-full space-y-20 ">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/close-up-luxury.png"
          alt="Luxury car driving on open road"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold text-white"
          >
            Beyond Insurance,
            <br /> Your Car’s Best Assurance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg sm:text-xl text-gray-200 max-w-3xl"
          >
            Premium protection and service crafted exclusively for luxury
            vehicles. Drive with confidence, powered by MAS Assurance.
          </motion.p>
        </div>
      </section>

      {/* Purpose & Mission */}
      <section className="text-center space-y-6 px-4 sm:px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Our Purpose & <span className="text-yellow-500">Mission</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-md md:text-lg text-gray-300"
        >
          {purpose}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-md md:text-lg text-gray-300"
        >
          {mission}
        </motion.p>
      </section>

      {/* Vision & Values */}
      <section className="space-y-12 px-4 sm:px-6 lg:px-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Our Vision & <span className="text-yellow-500">Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-4 max-w-2xl mx-auto text-md md:text-lg text-gray-300"
          >
            {vision}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-white/70 transition-shadow duration-500 text-center"
            >
              <Image
                src={v.icon}
                alt={v.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {v.title}
              </h3>
              <p className="text-gray-300 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="space-y-12 px-4 sm:px-6 lg:px-16">
        <div className="px-3 md:px-12 py-12 md:p-12 bg-gradient-to-r from-gray-800 to-black rounded-2xl shadow-xl ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-white mb-8"
          >
            Why MAS <span className="text-yellow-500">Assurance</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative group flex flex-col items-center text-center p-6 bg-gray-900 rounded-2xl overflow-hidden hover:cursor-pointer"
              >
                  {/* subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-transparent to-transparent opacity-10 group-hover:opacity-20 transition-opacity" />
                <Image
                  src={h.icon}
                  alt={h.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {h.title}
                </h4>
                <p className="text-white text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="max-w-6xl mx-auto px-6 text-center space-y-12">
        <h2 className="text-4xl font-bold text-white">Leadership <span className="text-yellow-500">Team</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-white/70 transition-shadow duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={180}
                height={180}
                className="rounded-full mx-auto"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">
                {member.name}
              </h4>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Support */}
      <section className="max-w-6xl mx-auto px-3 py-16 bg-gradient-to-r from-gray-800 to-black rounded-2xl shadow-xl ">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tech Support <span className="text-yellow-500">Services</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          TrinuMics Solutions & Hardware Services
        </motion.p>

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="relative group w-full md:w-1/3 p-8 bg-gray-900 rounded-2xl overflow-hidden hover:cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-transparent to-transparent opacity-10 group-hover:opacity-20 transition-opacity" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* icon circle */}
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-yellow-500 rounded-full">
                  <Image
                    src={feat.icon}
                    alt={feat.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* title */}
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {feat.title}
                </h3>

                {/* description */}
                <p className="text-gray-300 text-sm mb-4">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 space-y-10">
        <h2 className="text-4xl font-bold text-center text-white">
          Customer <span className="text-yellow-500">Testimonials</span>
        </h2>
        <div className="space-y-8">
          {[
            {
              quote:
                "MAS Assurance gave me the confidence to drive worry-free for years.",
              author: "— Rajesh R., Mumbai",
            },
            {
              quote:
                "Exceptional service and lightning-fast claims processing!",
              author: "— Priya S., Delhi",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <p className="italic text-gray-800">“{t.quote}”</p>
              <p className="mt-4 text-gray-500">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl mx-6">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready to Secure Your Luxury Ride?
        </h2>
        <p className="text-white text-lg mb-6">
          Discover tailored plans and drive with absolute peace of mind.
        </p>
        <div className="relative inline-block group">
          {/* Glowing gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full blur opacity-50 transition-opacity group-hover:opacity-100" />
          <Link
            href="/contact"
            className="relative inline-flex items-center space-x-2 bg-black text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transform transition-shadow duration-300 shadow-lg hover:shadow-yellow-600/50"
          >
            <span>Contact Our Experts</span>
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
