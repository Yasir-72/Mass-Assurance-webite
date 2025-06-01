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
    question: "Is coverage valid if I go to a non-authorized service center?",
    answer:
      "Only in true emergencies—repairs at non-authorized shops are covered up to a capped amount; any costs beyond that cap are out of pocket.",
    image: "/images/faq-0.jpg",
    defaultOpen: false,
  },
  {
    question: "Which authorized service stations can I use?",
    answer:
      "Any shop listed on our “Authorized Repair Centers” page—these are certified luxury-car dealers or independent garages approved by your manufacturer.",
    image: "/images/faq-1.jpg",
    defaultOpen: false,
  },
  {
    question: "What does my luxury-car policy cover?",
    answer:
      "Collision/comprehensive damage, agreed-value payout, OEM-parts repairs, theft/vandalism, exotic rental reimbursement, roadside assistance, and optional international coverage.",
    image: "/images/faq-2.jpg",
    defaultOpen: false,
  },
  {
    question: "What is the duration of the policy and renewal process?",
    answer:
      "Policies run 12 months; you’ll receive a renewal notice 30 days before expiration, with a 15-day grace period for reinstatement if you miss the due date.",
    image: "/images/faq-3.jpg",
    defaultOpen: false,
  },
  {
    question: "How does the claim process work?",
    answer:
      "Report the incident via our 24/7 hotline or online, we assign a luxury-car adjuster, inspect at an authorized center, approve OEM-based repairs (usually within 24 hours), and pay the shop directly—plus arrange a premium rental if you’ve opted in.",
    image: "/images/faq-4.jpg",
    defaultOpen: false,
  },
  {
    question:
      "Can I customize my coverage if I have aftermarket modifications?",
    answer:
      "Yes. We offer optional coverage add-ons for aftermarket parts (e.g., custom wheels, performance tuning, audio systems). Simply provide us with receipts or valuation details, and we’ll agree on their insured value upfront to ensure full replacement cost.",
    image: "/images/faq-5.jpg",
    defaultOpen: false,
  },
  {
    question: "Do you provide concierge pick-up and delivery during repairs?",
    answer:
      "Absolutely. For qualifying policies, we offer complimentary concierge service: we’ll pick up your vehicle from home or work, take it to the authorized center, and return it to you once repairs are complete.",
    image: "/images/faq-6.jpg",
    defaultOpen: false,
  },
];

export default function FaqSection() {
  // Determine the initial openIndex (use first defaultOpen if any)
  const defaultIdx = FAQ_ITEMS.findIndex((item) => item.defaultOpen === true);
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultIdx >= 0 ? defaultIdx : null
  );

  // If FAQ_ITEMS is empty, don’t render anything
  if (!Array.isArray(FAQ_ITEMS) || FAQ_ITEMS.length === 0) {
    return null;
  }

  // Ensure openIndex is within valid bounds; fallback to 0
  const safeIndex =
    typeof openIndex === "number" &&
    openIndex >= 0 &&
    openIndex < FAQ_ITEMS.length
      ? openIndex
      : 0;

  const currentItem = FAQ_ITEMS[safeIndex];

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
              key={safeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {/* Only render Image if currentItem.image exists */}
              {currentItem.image && (
                <Image
                  src={currentItem.image}
                  alt="FAQ Visual"
                  width={600}
                  height={300}
                  className="w-full rounded-xl object-cover h-60"
                />
              )}
              <p className="text-gray-300">{currentItem.answer}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={idx} className="border-b border-yellow-400 pb-2">
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
