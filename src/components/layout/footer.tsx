import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 pt-12 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Brand & Newsletter */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-extrabold text-white">Mas Assurance</span>
            </div>
            <p className="text-gray-400 mb-4">
              Elevate your online presence with stunning designs and seamless user
              experiences.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full flex-1 px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-500 rounded-l-lg focus:outline-none"
              />
              <button className=" px-4 bg-yellow-500 text-black font-semibold rounded-r-lg hover:bg-yellow-600 transition-colors duration-200 overflow-hidden">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map((label, idx) => (
                <li key={idx}>
                  <a
                    href={`/${label.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-yellow-500 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="w-full md:w-1/3 items-center md:items-end flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Web Ave, Mumbai, India</p>
            <p className="text-gray-400 mt-1">+91 98765 43210</p>
            <p className="text-gray-400 mt-1">hello@webify.com</p>
            <div className="flex space-x-4 mt-4">
              {[ // Social Icons
                {
                  label: "Twitter",
                  svgPath:
                    "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482A13.944 13.944 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723a4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A10.025 10.025 0 0 0 24 4.557z"
                },
                {
                  label: "LinkedIn",
                  svgPath:
                    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.059-1.866-3.059-1.867 0-2.153 1.459-2.153 2.966v5.697h-3v-10h2.881v1.368h.041c.402-.761 1.381-1.562 2.844-1.562 3.041 0 3.604 2.005 3.604 4.611v5.583z"
                },
                {
                  label: "Instagram",
                  svgPath:
                    "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.84s-.012 3.574-.069 4.84c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.577 2.163 15.197 2.163 12s.012-3.574.069-4.84c.062-1.366.333-2.633 1.308-3.608C4.523 2.496 5.79 2.225 7.156 2.163 8.422 2.105 8.802 2.163 12 2.163zm0-2.163C8.737 0 8.332.015 7.052.072 5.691.129 4.397.443 3.312 1.528 2.227 2.613 1.913 3.907 1.856 5.268.799 6.547.798 6.947.798 12c0 5.053.015 5.453.058 6.732.057 1.361.371 2.655 1.456 3.74 1.085 1.085 2.379 1.399 3.74 1.456 1.279.043 1.679.058 6.732.058s5.453-.015 6.732-.058c1.361-.057 2.655-.371 3.74-1.456 1.085-1.085 1.399-2.379 1.456-3.74.043-1.279.058-1.679.058-6.732s-.015-5.453-.058-6.732c-.057-1.361-.371-2.655-1.456-3.74-1.085-1.085-2.379-1.399-3.74-1.456C17.453.015 17.053 0 12 0z"
                }
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
