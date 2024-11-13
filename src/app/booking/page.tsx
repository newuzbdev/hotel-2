"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/location/navrozmainlocation.jpg",
  },
  {
    image: "/images/navrozslider3.jpg",
  },
  {
    image: "/images/navrozslider.jpg",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Navroz Hotel"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%] px-6 sm:px-12">
        <h2 className="font-['Zodiak'] text-4xl sm:text-6xl md:text-7xl lg:text-[110px] lg:leading-[90px] font-normal tracking-widest mb-8">
          Xona band qilish
        </h2>

        <div className="bg-white/90 p-5 rounded-lg max-w-2xl w-full space-y-8">
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col ">
                <label className="text-gray-700 text-xl font-medium">
                  Kelish
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              <div className="flex flex-col ">
                <label className="text-gray-700 text-xl font-medium">
                  Xona turi
                </label>

                <select className="w-full px-4 py-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none bg-white">
                  <option value="">Standart bir kishilik</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-gray-700 text-xl font-medium">
                  Kattalar
                </label>

                <select className="w-full px-4 py-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none bg-white">
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-gray-700 text-xl font-medium">
                  Bolalar
                </label>

                <select className="w-full px-4 py-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none bg-white">
                  {[0, 1, 2, 3].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button className="bg-white text-black transition-all duration-300 ease-out border-black hover:border-white border rounded-full font-[Satoshi] flex items-center justify-center group relative w-28  h-12 overflow-hidden px-10 hover:bg-blue-400">
                <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
                  Band qilish
                </span>
                <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 text-white" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
