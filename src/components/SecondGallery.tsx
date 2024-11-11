import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SecondGallery() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {[
        { src: "/images/navrozaviakassa.jpg", alt: "Aviakassa", text: "Aviakassa" },
        { src: "/images/navrozmassaj.jpg", alt: "Sauna", text: "Sauna", button: "Band qilish" },
        { src: "/images/navrozsauna.jpg", alt: "Massaj", text: "Massaj" },
      ].map((item, index) => (

        <div key={index} className="group relative h-[600px] overflow-hidden rounded-lg transition-all duration-700 ease-in-out hover:scale-110 hover:z-10 hover:shadow-xl">
          <Image
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"

            className="transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-[Zodiac] text-[48px] font-normal leading-[56px] text-white mb-4">{item.text}</h1>
          </div>
          {index === 1 && (
            <Image
              src="/images/part3.svg"
              alt="Decoration"
              width={68}
              height={85}
              className="absolute top-4 right-72 z-10"
            />
          )}
        </div>
      ))}
    </div>
  );
}