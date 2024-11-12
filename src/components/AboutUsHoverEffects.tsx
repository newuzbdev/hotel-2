"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center mt-24">
        <Image
          src={"/images/navroz2.jpg"}
          alt="aboutus"
          width={68}
          height={85}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {[
          { title: "Xonalar", image: "/images/rooms/navrozviproom.jpg" },
          { title: "Bassen", image: "/images/poolnavroz.jpg" },
          { title: "Oshxona", image: "/images/kitchennavruz.jpg" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group w-full h-[300px] md:h-[400px] lg:h-[477px] flex items-center justify-center transition-all ease-in-out duration-700 overflow-hidden mb-4 md:mb-0"
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-4xl md:text-6xl lg:text-[90px] text-blue-600 font-medium transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-full font-[Zodiak]">
                {item.title}
              </span>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-4">
        <Link href={"/booking"}>
          <Button className="bg-white text-black transition-all duration-300 ease-out border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-28  h-12 overflow-hidden px-10">
            <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
              Band qilish
            </span>
            <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
