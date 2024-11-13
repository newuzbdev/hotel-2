import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 py-4 md:space-x-16">
          <div>
            <h2
              className="mb-6 text-sm font-semibold uppercase text-blue-600"
              id="#"
            >
              Asosiy
            </h2>
          </div>
          <div>
            <Link href={"/rooms"}>
              {" "}
              <h2 className="mb-6 text-sm font-semibold uppercase text-blue-600">
                Xonalar
              </h2>
            </Link>
          </div>
          <div>
            <h2
              className="mb-6 text-sm font-semibold uppercase text-blue-600"
              id="contactus"
            >
              Boglanish
            </h2>
          </div>
          <div>
            <h2
              className="mb-6 text-sm font-semibold uppercase text-blue-600"
              id="aboutus"
            >
              Biz haqimizda
            </h2>
          </div>
        </div>
        <div className="py-6">
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-10 md:space-y-0">
            <div className="text-blue-600 flex gap-2">
              <Phone className="text-blue-500" /> +998(50) 005-07-68
            </div>
            <div className="text-blue-600 flex">
              <MapPin className="text-blue-500" />
              Urganch sh. Nuri hayot 69
            </div>
            <div className="text-blue-600">Jamoladdin0831@gmail.com</div>
          </div>
          <div className="flex justify-center space-x-5 mt-4">
            <a href="#" className="text-gray-900 hover:text-gray-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.47-1.13 7.25-.14.74-.42 1-.68 1.02-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.98 1.26-5.61 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.25.35-.51.95-.78 3.73-1.62 6.22-2.69 7.47-3.21 3.56-1.47 4.3-1.73 4.78-1.73.11 0 .35.02.5.12.13.08.21.2.24.33.02.12.03.28.01.41z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="px-4 py-2 md:flex md:items-center md:justify-center">
          <div className="flex flex-col items-center md:flex-row">
            <span className="text-sm text-center mb-2 md:mb-0 md:mr-2">
              © Copyright 2024 -Mbos
            </span>
          </div>
         
        </div>
        <div className="flex items-center justify-center">
            <Image
              src="/images/Mboslogo.png"
              alt="Logo"
              className="h-12"
              width={100}
              height={100}
            />
          </div>
      </div>
    </footer>
  );
}
