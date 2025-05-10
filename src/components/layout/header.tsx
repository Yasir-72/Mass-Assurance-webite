import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black w-full fixed top-0 z-50  ">
        <div className="flex justify-between items-center h-16 py-12 lg:py-14 px-6 lg:px16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/Mas_Assurance_Logo_Transparent.png"
                alt="Company Logo"
                width={130}
                height={130}
              />
            </Link>
          </div>

          {/* Navigation menu on the right */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className=" text-white hover:text-[#FFB600]  px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#FFB600] px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="/insurance"
              className="text-white hover:text-[#FFB600] px-3 py-2 rounded-md text-sm font-medium"
            >
              Insurance
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-[#FFB600] px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#FFB600] px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/partners"
              className="text-white hover:text-[#FFB600] px-3 py-2 rounded-md text-sm font-medium"
            >
              Partner
            </Link>
          </nav>
        </div>
      
    </header>
  );
}
