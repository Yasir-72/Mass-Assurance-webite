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
    image: "/images/service3.jpeg",
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
    <section className="relative bg-black overflow-hidden w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Service Packages
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl italic">
          We believe that regular maintenance is the key to a smooth, powerful,
          and long-lasting vehicle. Our service packages are tailored to meet
          essential upkeep needs while adding value and convenience.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-56">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h2 className="relative mb-3 text-lg font-semibold text-white py-2">
                  <span className="absolute inset-x-0 top-0 h-1 w-32 bg-[#FFB600] [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></span>
                  {pkg.title}
                  <span className="absolute inset-x-0 bottom-0 h-1 w-32 bg-[#FFB600] [clip-path:polygon(100%_50%,_0%_0%,_0%_100%)]"></span>
                </h2>
                <p className="text-gray-300 text-sm flex-1">
                  {pkg.description}
                </p>
                <button className="mt-6 self-start bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-lg transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
