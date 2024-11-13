"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/images/aboutimage.jpg",
  },
  {
    image: "/images/poolnavroz.jpg",
  },
  {
    image: "/images/pollslider.jpg",
  },
];

export default function AboutUs() {
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
    <div className="relative w-full  overflow-hidden" id="aboutus">
      <div className="flex flex-col items-center text-center space-y-4 p-8">
        <Image
          src={"/images/aboutus1.svg"}
          alt="aboutus"
          width={68}
          height={85}
          className="mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-blue-500 font-[Zodiak] text-[48px]">
          Biz haqimizda
        </h1>
        <p className="text-black sm:w-[540px] lg:w-[840px] leading-6 ">
          Bizning mehmonxonamiz — shinamlik va qulaylik uyg'unlashgan maskan.
          Mehmonlarimizga yuksak darajadagi xizmat ko'rsatish va unutilmas
          tajriba ulashish bizning bosh maqsadimizdir. Zamonaviy dizayndagi
          xonalarimiz, do'stona muhit va ehtiyotkor xizmatimiz bilan sizga huzur
          bag'ishlaymiz. Har bir mehmon biz uchun alohida ahamiyatga ega.
          Sizning istak va ehtiyojlaringizni inobatga olib, har bir tafsilotni
          mukammal qilishga intilamiz. Ish safaringiz bo'ladimi yoki dam olish
          uchun kelgan bo'lasizmi, bizning mehmonxonamizda siz o'zingizni uyda
          his qilasiz. Kelgusidagi tashriflaringizni quvonch bilan kutib qolamiz
          va sizga eng yaxshi dam olish imkoniyatini taqdim etishga tayyormiz!
        </p>
        <Link href={"/booking"}>
          <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-28  h-12 overflow-hidden px-10">
            <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
              Band qilish
            </span>
            <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 text-white" />
          </Button>
        </Link>
      </div>

      {/* Slideshow Section */}
      <div className="relative w-full h-[690px]">
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
      </div>
    </div>
  );
}
