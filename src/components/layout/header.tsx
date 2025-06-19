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
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-black/70  fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-24 pr-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Mas_Assurance_Logo_Transparent.png"
            alt="Company Logo"
            width={125}
            height={125}
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-yellow-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-yellow-500/10"
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
              className="h-6 w-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile dropdown menu */}
        <div
          className={`fixed top-24 inset-x-0 bg-black/80 backdrop-blur-md transform transition-transform duration-300 ease-out origin-top md:hidden ${
            open ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-3/4 text-center text-white text-lg font-semibold py-2 rounded-lg transition-all duration-200 hover:bg-yellow-500/20 hover:text-yellow-500"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
