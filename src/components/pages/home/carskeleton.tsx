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
    id: "steering",
    label: "Steering",
    position: { x: "30%", y: "40%" },
    info: "The steering system controls the direction of the vehicle...",
    imageSrc: "/images/steering-info.png",
  },
  
];

export default function CarSkeleton() {
  return (
    <section className="bg-black flex justify-center p-4">
      <div className="relative w-[1000px] h-[1000px]">
        {/* Skeleton Car Image */}
        <Image
          src="/images/lamborgini-urus-skeleton.png"
          alt="Lamborghini Skeleton"
          fill
          className="object-contain drop-shadow-[0_0_12px_theme('colors.yellow.500')]"
          priority
        />

        {/* Hotspot Buttons */}
        {hotspots.map((spot) => (
          <Dialog key={spot.id}>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="absolute w-7 h-7 p-1 bg-yellow-500/90 hover:bg-yellow-600 text-black rounded-full shadow-lg ring-2 ring-transparent hover:ring-yellow-300 focus:ring-4 focus:ring-yellow-200 transition-all duration-200"
                style={{ top: spot.position.y, left: spot.position.x }}
              >
                <Plus strokeWidth={5} className="w-3 h-3" />
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
      </div>
    </section>
  );
}
