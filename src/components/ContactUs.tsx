import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
export default function ContactUs() {
  return (
    <div className="my-10 mx-4 sm:mx-4 md:mx-4 lg:mx-24 p-4" id="contactus">
      <div className="flex gap-10 items-center my-3 justify-center ">
        <h1
          className="text-[28px] leading-[56px] font-normal font-[Zodiak] sm:2xl md:2xl lg:text-6xl"
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
      <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 py-4 px-6 sm:pt-10 md:pt-10 lg:pt-10">
        <div className="flex items-center gap-2 p-3 border rounded-md shadow-md w-full md:max-w-md md:pt-4 order-2 md:order-1">
          <input
            type="checkbox"
            className="w-6 h-6 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">Men robot emasman</span>
          <div className="ml-auto flex items-center">
            <Image
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="captcha"
              width={20}
              height={20}
              className="w-10 h-10"
            />
            <span className="ml-1 text-gray-400 text-xs">reCAPTCHA</span>
          </div>
        </div>
        <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-32 h-12 overflow-hidden px-10 order-1 md:order-2">
          <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
            Yuborish
          </span>
          <ChevronRight className="absolute transform transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 text-white" />
        </Button>
      </div>
    </div>
  );
}