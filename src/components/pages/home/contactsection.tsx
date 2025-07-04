"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

// Define form data types
interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  // Initialize the form with typed inputs
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Submit handler with typed parameter
  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/send/senddata`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const payload = await res.json();

      if (!res.ok) {
        throw new Error(payload?.message || "Server error, please try again.");
      }

      toast.success("Successfully submitted!");
      reset();
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Failed to submit, please try again");
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto bg-black flex flex-col justify-center px-4 sm:px-6 lg:px-16 pb-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-16">
        Get in <span className="text-yellow-500">Touch</span>
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Map Embed */}
        <div className="w-full h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.213079224663!2d72.8195598!3d18.9661948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6ce5bd005f%3A0xa7bc82d72a6f34ca!2sNavjeevan%20Society%20Wing-A%2C%20Lamington%20Rd%2C%20Navjeevan%20Society%2C%20Navjeevan%20Area%2C%20Dalal%20Estate%2C%20Mumbai%20Central%2C%20Mumbai%2C%20Maharashtra%20400008!5e0!3m2!1sen!2sin!4v1749050056051!5m2!1sen!2sin6"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Right: Contact Info & Form */}
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">Let&apos;s talk over coffee!</h2>
          <p className="text-gray-300">
            We&apos;d love to hear from you. Whether it&apos;s questions about
            courses, pricing, partnerships, or anything else, our team is ready
            to answer all your questions.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 text-yellow-500">📍</span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-400">
                  Navjeevan Society, Building no-3, 11th floor, Office no. 17,
                  Lamington Road, Grant Road, Mumbai-400008
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-500">☎️</span>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9324823450</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-500">✉️</span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">info@masassurance.com</p>
              </div>
            </li>
          </ul>

          <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  errors.name ? "border-red-500" : "border-gray-700"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  errors.email ? "border-red-500" : "border-gray-700"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  errors.phone ? "border-red-500" : "border-gray-700"
                }`}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className={`w-full p-3 bg-gray-800 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  errors.message ? "border-red-500" : "border-gray-700"
                }`}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
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
        </div>
      </div>
    </section>
  );
}
