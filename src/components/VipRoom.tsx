"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Droplets,
  Refrigerator,
  Coffee,
  Tv,
  Bath,
  Footprints,
  Scissors,
  Car,
  Wifi,
  Milk,
  ChevronRight,
  ShowerHead,
} from "lucide-react";
import Link from "next/link";

export default function VipRoom() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/images/rooms/navrozviproom.jpg",
    "/images/rooms/navrozvipall1.jpg",
    "/images/rooms/navrozvipbaths.jpg",

    "/images/rooms/navrozviproom.jpg",
    "/images/rooms/navrozvipall1.jpg",
  ];

  const amenities = {
    roomFeatures: [
      [
        { icon: <Bath size={20} />, text: "Dush" },
        {
          icon: (
            <Image
              src={"/images/fen.svg"}
              width={20}
              height={20}
              alt="joy namoz"
            />
          ),
          text: "Fen",
        },
        { icon: <Droplets size={20} />, text: "Issiq suv" },
      ],
      [
        { icon: <Refrigerator size={20} />, text: "Muzlatgich" },
        { icon: <Coffee size={20} />, text: "Nonushta" },
        {
          icon: (
            <Image
              src={"/images/joynamoz.svg"}
              width={20}
              height={20}
              alt="joy namoz"
            />
          ),
          text: "Joy namoz",
        },
      ],
      [
        { icon: <Tv size={20} />, text: "Televizor" },
        { icon: <Bath size={20} />, text: "Sochiqlar" },
        { icon: <Footprints size={20} />, text: "Shippaklar" },
      ],
      [
        { icon: <Scissors size={20} />, text: "Saqol oladigan nabor" },
        { icon: <Car size={20} />, text: "Taqsi chaqirib berish" },
        { icon: <Wifi size={20} />, text: "Wi-fi" },
      ],
      [
        { icon: <Scissors size={20} />, text: "Shkaf" },
        { icon: <Milk size={20} />, text: "Ichimlik suvi" },
        { icon: <Wifi size={20} />, text: "Xalat" },
      ],
      [
        { icon: <ShowerHead  size={20} />, text: "Tahorat olish" },
        { icon: <Coffee size={20} />, text: "Coffee tea" },
      ],
    ],
  };

  return (
    <div className="mx-[120px] pt-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-[32px]">Vip</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Room view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right: Main Image */}
          <div className="md:col-span-6 relative h-[420px] sm:h-[500px] lg:h-[600px] xl:h-[618px]">
            <Image
              src={images[0]}
              alt="Main room view"
              fill
              className="object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[0])}
            />
          </div>
        </div>

        {/* Price and Button Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <p
            className="font-medium text-sm sm:text-3xl"
            style={{ color: "rgba(19, 99, 222, 1)" }}
          >
            660 000 000 so'm{" "}
            <span className="text-black text-base font-[Satoshi]">
              bir kecha
            </span>
          </p>
          <Link href={"/booking"}>
          <Button className="bg-white text-black transition-all duration-300 ease-out border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-28  h-12 overflow-hidden px-10">
            <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
              Band qilish
            </span>
            <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0" />
          </Button>
        </Link>
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogTitle></DialogTitle>
          <DialogContent className="max-w-[69vw]">
            {selectedImage && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Selected room view"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Amenities Section */}
        <div className="space-y-3">
          <h3 className="text-3xl font-medium">
            Sizni qanda kulayliklar kutyabdi
          </h3>
          <div className="flex items-center justify-start gap-20 py-4 md:flex-row flex-col">
            {amenities.roomFeatures.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-2">
                {group.map((item, index) => (
                  <li key={index} className="flex items-center gap-1">
                    {item.icon}
                    <span className="font-[Satoshi]">{item.text}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
