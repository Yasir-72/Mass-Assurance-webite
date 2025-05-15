"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section className="max-w-screen-2xl mx-auto bg-black flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-16">
        Get in Touch
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
            We'd love to hear from you. Whether it’s questions about courses,
            pricing, partnerships, or anything else, our team is ready to answer
            all your questions.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 text-yellow-500">📍</span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-400">
                  I-ZAB Academy, Mumbai, Maharashtra, India
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-500">☎️</span>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+91 12345 67890</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-500">✉️</span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">contact@izabacademy.com</p>
              </div>
            </li>
          </ul>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
