"use client";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// const center = {
//   lat: 41.311081,
//   lng: 69.240562,
// };

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

export default function ContactUs() {
  return (
    <div className="my-10 p-4" id="contactus">
      <div className="flex gap-10 items-center my-3 justify-center ">
        <h1
          className="text-[48px] leading-[56px] font-normal font-[Zodiak]"
          style={{ color: "rgba(19, 99, 222, 1)" }}
        >
          Biz Bilan Bog'lanish
        </h1>
      </div>

      <p className="text-center mb-8 text-gray-700 text-base ">
        Savollaringiz bormi yoki yordam kerakmi? Biz bilan bog'laning - biz
        yordam berishga tayyormiz!
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardContent className="w-full h-[423px]">
            {/* <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript> */}
          </CardContent>
        </Card>

        <>
          <CardContent className="h-[423px]">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    className="h-[70px] placeholder:text-gray-400 placeholder:text-xl"
                    id="firstName"
                    name="firstName"
                    placeholder="Isim"
                    required
                  />
                </div>
                <div>
                  <Input
                    className="h-[76px] placeholder:text-gray-400 placeholder:text-xl"
                    id="lastName"
                    name="lastName"
                    placeholder="Familya"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="rounded h-24 placeholder:text-gray-400 placeholder:text-xl"
                    placeholder="+998"
                    required
                  />
                </div>
              </div>

              <div>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Xabar"
                  className="h-[205px] placeholder:text-gray-400 placeholder:text-xl"
                />
              </div>
            </form>
          </CardContent>
        </>
      </div>
      <div className="flex items-end justify-end py-4">
        <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-28  h-12 overflow-hidden px-10">
          <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
            Yuborish
          </span>
          <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 text-white" />
        </Button>
      </div>
    </div>
  );
}
