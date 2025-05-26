"use client";

import React, { useEffect, useState } from "react";

interface AutoStepperProps {
  steps: string[];
  interval?: number;
}

const AutoStepper: React.FC<AutoStepperProps> = ({
  steps,
  interval = 4000,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (steps && steps.length > 1 && currentStep < steps.length - 1) {
      const timer = setTimeout(
        () => setCurrentStep((prev) => prev + 1),
        interval
      );
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps, interval]);

  if (!steps || steps.length < 2) return null;

  const progressPercent = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="w-full px-4">
      <div className="relative h-1 bg-gray-200 rounded-full overflow-visible">
        {/* Progress fill */}
        <div
          className="absolute top-0 left-0 h-1 bg-yellow-500 rounded-full transition-all ease-in-out duration-[4000ms]"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Step markers */}
        {steps.map((label, idx) => {
          const leftPercent = (idx / (steps.length - 1)) * 100;
          const isActive = idx <= currentStep;
          return (
            <div
              key={idx}
              className={`absolute flex flex-col items-center -translate-x-1/2 -translate-y-6`}
              style={{ left: `${leftPercent}%` }}
            >
              <div
                className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "w-10 h-10 md:w-16 md:h-16 border-yellow-400 bg-yellow-500"
                      : "w-6 h-6 md:w-10 md:h-10 border-gray-400 bg-white"
                  }
                `}
              >
                <span
                  className={`font-bold ${
                    isActive ? "text-white text-xl" : "text-gray-700 text-lg"
                  }`}
                >
                  {idx + 1}
                </span>
              </div>
              <span
                className={`mt-2 text-xs md:text-sm font-semibold uppercase ${
                  isActive ? "text-yellow-500" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function ProcessSection() {
  const steps = ["Choose", "Compare", "Buy", "Claim"];

  return (
    <section className="w-full max-w-screen-2xl mx-auto mb-20 px-4 sm:px-6 lg:px-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-12">
        Process
      </h1>
      <p className="text-gray-300 max-w-2xl text-lg mb-20">
        Our streamlined, four-step journey makes getting coverage effortless:
        simply choose your plan, compare features, complete your purchase, and
        file a claim—all in just a few clicks.
      </p>
      <AutoStepper steps={steps} interval={4000} />
    </section>
  );
}
