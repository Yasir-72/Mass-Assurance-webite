import React from "react";
import Herosection from "./home/herosection";
import ServicePackages from "./home/servicepackages";

export default function HomePageContent() {
  return (
    <main>
      <Herosection />
      <ServicePackages />
    </main>
  );
}
