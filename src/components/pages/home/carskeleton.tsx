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
import { Plus } from "lucide-react";
import { X } from "lucide-react";

const hotspots = [
  {
    id: "Engine",
    label: "Engine",
    position: { x: "15%", y: "20%" },
    info: "The engine is the heart of the vehicle, converting fuel into mechanical power. It burns a precise mixture of air and gasoline (or diesel) in its cylinders to drive pistons, which in turn rotate the crankshaft and propel the car forward.",
    imageSrc: "/images/engine.webp",
  },
  {
    id: "Radiator",
    label: "Radiator",
    position: { x: "11%", y: "25%" },
    info: "The radiator is part of the cooling system that prevents the engine from overheating. Coolant circulates through the engine block, absorbs heat, then passes through the radiator’s fins where airflow dissipates the warmth before returning it to the engine.",
    imageSrc: "/images/radiator.webp",
  },
  {
    id: "Steering Mechanism",
    label: "Steering Mechanism",
    position: { x: "30%", y: "35%" },
    info: "The steering mechanism translates your input at the wheel into precise directional changes at the front wheels. Using a rack‑and‑pinion or recirculating ball system, it amplifies driver effort and ensures responsive, controlled handling at any speed.",
    imageSrc: "/images/steering.webp",
  },
  {
    id: "Brake",
    label: "Brake",
    position: { x: "15%", y: "39%" },
    info: "The brake system slows and stops the vehicle using hydraulic pressure. Pressing the brake pedal forces fluid to expand calipers around rotors (or shoes inside drums), creating friction that safely converts kinetic energy into heat.",
    imageSrc: "/images/brake.webp",
  },
  {
    id: "Turbo, EGR Sensor & Control",
    label: "Turbo, EGR Sensor & Control",
    position: { x: "18%", y: "30%" },
    info: "The turbocharger compresses intake air to boost power, while the EGR (Exhaust Gas Recirculation) sensor measures exhaust recirculation rates to reduce NOₓ emissions. Their control module finely tunes boost pressure and recirculated gas flow for optimal performance and environmental compliance.",
    imageSrc: "/images/turboegr.jpeg",
  },
  {
    id: "Gear Shifting Mechanism",
    label: "Gear Shifting Mechanism",
    position: { x: "40%", y: "36%" },
    info: "The gear shifting mechanism (manual or automatic) connects the engine to the transmission’s gears. It engages and disengages different ratios to match engine torque with driving conditions, enabling smooth acceleration, cruising, and hill climbing.",
    imageSrc: "/images/gearshifter.jpeg",
  },
  {
    id: "Mirror Motors",
    label: "Mirror Motors",
    position: { x: "22%", y: "42%" },
    info: "Mirror motors are small electric actuators inside each side mirror. They allow you to adjust mirror angle from inside the cabin—up/down and left/right—so you can eliminate blind spots and achieve the perfect rearward view.",
    imageSrc: "/images/mirrormotor.jpg",
  },
  {
    id: "Evaporator",
    label: "Evaporator",
    position: { x: "27%", y: "26%" },
    info: "The evaporator is the indoor coil of the HVAC system, where refrigerant absorbs heat from cabin air. A blower pushes warm air across the cold evaporator fins, cooling and dehumidifying the air before circulating it back into the passenger compartment.",
    imageSrc: "/images/evaporator.jpg",
  },
  {
    id: "MM",
    label: "MM",
    position: { x: "34%", y: "25%" },
    info: "The Master Module is the vehicle’s central control unit, coordinating dozens of subsystems—from lighting and doors to safety and infotainment. It processes sensor data and issues commands to ensure everything runs smoothly and communicates status to the driver.",
    imageSrc: "/images/MM.jpeg",
  },
  {
    id: "AC System",
    label: "AC System",
    position: { x: "38%", y: "18%" },
    info: "The air‑conditioning system maintains cabin comfort by cooling and dehumidifying air. A compressor pressurizes refrigerant, which then flows through condenser, expansion valve, and evaporator stages to absorb heat inside and release it outside.",
    imageSrc: "/images/AC.jpg",
  },
  {
    id: "Power Window",
    label: "Power Window",
    position: { x: "49%", y: "17%" },
    info: "The power window assembly includes the motor, regulator, and switch that raise and lower glass with a simple button press. Its electric drive allows smooth, quick operation and integrates safety features like pinch‑protection.",
    imageSrc: "/images/window.jpg",
  },
  {
    id: "Seat Motors",
    label: "Seat Motors",
    position: { x: "35%", y: "55%" },
    info: "Seat motors adjust your seat’s position—forward/back, tilt, height, and lumbar support—at the push of a button. They let drivers and passengers dial in perfect ergonomics for long‑distance comfort and safety.",
    imageSrc: "/images/seat.webp",
  },
  {
    id: "Propeller Shaft",
    label: "Propeller Shaft",
    position: { x: "42%", y: "62%" },
    info: "In rear‑wheel and four‑wheel drive cars, the propeller shaft (driveshaft) transfers torque from the transmission or transfer case to the differential at the rear axle. It must handle high rotational speeds and accommodate suspension movement.",
    imageSrc: "/images/propeller.jpg",
  },
  {
    id: "Fuel System",
    label: "Fuel System",
    position: { x: "55%", y: "56%" },
    info: "The fuel system stores gasoline (or diesel) in the tank, then pumps it under pressure through a filter and rails to the injectors. These precisely meter spray into the engine’s intake or directly into cylinders for efficient combustion.",
    imageSrc: "/images/fuelsystem.jpeg",
  },
  {
    id: "Blinder Motors",
    label: "Blinder Motors",
    position: { x: "65%", y: "45%" },
    info: "Blinder (sunshade) motors automatically raise or lower interior shades—over windows or sunroof—to block harsh sunlight. Electric actuation lets passengers instantly tune cabin brightness without manual effort.",
    imageSrc: "/images/blender.jpg",
  },
  {
    id: "Suspension for Selected Models",
    label: "Suspension for Selected Models",
    position: { x: "71%", y: "55%" },
    info: "The suspension system (springs, dampers, anti‑roll bars) supports the vehicle’s weight, absorbs bumps, and keeps tires in contact with the road. Selected performance or luxury models may include adaptive dampers or air springs for customizable ride comfort.",
    imageSrc: "/images/suspension.jpg",
  },
  {
    id: "Seat Belt SRS",
    label: "Seat Belt SRS",
    position: { x: "68%", y: "25%" },
    info: "The Seat Belt SRS (Supplemental Restraint System) includes motor‑pre‑tensioners and load limiters that tighten belts in a crash, then slightly relax to reduce chest injury. It works in concert with airbags for maximum occupant protection.",
    imageSrc: "/images/seatbelt.jpeg",
  },
  {
    id: "Power Window Switch",
    label: "Power Window Switch",
    position: { x: "60%", y: "28%" },
    info: "The power window switch is the user interface for the window motor. A momentary rocker‑style button provides precise up/down control, with detents for speed and built‑in safety logic (auto‑reverse on obstruction).",
    imageSrc: "/images/powerwindow.jpeg",
  },
];

export default function CarSkeleton() {
  return (
    <>
      <header className="bg-black text-center md:text-left px-4 py-6 md:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Not Just a Warranty
          <br className="hidden sm:block" />
          <span className=" text-yellow-500">
            — A Commitment to Every Component
          </span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-gray-200">
          At Mas Assurance, we understand that luxury vehicles are complex
          masterpieces. That’s why our{" "}
          <strong className="font-semibold text-white">
            Extended Assurance
          </strong>{" "}
          goes far beyond the engine and gearbox. From high‑performance systems
          to cutting‑edge technology, we provide intelligent, full‑spectrum
          coverage — because every inch of your vehicle deserves expert
          protection.
        </p>
      </header>
      <section className="relative bg-black flex col justify-center  ">
        <div className="relative w-[1000px] max-w-full">
          <Image
            width={900}
            height={900}
            src="/images/lamborgini-urus-skeleton.png"
            alt="Lamborghini Skeleton"
            className="object-contain w-full filter drop-shadow-xl drop-shadow-yellow-500/50"
            priority
          />

          {hotspots.map((spot) => (
            <Dialog key={spot.id}>
              <DialogTrigger asChild>
                {/* Hotspot button remains responsive */}
                <button
                  type="button"
                  className="
                  absolute
                  w-4 h-4 md:w-6 md:h-6 p-0
                  flex items-center justify-center
                  bg-yellow-500/90 hover:bg-yellow-600
                  text-black rounded-full shadow-lg
                  ring-2 ring-transparent hover:ring-yellow-300 focus:ring-4 focus:ring-yellow-200
                  transition-all duration-200 cursor-pointer
                "
                  style={{ top: spot.position.y, left: spot.position.x }}
                >
                  <Plus className="w-2 h-2 md:w-4 md:h-4" strokeWidth={6} />
                </button>
              </DialogTrigger>

              <DialogContent
                className="bg-black text-white w-full sm:max-w-md p-6  rounded-2xl border border-yellow-500 shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hidden"
                showCloseButton={false}
              >
                <DialogHeader className="border-b border-yellow-500 pb-4 mb-4">
                  <DialogTitle className="text-2xl font-bold text-yellow-500">
                    {spot.label}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-sm text-gray-200">
                    {spot.info}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 overflow-hidden rounded-lg">
                  <Image
                    src={spot.imageSrc}
                    alt={`${spot.label} illustration`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <DialogClose asChild>
                  <button
                    type="button"
                    className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition-transform active:scale-95"
                  >
                    Close
                  </button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  );
}
