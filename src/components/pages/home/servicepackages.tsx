"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
];

export default function ServicePackages() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-6 ">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Service <span className="text-yellow-500">Packages</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Choose from our tailored service and warranty packages designed to
          keep your vehicle running at its peak performance and protect you on
          the road.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-600/50 transition-shadow duration-500 flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl text-white font-bold mb-4">
                  {pkg.title}
                </h2>
                <p className="text-gray-400 flex-1 mb-6">{pkg.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link
            href="/quote"
            className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition "
          >
            Explore the full package
          </Link>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const packages = [
//   { id: 1, title: "Compact Package",     image: "/images/service1.jpeg",  description: "An essential maintenance plan covering all your core servicing needs including engine oil changes, AC filter checks, and fuel filter service." },
//   { id: 2, title: "Compact Plus Package", image: "/images/service2.jpeg",  description: "Everything in the Compact Package, plus coverage for brakes, wheel alignment & balancing, and wiper blades." },
//   { id: 3, title: "Comprehensive Warranty", image: "/images/service3.jpeg",description: "All-inclusive coverage for mechanical and electrical systems: engine, transmission, suspension, braking, steering, and more." },
//   { id: 4, title: "Essential Warranty",   image: "/images/smartphone.png", description: "A more economical solution that still provides robust protection for critical systems like brakes, electrics, AC, fuel systems, and steering components." },
// ];

// export default function ServicePackages() {
//   const [page, setPage] = useState(0);
//   const perPage = 2;
//   const totalPages = Math.ceil(packages.length / perPage);
//   const start = page * perPage;
//   const visible = packages.slice(start, start + perPage);

//   const fadeVariants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit:    { opacity: 0 },
//   };

//   return (
//     <section className="bg-black w-full py-12">
//       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
//         <motion.h1
//           className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Service Packages
//         </motion.h1>

//         <motion.p
//           className="text-lg text-gray-300 mt-4 max-w-3xl italic"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Pick from our tailored maintenance & warranty plans—just two at a time.
//         </motion.p>

//         <div className="mt-10 flex justify-center space-x-4">
//           <button
//             onClick={() => setPage(p => (p - 1 + totalPages) % totalPages)}
//             className="px-5 py-2 bg-zinc-700 hover:bg-zinc-600 text-gray-200 rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-500"
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => setPage(p => (p + 1) % totalPages)}
//             className="px-5 py-2 bg-zinc-700 hover:bg-zinc-600 text-gray-200 rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-500"
//           >
//             Next
//           </button>
//         </div>

//         <div className="mt-6 relative min-h-[480px]">
//           <AnimatePresence initial={false} mode="sync">
//             <motion.div
//               key={page}
//               variants={fadeVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8"
//             >
//               {visible.map(pkg => (
//                 <motion.div
//                   key={pkg.id}
//                   className="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full"
//                   whileHover={{ y: -8, scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                 >
//                   <div className="relative w-full h-56 sm:h-64">
//                     <Image
//                       src={pkg.image}
//                       alt={pkg.title}
//                       fill
//                       className="object-cover object-center"
//                     />
//                   </div>
//                   <div className="p-6 flex-1 flex flex-col">
//                     <h2 className="relative mb-3 text-lg font-semibold text-white py-2">
//                       <span className="absolute inset-x-0 top-0 h-1 w-32 bg-[#FFB600] [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]" />
//                       {pkg.title}
//                       <span className="absolute inset-x-0 bottom-0 h-1 w-32 bg-[#FFB600] [clip-path:polygon(100%_50%,_0%_0%,_0%_100%)]" />
//                     </h2>
//                     <p className="text-gray-300 text-sm flex-1">
//                       {pkg.description}
//                     </p>
//                     <button className="mt-6 self-start bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-lg transition">
//                       Learn More
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }
