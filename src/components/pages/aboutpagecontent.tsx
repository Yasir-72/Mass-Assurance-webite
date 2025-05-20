import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutPageContent() {
  return (
    <main className="flex flex-col w-full space-y-16">
      {/* Hero Banner */}
      <section className="relative w-full h-80 overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Mass Assurance Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Empowering Your Future
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
            At Mass Assurance, we blend innovation and integrity to deliver
            bespoke insurance solutions that stand the test of time.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Mass Assurance?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "/icons/shield.svg",
              title: "Trusted Expertise",
              desc: "Decades of industry know-how with a commitment to excellence.Decades of industry know-how with a commitment to excellence.",
            },
            {
              icon: "/icons/handshake.svg",
              title: "Personalized Service",
              desc: "Tailored plans crafted to fit your unique needs and lifestyle.Tailored plans crafted to fit your unique needs and lifestyle.",
            },
            {
              icon: "/icons/rocket.svg",
              title: "Innovative Solutions",
              desc: "Leveraging tech-driven tools for seamless customer experiences.Leveraging tech-driven tools for seamless customer experiences.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center p-6 bg-zinc-800 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <Image src={item.icon} alt={item.title} width={64} height={64} />
              <h3 className="mt-4 text-2xl text-white font-semibold">
                {item.title}
              </h3>
              <p className="mt-8 text-gray-300 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-600 py-16 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 px-6">
          {[
            { label: "Satisfied Clients", value: "10K+" },
            { label: "Policies Issued", value: "25K+" },
            { label: "5-Star Reviews", value: "4.9/5" },
            { label: "Years in Business", value: "20+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <h4 className="text-3xl font-bold text-black">{stat.value}</h4>
              <p className="mt-1 text-md text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="relative border-l-2 border-gray-200">
          {[
            {
              year: "2005",
              text: "Founded with a vision to simplify insurance.",
            },
            {
              year: "2010",
              text: "Expanded to serve small businesses nationwide.",
            },
            {
              year: "2018",
              text: "Launched digital platform for instant quotes.",
            },
            { year: "2023", text: "Crossed 10,000 satisfied clients." },
          ].map((evt, idx) => (
            <div key={evt.year} className="mb-9 ml-8">
              <span className="absolute -left-5 flex h-8 w-8 p-5 text-sm items-center justify-center rounded-full bg-yellow-500 text-black">
                {evt.year}
              </span>
              <p className="mt-1 text-white">{evt.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Testimonials */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alice Johnson", role: "CEO", img: "/team/alice.jpg" },
              { name: "Mark Thompson", role: "CTO", img: "/team/mark.jpg" },
              { name: "Sara Lee", role: "COO", img: "/team/sara.jpg" },
              { name: "David Kim", role: "CFO", img: "/team/david.jpg" },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-zinc-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <h4 className="mt-4 text-xl font-semibold text-white">
                  {member.name}
                </h4>
                <p className="text-white font-bold">{member.role}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center my-12">
            What Our Clients Say
          </h2>
          <div className="space-y-8">
            {[
              {
                quote:
                  "Mass Assurance transformed how I think about coverage. Seamless and reliable!",
                author: "Emily R.",
              },
              {
                quote:
                  "Their personalized approach made all the difference. Highly recommend!",
                author: "James P.",
              },
            ].map((tst, i) => (
              <div
                key={i}
                className="bg-black p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <p className="italic text-white">“{tst.quote}”</p>
                <p className="mt-4 font-semibold text-white">— {tst.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Ready to get started?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full hover:opacity-90 transition"
        >
          <span>Contact Our Experts</span>
          <ChevronRight size={20} />
        </Link>
      </section>
    </main>
  );
}
