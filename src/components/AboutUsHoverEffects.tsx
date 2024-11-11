"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function Component() {
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

      <div className="flex items-center justify-between gap-8">
        {[
          { title: "Xonalar", image: "/images/poolnavroz.jpg" },
          { title: "Bassen", image: "/images/poolnavroz.jpg" },
          { title: "Oshxona", image: "/images/poolnavroz.jpg" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group flex-1 w-[574px] h-[477px] flex items-center justify-center transition-all ease-in-out duration-700 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-[90px] text-blue-600 font-medium transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-full font-[Zodiak]">
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
      <div className="flex justify-center mt-4">
        <Button className="bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300 ease-out border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-16 h-16 overflow-hidden">
          <span className="absolute transition-all duration-300 ease-out group-hover:-translate-y-full">
            Band qilish
          </span>
          <ChevronRight className="absolute transform transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0" />
        </Button>
      </div>
    </div>
  );
}
