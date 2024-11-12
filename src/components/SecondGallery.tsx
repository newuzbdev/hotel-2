import Image from "next/image";

export default function SecondGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {[
        {
          src: "/images/navrozaviakassa.jpg",
          alt: "Aviakassa",
          text: "Aviakassa",
        },
        {
          src: "/images/navrozmassaj.jpg",
          alt: "Sauna",
          text: "Sauna",
          button: "Band qilish",
        },
        { src: "/images/navrozsauna.jpg", alt: "Massaj", text: "Massaj" },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative h-[300px] sm:h-[500px] lg:h-[1000px] overflow-hidden hover:z-10 hover:shadow-xl"
        >
          <Image
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-[Zodiac] text-[24px] sm:text-[48px] font-normal leading-[56px] text-white mb-4">
              {item.text}
            </h1>
          </div>
          {/* Button for the second item */}
          {item.button && (
            <div className="absolute bottom-4 sm:bottom-8 flex items-center justify-center w-full">
              <button className="bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300 ease-out border-black border rounded-full font-[Satoshi] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg">
                {item.button}
              </button>
            </div>
          )}
          {/* Decoration for the second image */}
          {index === 1 && (
            <Image
              src="/images/part3.svg"
              alt="Decoration"
              width={68}
              height={85}
              className="absolute top-4 right-[280px] z-10"
            />
          )}
        </div>
      ))}
    </div>
  );
}
