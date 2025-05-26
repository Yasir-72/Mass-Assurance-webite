import React from "react";
import Herosection from "./home/herosection";
import ServicePackages from "./home/servicepackages";
import Testimonials from "./home/testimonials";
import FaqSection from "./home/faqsection";
import ContactSection from "./home/contactsection";
import ProcessSection from "./home/processsection";
import WhatsAppButton from "../layout/whatsappbutton";

export default function HomePageContent() {
  return (
    <main>
      <Herosection />
      <ServicePackages />
      <Testimonials />
      <ProcessSection/>
      <FaqSection />
      <ContactSection />
      <WhatsAppButton/>
    </main>
  );
}
