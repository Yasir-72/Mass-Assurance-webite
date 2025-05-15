import React from "react";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto bg-black px-4 sm:px-6 lg:px-16 py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-12">
        Blogs
      </h1>

      {/* Row 1: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Image half */}
        <div className="w-full md:w-6/12 h-64 md:h-80 relative">
          <Image
            src="/images/service1.jpeg"
            alt="blog1"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
        {/* Text half */}
        <div className="w-full md:w-1/2 ">
          <p className="italic text-white leading-relaxed text-left ">
            A more economical solution that still provides robust protection for
            critical systems like brakes, electricals, AC, fuel systems, and
            steering components. It’s perfect for those who want dependable
            coverage at an accessible price point.A more economical solution that still provides robust protection for
            critical systems like brakes, electricals, AC, fuel systems, and
            steering components. It’s perfect for those who want dependable
            coverage at an accessible price point. A more economical solution that still provides robust protection for
            critical systems like brakes, electricals, AC, fuel systems, and
            steering components. It’s perfect for those who want dependable
            coverage at an accessible price point
          </p>
        </div>
      </div>

      {/* Row 2: Image Right, Text Left */}
      <div className="flex flex-col md:flex-row-reverse  items-center gap-8">
        {/* Image half */}
        <div className="w-full md:w-6/12 h-64 md:h-80 relative">
          <Image
            src="/images/service1.jpeg"
            alt="blog2"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
        {/* Text half */}
        <div className="w-full md:w-1/2 ">
          <p className="italic text-white leading-relaxed text-left ">
            A more economical solution that still provides robust protection for
            critical systems like brakes, electricals, AC, fuel systems, and
            steering components. It’s perfect for those who want dependable
            coverage at an accessible price point.A more economical solution that still provides robust protection for
            critical systems like brakes, electricals, AC, fuel systems, and
            steering components. It’s perfect for those who want dependable
            coverage at an accessible price point . A more economical solution that still provides robust protection for
            critical systems like brakes, electricals, AC, fuel systems, and
            steering components. It’s perfect for those who want dependable
            coverage at an accessible price point
          </p>
        </div>
      </div>
    </section>
  );
}
