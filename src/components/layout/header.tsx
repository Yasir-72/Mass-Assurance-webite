"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/insurance", label: "Insurance" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
    { href: "/partners", label: "Partner" },
  ];

  return (
    <header className="bg-black w-full fixed top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-16 h-16 relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Mas_Assurance_Logo_Transparent.png"
            alt="Company Logo"
            width={125}
            height={125}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#FFB600] px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile slide-in menu */}
        <div
          className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-black shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative flex flex-col h-full px-6 py-8">
            {/* Top row: Home + Close button */}
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/"
                className="text-white hover:text-[#FFB600] text-lg font-semibold"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <button
                className="text-white p-2 focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Other nav items */}
            <div className="flex flex-col space-y-4">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#FFB600] text-lg font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
