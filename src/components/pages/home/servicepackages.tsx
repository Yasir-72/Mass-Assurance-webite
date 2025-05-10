import React from "react";
import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Compact Package",
    image: "/images/service1.jpeg",
    description:
      "An essential maintenance plan covering all your core servicing needs including engine oil changes, AC filter checks, and fuel filter service.",
  },
  {
    id: 2,
    title: "Compact Plus Package",
    image: "/images/service2.jpeg",
    description:
      "Everything in the Compact Package, plus coverage for brakes, wheel alignment & balancing, and wiper blades.",
  },
  {
    id: 3,
    title: "Comprehensive Warranty",
    image: "/images/headphone.jpeg",
    description:
      "All-inclusive coverage for mechanical and electrical systems: engine, transmission, suspension, braking, steering, and more.",
  },
  {
    id: 4,
    title: "Essential Warranty",
    image: "/images/smartphone.png",
    description:
      "A more economical solution that still provides robust protection for critical systems like brakes, electrics, AC, fuel systems, and steering components.",
  },
  {
    id: 5,
    title: "Premium Warranty",
    image: "/images/headphone.jpeg",
    description:
      "Adds bumper-to-bumper coverage on top of the Comprehensive plan, including electronics, infotainment, and advanced driver-assist features.",
  },
  {
    id: 6,
    title: "Platinum Plan",
    image: "/images/service2.jpeg",
    description:
      "Our top-tier package: full-service maintenance plus roadside assistance, tire & rim protection, and concierge support for the ultimate peace of mind.",
  },
];

export default function ServicePackages() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-black px-6 sm:px-16 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
        Service Packages
      </h1>
      <p className="text-lg text-gray-300 mt-4 max-w-3xl">
        We believe that regular maintenance is the key to a smooth, powerful,
        and long-lasting vehicle. Our service packages are tailored to meet
        essential upkeep needs while adding value and convenience.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56 sm:h-64 lg:h-48">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <p
                className="relative my-3 py-2 text-sm 
                       before:content-[''] before:absolute before:inset-x-0 before:top-0
                       before:h-1 before:w-32 before:bg-[#FFB600] 
                       before:[clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]
                       after:content-[''] after:absolute after:inset-x-0 after:bottom-0
                       after:h-1 after:w-32 after:bg-[#FFB600]
                       after:[clip-path:polygon(100%_50%,_0%_0%,_0%_100%)]"
              >
                {pkg.title}
              </p>
              <p className="text-gray-300 text-sm flex-1">{pkg.description}</p>
              <button className="mt-4 self-start bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
