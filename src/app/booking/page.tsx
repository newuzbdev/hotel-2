"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

      {/* Fixed text and booking form in the center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%] px-6 sm:px-12">
        <h2 className="font-['Zodiak'] text-4xl sm:text-6xl md:text-7xl lg:text-[110px] lg:leading-[90px] font-normal tracking-widest mb-8">
          Xona band qilish
        </h2>
        
        <div className="bg-gray-200/80 p-6 rounded-lg max-w-md w-full">
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <input
                type="date"
                className="p-2 rounded text-black"
                placeholder="Check-in date"
              />
            
            
              <select className="p-2 rounded text-black">
                <option value="">Select Room Type</option>
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            
            <div className="flex gap-4">
              <select className="p-2 rounded text-black flex-1">
                <option value="">Adults</option>
                {[1,2,3,4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              
              <select className="p-2 rounded text-black flex-1">
                <option value="">Children</option>
                {[0,1,2,3].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
