"use client";
import { useEffect, useState } from "react";
import { Globe, MapPin, Phone, Star, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    aboutUsSection?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContactUs = () => {
    const aboutUsSection = document.getElementById("contactus");
    aboutUsSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const NavLinks = () => (
    <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      {[
        { href: "/", label: "Asosiy" },
        { href: "/rooms", label: "Xonalar" },
        {
          href: "#contactus",
          label: "Bog'lanish",
          onclick: handleScrollToContactUs,
        },
        {
          href: "#aboutus",
          label: "Biz haqimizda",
          onClick: handleScrollToAboutUs,
        },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={link.onClick}
          className={`text-[16px] md:text-[20px] text-white font-medium relative ${
            pathname === link.href ? "after:w-full" : ""
          } hover:text-white after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-12`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div
      className={`${
        isNavbarVisible ? "top-0" : "-top-[175px]"
      } fixed left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-blur-md transition-transform duration-300`}
    >
      <div className="flex flex-wrap items-center justify-between px-4 py-3 md:py-2 mx-[100]">
        {/* Left Side */}
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-white bg-blue-500 p-2 md:p-3 rounded-full flex items-center gap-1">
            <Phone size={20} />
            <span className="hidden md:block">+998(50)005-07-68</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-4 md:space-x-10 text-gray-300">
          <p className="text-lg md:text-xl text-white">s i n c e 2 0 2 4</p>
          <Image
            src={"/images/navrozlogo.svg"}
            alt="logo"
            width={70}
            height={40}
          />
          <div className="flex gap-1">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <MapPin size={20} className="text-white hidden md:block" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Globe size={20} className="text-white hidden md:block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Tilni ozgartirish</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Russian</DropdownMenuItem>
              <DropdownMenuItem>Uzbek</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/booking"}>
            <Button className="text-white bg-blue-500 px-3 py-1 md:px-5 md:py-5 rounded-full text-[14px] md:text-[16px]">
              Band qilish
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Menu size={30} className="text-white md:hidden cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="bg-white bg-opacity-90 text-gray-900 p-4">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">
                  Navigatsiya
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <nav className="flex flex-col items-start gap-4">
                  {[
                    { href: "/", label: "Asosiy" },
                    { href: "/services", label: "Xizmatlar" },
                    { href: "/rooms", label: "Xonalar" },
                    { href: "/contact", label: "Bog'lanish" },
                    {
                      href: "#aboutus",
                      label: "Biz haqimizda",
                      onClick: handleScrollToAboutUs,
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={link.onClick}
                      className={`text-[16px] text-black font-medium relative ${
                        pathname === link.href ? "after:w-full" : ""
                      } hover:text-black after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-12`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col items-start gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="text-blue-500" size={20} />
                    <span className="text-gray-900">+998(50)005-07-68</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-blue-500" size={20} />
                    <span className="text-gray-900">Bizning manzil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Globe className="text-blue-500" size={20} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Tilni ozgartirish</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>Russian</DropdownMenuItem>
                        <DropdownMenuItem>Uzbek</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-gray-900">Dunyo bo'ylab xizmat</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center border-t border-b w-full h-12">
        <NavLinks />
      </div>
    </div>
  );
}
