import React from "react";
import GetQuote from "./getquote";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 pt-12 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Brand & Newsletter */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-extrabold text-white">
                Mas <span className="text-yellow-500">Assurance</span>
              </span>
            </div>

            <p className="text-gray-400 mb-4 text-center md:text-start">
              Need personalized coverage for your luxury car? Our expert team is
              ready to help you get the perfect insurance quote.
            </p>

            <GetQuote />
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Quick <span className="text-yellow-500">Links</span>
            </h3>
            <ul className="space-y-2 text-center">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/insurance", label: "Insurance" },
                { href: "/contact", label: "Contact Us" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-yellow-500 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="w-full md:w-1/3 items-center md:items-end flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">
              Contact <span className="text-yellow-500">Us</span>
            </h3>
            <p className="text-gray-400">123 Web Ave, Mumbai, India</p>
            <p className="text-gray-400 mt-1">+91 98765 43210</p>
            <p className="text-gray-400 mt-1">hello@webify.com</p>
            <div className="flex space-x-4 mt-4">
              {[
                // Social Icons
                {
                  label: "Twitter",
                  svgPath:
                    "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482A13.944 13.944 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723a4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A10.025 10.025 0 0 0 24 4.557z",
                },
                {
                  label: "LinkedIn",
                  svgPath:
                    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.059-1.866-3.059-1.867 0-2.153 1.459-2.153 2.966v5.697h-3v-10h2.881v1.368h.041c.402-.761 1.381-1.562 2.844-1.562 3.041 0 3.604 2.005 3.604 4.611v5.583z",
                },
                {
                  label: "Instagram",
                  svgPath:
                    "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 1.5h-9A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9A4 4 0 0 0 20.5 16.5v-9A4 4 0 0 0 16.5 3.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0z",
                },
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-yellow-500 transition-colors duration-200"
                  aria-label={icon.label}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-5 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mas Assurance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
