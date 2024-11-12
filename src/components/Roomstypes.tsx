import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Room {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  featured?: boolean;
}

export default function Roomstypes() {
  const rooms: Room[] = [
    {
      id: 1,
      title: "VIP",
      imageUrl: "/images/rooms/navrozviproom.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "VIP ikki kishilik",
      imageUrl: "/images/rooms/navrozvip2rooms.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Deluxe",
      imageUrl: "/images/rooms/navrozdeluxe.jpg",
    },
    {
      id: 4,
      title: "Standart bir kishilik",
      imageUrl: "/images/rooms/navrozstandart1.jpg",
    },
    {
      id: 5,
      title: "Standart ikki kishilik",
      imageUrl: "/images/rooms/navrozstandart2.jpg",
    },
  ];

  return (
    <div className=" mx-auto py-8">
      <h1
        className="text-[48px] font-normal text-center mb-8 font-[Zodiak] mt-10"
        style={{ color: "rgba(19, 99, 222, 1)" }}
      >
        Xona tariflari
      </h1>
      <div className="grid gap-6">
        {/* Featured rooms */}
        <div className="grid md:grid-cols-2 gap-6">
          {rooms
            .filter((room) => room.featured)
            .map((room) => (
              <Card key={room.id} className="group overflow-hidden">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <Image
                    src={room.imageUrl}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0">
                    <div className="absolute bottom-4 left-4">
                      <h3
                        className="text-xl  text-white px-2 py-1 font-[Satoshi]"
                        style={{ background: "rgba(11, 11, 11, 0.5)" }}
                      >
                        {room.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Standard rooms */}
        <div className="grid md:grid-cols-3 gap-6">
          {rooms
            .filter((room) => !room.featured)
            .map((room) => (
              <Card key={room.id} className="group overflow-hidden">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <Image
                    src={room.imageUrl}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-125 duration-700"
                  />
                  <div className="absolute inset-0">
                    <div className="absolute bottom-4 left-4">
                      <h3
                        className="text-xl py-1 px-2 text-white font-[Satoshi]"
                        style={{ background: "rgba(11, 11, 11, 0.5)" }}
                      >
                        {room.title}
                      </h3>
                      {room.size && (
                        <p className="text-sm text-white/80">{room.size}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
