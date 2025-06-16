import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Define each hotspot with label, x/y coordinates, info, and image

const hotspots = [
  {
    id: "Steering Mechanism",
    label: "Steering Mechanism",
    position: { x: "36%", y: "35%" },
    info: "The steering system controls the direction of the vehicle...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Engine",
    label: "Engine",
    position: { x: "25%", y: "21%" },
    info: "The engine provides power to move the vehicle forward...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Brake",
    label: "Brake",
    position: { x: "29%", y: "40%" },
    info: "The brake system slows down or stops the vehicle...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Radiator",
    label: "Radiator",
    position: { x: "23%", y: "25%" },
    info: "The radiator cools the engine by dissipating excess heat...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Turbo,EGR Sensor & control",
    label: "Turbo,EGR Sensor & control",
    position: { x: "29%", y: "30%" },
    info: "The turbo EGR sensor and control regulate exhaust flow and boost pressure for better performance and lower emissions...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Gear Shifting Mechanism",
    label: "Gear Shifting Mechanism",
    position: { x: "42%", y: "36%" },
    info: "The gear shifting mechanism allows the driver to change gears and control the vehicle’s speed and power...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Mirror Motors",
    label: "Mirror Motors",
    position: { x: "32%", y: "40%" },
    info: "The mirror motor adjusts the side mirror's angle for a clear rear view...",
    imageSrc: "/images/steering-info.png",
  },
  
  {
    id: "Evaporator",
    label: "Evaporator",
    position: { x: "33%", y: "28%" },
    info: "The evaporator cools and dehumidifies the air inside the vehicle’s cabin...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "MM",
    label: "MM",
    position: { x: "38%", y: "25%" },
    info: "The MM (Master Module) controls and manages various vehicle systems and components...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "AC System",
    label: "AC System",
    position: { x: "42%", y: "23%" },
    info: "The AC system cools and dehumidifies the air inside the vehicle’s cabin...",
    imageSrc: "/images/steering-info.png",
  },
{
    id: "Power Window",
    label: "Power Window",
    position: { x: "49%", y: "17%" },
    info: "The power window lets you raise or lower the window with the push of a button...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Seat Motors",
    label: "Seat Motors",
    position: { x: "40%", y: "55%" },
    info: "The seat motors adjust the seat's position for driver and passenger comfort...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Propeller Shaft",
    label: "Propeller Shaft",
    position: { x: "48%", y: "50%" },
    info: "The propeller shaft transmits power from the gearbox to the rear wheels...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Fuel System",
    label: "Fuel System",
    position: { x: "52%", y: "57%" },
    info: "The fuel system stores and delivers fuel to the engine for combustion...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Blinder Motors",
    label: "Blinder Motors",
    position: { x: "59%", y: "43%" },
    info: "The blinder motor operates the blinder to provide shade or reduce glare for passengers...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Suspension for Selected Models",
    label: "Suspension for Selected Models",
    position: { x: "64%", y: "55%" },
    info: "The suspension supports the vehicle's weight and absorbs shocks for a smooth ride...",
    imageSrc: "/images/steering-info.png",
  },
  {
    id: "Seat Belt SRS",
    label: "Seat Belt SRS",
    position: { x: "66%", y: "24%" },
    info: "The seat belt SRS tightens belts and deploys airbags to protect passengers during a collision...",
    imageSrc: "/images/steering-info.png",
  },
  
];

export default function CarSkeleton() {
  return (
    <section className="relative bg-black flex justify-center p-4 ">
      {/* Skeleton Car Image */}
      <Image
        width={900}
        height={900}
        src="/images/lamborgini-urus-skeleton.png"
        alt="Lamborghini Skeleton"
        className="object-contain drop-shadow-[0_0_12px_theme('colors.yellow.500')]"
        priority
      />

      {/* Hotspot Buttons */}
      {hotspots.map((spot) => (
        <Dialog key={spot.id}>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              className="absolute w-5 h-5 p-1 bg-yellow-500/90 hover:bg-yellow-600 text-black rounded-full shadow-lg ring-2 ring-transparent hover:ring-yellow-300 focus:ring-4 focus:ring-yellow-200 transition-all duration-200"
              style={{ top: spot.position.y, left: spot.position.x }}
            >
              <Plus strokeWidth={4} className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white text-black max-w-md">
            <DialogHeader>
              <DialogTitle>{spot.label}</DialogTitle>
              <DialogDescription>{spot.info}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={spot.imageSrc}
                alt={`${spot.label} illustration`}
                width={400}
                height={300}
                className="object-cover rounded"
              />
            </div>
            <DialogClose asChild>
              <Button variant="outline" className="mt-4">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}
