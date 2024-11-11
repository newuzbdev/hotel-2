import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AllRoomTypes() {
  const rooms = [
    { title: "Bir kishilik standart", image: "/images/rooms/navrozstandart1.jpg" },
    { title: "Ikki kishilik standart", image: "/images/rooms/navrozstandart2.jpg" },
    { title: "Uch kishilik standart", image: "/images/rooms/navrozstandart3.jpg" },
    { title: "Deluxe", image: "/images/rooms/navrozdeluxe.jpg" },
    { title: "Vip", image: "/images/rooms/navrozviproom.jpg" },
    { title: "Vip ikki kishilik", image: "/images/rooms/navrozvip2rooms.jpg" },
  ]

  return (
    <main className="min-h-screen px-4 py-12  mx-[100]">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-[Zodiak]">Xona turlari</h1>
      </header>
      <div className="grid gap-16 md:gap-24 ">
        {rooms.map((room, index) => (
          <section
            key={room.title}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
          >
            <div className="w-full md:w-1/2 relative aspect-[3/2] mb-8 md:mb-0">
              <Image
                src={room.image}
                alt={room.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:px-8 flex flex-col items-center md:items-start justify-center text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-medium font-[Zodiak]">{room.title}</h2>
              <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">Ko&apos;proq</Button>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}