"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import GetQuote from "../layout/getquote";

interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPageContent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormInputs>();

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
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24">
      <div className="relative  max-w-screen-lg mx-auto px-3">
        {/* Header & CTA */}
        <div className="flex flex-col items-center text-center pb-16 ">
          <h1 className="text-5xl font-extrabold leading-tight">
            Get in <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="m-5 text-gray-300">
            Questions about plans or custom quotes? Let’s chat and drive your
            luxury journey forward.
          </p>
          <GetQuote />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Simplified Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-white/10 px-4 py-6 md:p-8 rounded-3xl shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full p-4 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className={`w-full p-4 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter valid 10 digits",
                    },
                  })}
                  className={`w-full p-4 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  className="w-full p-4 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold text-black rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting
                ? "Sending..."
                : isSubmitSuccessful
                ? "Sent!"
                : "Send Message"}
            </button>
          </form>

          {/* Map & Info Cards */}
          <div className="space-y-8">
            <div className="h-80 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.213079224663!2d72.8195598!3d18.9661948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6ce5bd005f%3A0xa7bc82d72a6f34ca!2sNavjeevan%20Society%20Wing-A%2C%20Lamington%20Rd%2C%20Navjeevan%20Society%2C%20Navjeevan%20Area%2C%20Dalal%20Estate%2C%20Mumbai%20Central%2C%20Mumbai%2C%20Maharashtra%20400008!5e0!3m2!1sen!2sin!4v1749050056051!5m2!1sen!2sin6"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  text: "Navjeevan Society, Building 3, 11th Floor, Lamington Road, Mumbai-400008",
                },
                { icon: Phone, label: "Phone", text: "+91 9324823450" },
                { icon: Mail, label: "Email", text: "info@masassurance.com" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl shadow backdrop-blur"
                >
                  <item.icon className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h4 className="font-semibold">{item.label}</h4>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
