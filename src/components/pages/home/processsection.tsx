"use client";
import React, { useEffect, useState } from "react";

// AutoStepper: self-advancing horizontal stepper with progress bar
interface AutoStepperProps {
  steps: string[];
  interval?: number; // ms between steps
}

const AutoStepper: React.FC<AutoStepperProps> = ({
  steps,
  interval = 1500,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(
        () => setCurrentStep((prev) => prev + 1),
        interval
      );
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length, interval]);

  const progressPercent = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="w-full px-4">
      <div className="relative h-1 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-1 bg-yellow-500 rounded-full transition-all duration-500 z-0"
          style={{ width: `${progressPercent}%` }}
        />
        {steps.map((label, idx) => {
          const left = (idx / (steps.length - 1)) * 100;
          const isActive = idx <= currentStep;
          return (
            <div
              key={idx}
              className="absolute top-3 flex flex-col items-center z-10"
              style={{ left: `${left}%`, transform: "translate(-50%, -50%)" }}
            >
              <div
                className={`w-6 h-6 md:w-10 md:h-10 rounded-full border-2 transition-colors duration-300 
                  ${
                    isActive
                      ? "bg-yellow-500 border-yellow-400"
                      : "bg-white border-gray-400"
                  }`}
              />
              <span
                className={`mt-2 text-xs font-semibold uppercase 
                ${isActive ? "text-yellow-500" : "text-gray-500"}`}
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

// ProcessSection: uses AutoStepper with defined steps
export default function ProcessSection() {
  const steps = ["Choose", "Compare", "Buy", "Claim"];
  return (
    <section className="w-full max-w-screen-2xl mx-auto py-8 px-4 sm:px-6 lg:px-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-20">Process</h1>
      <AutoStepper steps={steps} interval={1500} />
    </section>
  );
}
