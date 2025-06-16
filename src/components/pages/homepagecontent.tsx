import React from "react";
import Herosection from "./home/herosection";
import ServicePackages from "./home/servicepackages";
import Testimonials from "./home/testimonials";
import FaqSection from "./home/faqsection";
import ContactSection from "./home/contactsection";
import ProcessSection from "./home/processsection";
import WhatsAppButton from "../layout/whatsappbutton";
import CarSkeleton from "./home/carskeleton";

export default function HomePageContent() {
  return (
    <main>
      <Herosection />
      <CarSkeleton />
      <ServicePackages />
      <Testimonials />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
