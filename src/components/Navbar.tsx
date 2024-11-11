"use client";
import { Globe, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const NavLinks = () => (
    <nav className="flex md:items-center gap-6 flex-col md:flex-row">
      {[
        { href: "/", label: "Asosiy" },
        { href: "/services", label: "Xizmatlar" },
        { href: "/rooms", label: "Xonalar" },
        { href: "/contact", label: "Boglanish" },
        { href: "/about", label: "Biz haqimizda" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-[20px] text-white font-medium relative font-[Satashi] ${
            pathname === link.href ? "after:w-full" : "text-white"
          } hover:text-white after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-12`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-blur-md h-[135px]">
      <div className="px-4 py-4 flex items-center justify-between mx-[100px]">
        <div className="flex items-center gap-4 ">
          <span className="text-white bg-blue-500 p-3 rounded-full flex gap-1 text-center">
            <Phone  size={20}/>
            +998(50)005-07-68
          </span>
        </div>

        {/* Center */}
        <div className="flex items-center text-gray-300 space-x-10">
          <p className="text-xl text-white gap-4">s i n c e 2 0 2 4</p>
          <Image
            src={"/images/Mboslogo.svg"}
            alt="logo"
            width={114}
            height={47}
          />
          <div className="flex gap-2">
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <MapPin size={40} className="text-white" />
          <Globe size={40} className="text-white" />
          <Button className="text-white bg-blue-500 rounded-full font-[Satashi] text-[16px] w-full h-full">
            Band qilish
          </Button>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center justify-center border-t border-b w-full h-14">
        <NavLinks />
      </div>
    </div>
  );
}
