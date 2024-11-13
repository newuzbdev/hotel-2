import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AllRoomTypes() {
  const rooms = [
    {
      title: "Bir kishilik standart",
      image: "/images/rooms/navrozstandart1.jpg",
      slug: "standartone",
    },
    {
      title: "Ikki kishilik standart",
      image: "/images/rooms/navrozstandart2.jpg",
      slug: "standartwo",
    },
    {
      title: "Uch kishilik standart",
      image: "/images/rooms/navrozstandart3.jpg",
      slug: "standartthree",
    },
    {
      title: "Deluxe",
      image: "/images/rooms/navrozdeluxe.jpg",
      slug: "deluxe",
    },
    { title: "Vip", image: "/images/rooms/navrozviproom.jpg", slug: "vip" },
    {
      title: "Vip bir kishilik",
      image: "/images/rooms/navrozvip1.jpg",
      slug: "vipone",
    },

    {
      title: "Vip ikki kishilik",
      image: "/images/rooms/navrozvip2rooms.jpg",
      slug: "viptwo",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-12 mx-[100]">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-[Zodiak]">
          Xona turlari
        </h1>
      </header>
      <div className="grid gap-16 md:gap-24 ">
        {rooms.map((room, index) => (
          <section
            key={room.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            <div className="w-full md:w-1/2 relative aspect-[3/2] mb-8 md:mb-0">
              <div className="absolute inset-0"></div>
              <Image
                src={room.image}
                alt={room.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 md:px-8 flex flex-col items-center justify-center text-center">
              <Link href={`/room/${room.slug}`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-medium font-[Zodiak] cursor-pointer">
                  {room.title}
                </h2>
              </Link>
              <Link href={`/${room.slug}`}>
                <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-28  h-12 overflow-hidden px-10">
                  <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
                    Band qilish
                  </span>
                  <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 text-white" />
                </Button>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
