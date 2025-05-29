"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/send/senddata`;
      console.log("POSTing to:", url, "payload:", data);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error ${res.status}: ${text}`);
      }

      const json = await res.json();
      console.log("Server response:", json);
      reset();
    } catch (err) {
      console.error("Form submission error:", err);
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9142937618835!2d72.85624397498299!3d19.28609298196224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b048ed46be7d%3A0x69f0472d4346465b!2sI-ZAB%20Academy!5e0!3m2!1sen!2sin!4v1747159944966!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right: Contact Info & Form */}
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">Let's talk over coffee!</h2>
          <p className="text-gray-300">
            We'd love to hear from you. Whether it's questions about courses,
            pricing, partnerships, or anything else, our team is ready to answer
            all your questions.
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
                <p className="text-gray-400">+91 7039512345</p>
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
