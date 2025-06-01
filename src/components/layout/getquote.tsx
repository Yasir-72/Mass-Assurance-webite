"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Truck, ShieldCheck, Headset } from "lucide-react";

interface QuoteFormInputs {
  name: string;
  email: string;
  mobile: string;
  carBrand: string;
  carModel: string;
  purchaseDate: string;
}

export default function GetQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null); // 🔥 Error state
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<QuoteFormInputs>();

  const onSubmit: SubmitHandler<QuoteFormInputs> = async (data) => {
    setSubmissionError(null); // 🔥 Clear previous error
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/send/sendpdf`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Server responded with an error. Please try again later."
        ); // 🔥 Custom error
      }

      console.log("Quote request:", data);
      reset();
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmissionError(
        "We’re facing a server Problem. Please retry in a few minutes."
      ); // 🔥 User-friendly message
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg hover:scale-105 transition flex items-center justify-center gap-2 group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Get a Quote</span>
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

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/10 flex items-center justify-center p-4 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Container */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl w-full max-w-md sm:max-w-2xl px-2 md:px-6 py-16 relative shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="text-center mb-6 sm:mb-8 space-y-2">
                <Star className="mx-auto w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 animate-pulse" />
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Unlock Your Premium Quote
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Experience transparent pricing and bespoke coverage for your
                  luxury ride.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Input fields ... unchanged */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("name", { required: "Name required" })}
                      className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: "Email required" })}
                      className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      {...register("mobile", {
                        required: "Mobile required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter 10 digits",
                        },
                      })}
                      className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.mobile && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Car Brand (e.g. Mercedes)"
                      {...register("carBrand", { required: "Brand required" })}
                      className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.carBrand && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.carBrand.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Car Model (e.g. S-Class)"
                      {...register("carModel", { required: "Model required" })}
                      className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.carModel && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.carModel.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="date"
                      {...register("purchaseDate", {
                        required: "Purchase date required",
                      })}
                      className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.purchaseDate && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.purchaseDate.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 🔥 Updated Submit Button with Spinner + State */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold rounded-full hover:from-yellow-600 hover:to-yellow-800 transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </div>
                  ) : isSubmitSuccessful ? (
                    "Submitted!"
                  ) : submissionError ? (
                    "Retry in a few minutes"
                  ) : (
                    "Submit"
                  )}
                </button>

                {/* 🔥 Error message */}
                {submissionError && (
                  <p className="text-red-400 text-center mt-2 text-sm">
                    {submissionError}
                  </p>
                )}
              </form>

              {/* Highlights Footer */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
                    label: "100% OEM Parts",
                  },
                  {
                    icon: <Truck className="w-5 h-5 text-yellow-400" />,
                    label: "Free Roadside Support",
                  },
                  {
                    icon: <Headset className="w-5 h-5 text-yellow-400" />,
                    label: "24/7 Concierge Service",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                  >
                    {item.icon}
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
