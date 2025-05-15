"use client";
import React, { ReactNode, useState } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How's This Work?",
    answer:
      "A more economical solution that still provides robust protection for critical systems like brakes, electricals, AC, fuel systems, and steering components. It’s perfect for those who want dependable coverage at an accessible price point.",
    defaultOpen: true,
  },
  {
    question: "How's This Work?",
    answer:
      "A more economical solution that still provides robust protection for critical systems like brakes, electricals, AC, fuel systems, and steering components. It’s perfect for those who want dependable coverage at an accessible price point.",
  },
  {
    question: "How's This Work?",
    answer:
      "A more economical solution that still provides robust protection for critical systems like brakes, electricals, AC, fuel systems, and steering components. It’s perfect for those who want dependable coverage at an accessible price point.",
  },
  {
    question: "How's This Work?",
    answer:
      "A more economical solution that still provides robust protection for critical systems like brakes, electricals, AC, fuel systems, and steering components. It’s perfect for those who want dependable coverage at an accessible price point.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    FAQ_ITEMS.findIndex((i) => i.defaultOpen) ?? null
  );

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-16 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-20">
        FAQ'S
      </h1>
      <div className="w-full border border-white p-3 md-p-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Any Questions<br />
            We Got You
          </h1>
          <p className="text-gray-300 ">
            A more economical solution that still provides robust protection for
            critical systems like brakes, electricals, AC, fuel systems, and
            steering components. It’s perfect for those who want dependable
            coverage at an accessible price point.
          </p>
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
