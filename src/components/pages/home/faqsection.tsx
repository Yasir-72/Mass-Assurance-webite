"use client";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: ReactNode;
  image: string;
  defaultOpen?: boolean;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Why do I need special insurance for a luxury car?",
    answer:
      "Luxury vehicles come with higher repair costs, advanced tech, and greater theft risk. Standard policies may fall short—specialized insurance ensures full protection and peace of mind.",
    image: "/images/faq-0.jpg",
    defaultOpen: true,
  },
  {
    question: "How is the value of my luxury car determined in a claim?",
    answer:
      "We offer 'agreed value' coverage—meaning you and the insurer agree on your vehicle's worth upfront, so there are no surprises if a total loss occurs.",
    image: "/images/faq-1.jpg",
  },
  {
    question: "Can I choose who repairs my luxury vehicle?",
    answer:
      "Yes, with our luxury insurance policies, you can choose your preferred repair shop or access our approved network of certified luxury auto specialists using OEM parts.",
    image: "/images/faq-2.jpg",
  },
  {
    question: "Does this cover rental vehicles while mine is being repaired?",
    answer:
      "Absolutely. We include luxury rental reimbursement, so you’ll never have to downgrade while your vehicle is being repaired after a covered incident.",
    image: "/images/faq-3.jpg",
  },
  {
    question: "Will my policy cover international travel with my car?",
    answer:
      "Yes, we offer optional international coverage so your luxury vehicle is protected even when you travel abroad—perfect for road trips or cross-border use.",
    image: "/images/faq-4.jpg",
  },
  {
    question: "Do you offer discounts for good driving or multiple cars?",
    answer:
      "Yes, we offer exclusive discounts for safe drivers, garaged vehicles, anti-theft features, and multi-vehicle policies—especially for collectors or households with multiple luxury cars.",
    image: "/images/faq-5.jpg",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    FAQ_ITEMS.findIndex((i) => i.defaultOpen) ?? null
  );

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-16 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-20">
        FAQ&apos;S
      </h1>
      <div className="w-full bg-zinc-900 rounded-3xl p-3 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Dynamic Visual */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Any Questions
            <br />
            <span className="text-yellow-500">We Got You</span>
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <Image
                src={FAQ_ITEMS[openIndex ?? 0].image}
                alt="FAQ Visual"
                width={600}
                height={300}
                className="w-full rounded-xl object-cover h-60"
              />
              <p className="text-gray-300">
                {FAQ_ITEMS[openIndex ?? 0].answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={idx} className="border-b border-yellow-500 pb-2">
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-white text-lg font-medium focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="text-gray-300">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
