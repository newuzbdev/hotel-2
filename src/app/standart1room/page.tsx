"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
const StandardRoom1 = dynamic(() => import("@/components/StandartRoom1"));

const slides = [
  {
    image: "/images/rooms/navrozstandart1.jpg",
  },
  {
    image: "/images/rooms/navrozstandart1bath.jpg",
  },
  {
    image: "/images/rooms/navorzstandart1roommirror.jpg",
  },
];

export default function StandartRoom() {
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

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction) => ({
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
    exit: (direction) => ({
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
    <>
      <div className="relative w-full h-screen overflow-hidden">
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
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Fixed text in the center of the screen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%]">
          <h2 className="font-['Zodiak'] lg:text-[80px] lg:leading-[90px]  lg:font-normal tracking-widest  sm:text-7xl md:text-7xl">
            Standart 1 kishilik
            <p className="pt-3">Xona</p>
          </h2>
          <p className="font-['Zodiak'] lg:text-[20px] leading-[88px] font-medium sm:text-lg py-5">
            Sizning sevimli joyingiz. Bizning oilaviy hikoyamiz.
          </p>
        </div>
      </div>
      <div>
        <StandardRoom1 />
      </div>
    </>
  );
}
