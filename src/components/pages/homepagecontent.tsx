import React from "react";
import Herosection from "./home/herosection";
import ServicePackages from "./home/servicepackages";
import Testimonials from "./home/testimonials";
import BlogSection from "./home/blogSection";
import FaqSection from "./home/faqsection";
import ContactSection from "./home/contactsection";

export default function HomePageContent() {
  return (
    <main>
      <Herosection />
      <ServicePackages />
      <Testimonials />
      <BlogSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
