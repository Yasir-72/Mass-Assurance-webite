import React from "react";
import Herosection from "./home/herosection";
import ServicePackages from "./home/servicepackages";
import Testimonials from "./home/testimonials";

export default function HomePageContent() {
  return (
    <main>
      <Herosection />
      <ServicePackages />
      <Testimonials />
    </main>
  );
}
