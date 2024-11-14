"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

const slides = [
  { image: "/images/aboutimage.jpg" },
  { image: "/images/poolnavroz.jpg" },
  { image: "/images/kitchennavruz.jpg" },
  { image: "/images/location/navrozlocation.jpg" },
  { image: "/images/pollslider.jpg" },
];

export default function Gallery() {
  return (
    <div className="relative h-full flex flex-col items-center text-center space-y-4 p-8 my-10">
      <h1 className="text-blue-500 font-[Zodiak] text-[54px] font-normal">
        Galeriya
      </h1>
      <p className="text-black sm:w-[540px] lg:w-[840px] leading-6">
        Biz taklif qilayotgan go&apos;zallik va qulaylikni o&apos;rganish uchun
        galereyamizga qarang.
      </p>

      <Swiper
        className="w-full h-[320px] mySwiper"
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide flex items-center justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="cursor-grab"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional Marquee Text - Hidden on small screens */}
      <div className="absolute lg:top-56 bottom-4 lg:w-full overflow-hidden hidden sm:block md:block">
        <div className="animate-marquee whitespace-nowrap text-8xl font-[Satoshi]">
          Bizning Mehmonxona galereyamiz va bizning xizmatlarimiz haqida batafsil ma&apos;lumot.
        </div>
      </div>
    </div>
  );
}
