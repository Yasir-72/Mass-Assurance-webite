"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

// Define the shape of your form data
interface AdvisorFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function TalkToAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AdvisorFormInputs>();

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    reset(); 
  };

  const onSubmit: SubmitHandler<AdvisorFormInputs> = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/send/senddata`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Error ${res.status}: ${errText}`);
      }
      // Optionally read JSON response
      // const json = await res.json();
      reset();            // clear inputs
      setIsOpen(false);   // close modal
    } catch (err) {
      console.error("Submission error:", err);
      // you could set an error state here to show a message
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="text-white px-4 sm:px-6 py-2 rounded-md bg-black/50 border border-transparent
               [border-image:linear-gradient(to_right,#FFB600,rgba(255,255,255,0)_100%)_1]
               transition-colors duration-300"
      >
        Talk to Advisor
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-md
                       flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-6 mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Contact Advisor</h2>
                <button onClick={closeModal} className="text-white text-2xl leading-none">
                  &times;
                </button>
              </div>

              {/* Form */}
              <form
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                    className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.phone ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Sending..."
                    : isSubmitSuccessful
                    ? "Sent!"
                    : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
