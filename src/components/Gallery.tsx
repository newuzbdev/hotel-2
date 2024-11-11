"use client";
import { useState } from "react";

import Image from "next/image";

const slides = [
  { image: "/images/aboutimage.jpg" },
  { image: "/images/poolnavroz.jpg" },
  { image: "/images/pollslider.jpg" },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="">
      <div className="flex flex-col items-center text-center space-y-4 p-8">
        <h1 className="text-blue-500 font-[Zodiak] text-[48px]">Gallery</h1>
        <p className="text-black sm:w-[540px] lg:w-[840px] leading-6 ">
          Biz taklif qilayotgan go'zallik va qulaylikni o'rganish uchun
          galereyamizga qarang.
        </p>
        {/* <Button className="bg-white text-black hover:bg-blue-500 transition-all duration-300 ease-out border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-28 h-12 overflow-hidden px-10">
          <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
            Band qilish
          </span>
          <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0" />
        </Button> */}
      </div>

      {/* Multi-Image Slider Section */}
      <div className=" w-auto h-[690px] ">
        {/* <div className=""> */}
        <div className="grid grid-cols-3 gap-20">
          {slides.slice(currentSlide, currentSlide + 3).map((slide, index) => (
            <div
              key={index}
              className="w-[450px] h-[400px] overflow-hidden relative z-30"
            >
              <Image
                src={slide.image}
                alt="Navroz Hotel"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
          {/* <div className="top-10 overflow-hidden whitespace-nowrap absolute">
              <motion.div
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className=" font-semibold text-blue-500 text-8xl"
              >
                Unstaoblle running text with a smooth marquee effect across the
                screen!
              </motion.div>
            </div> */}
        </div>
      </div>


      {/* <div className="grid grid-cols-3 gap-4 p-4 h-[1000px] w-full">
        <div className="relative transition-all duration-300 hover:scale-105">
          <Image src={"/images/navrozsauna.jpg"} alt="Navroz Hotel" width={980} height={1000} className="object-cover" />
        </div>
        <div className="relative  transition-all duration-300 hover:scale-105">
          <Image src={"/images/navrozmassaj.jpg"} alt="Navroz Hotel" width={480} height={1000} className="object-cover" />
        </div>
        <div className="relative  transition-all duration-300 hover:scale-105">
          <Image src={"/images/navrozsauna.jpg"} alt="Navroz Hotel" width={480} height={1000} className="object-cover" />
        </div>
      </div> */}
    </div>
  );
}
