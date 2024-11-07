"use client";
import Link from "next/link";
import { MapPin, PhoneCall, Search, Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <nav className="flex md:items-center gap-6 flex-col md:flex-row ">
      <Link
        href="/"
        className={`text-sm font-medium relative ${
          pathname === "/" ? "text-primary font-bold" : ""
        } hover:text-primary`}
      >
        Asosiy
        {pathname === "/" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="/services"
        className={`text-sm font-medium relative ${
          pathname === "/services"
            ? "text-primary font-bold"
            : ""
        } hover:text-primary`}
      >
        Xizmatlar
        {pathname === "/services" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="flex items-center text-sm font-medium relative hover:text-primary">
          Xonalar {isOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/roomsDetails">Standark bir kishilik</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/roomsDetails/standard">Standard Room</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/roomsDetails/deluxe">Deluxe Room</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href="/contact"
        className={`text-sm font-medium relative ${
          pathname === "/contact"
            ? "text-primary font-bold"
            : ""
        } hover:text-primary`}
      >
        Boglanish
        {pathname === "/contact" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="/about"
        className={`text-sm font-medium relative ${
          pathname === "/about"
            ? "text-primary font-bold"
            : ""
        } hover:text-primary`}
      >
        Biz haqimizda
        {pathname === "/about" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
    </nav>
  );

  return (
    <div className="flex flex-col ">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm px-28">
        <nav>
          <div className=" px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
            <div className="hidden md:flex pl-28">
              <form className="relative w-full max-w-2xl">
                <Input
                  type="search"
                  placeholder="Qidiruv..."
                  className="pl-10 pr-4 h-[42px] rounded-md bg-gray-100 w-[610px] text-lg"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </form>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin size={18} className="mx-4" />
              <PhoneCall size={18} className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Menu</SheetTitle>
                <div className="mt-8 flex flex-col gap-4">
                  <NavLinks />
                  <div className="flex items-center gap-2 mt-4">
                    <MapPin size={18} />
                    <PhoneCall size={18} />
                    <span>+1 (123) 456-7890</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>

      {/* Bottom Navigation */}
      <div className="hidden md:flex h-14 items-center justify-center border-t w-full mt-[76px]">
        <NavLinks />
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 mt-24 mb-4">
        <form className="relative w-full">
          <Input
            type="search"
            placeholder="Qidiruv..."
            className="pl-10 pr-4 py-3 rounded-md bg-gray-100 w-full text-lg"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </form>
      </div>
    </div>
  );
}
