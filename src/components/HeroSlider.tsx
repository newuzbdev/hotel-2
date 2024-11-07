'use client'

import { useState, useEffect } from 'react'

const slides = [
  {
    image: '/images/hotellandingpage.png',
    subtitle: 'Wellness & Spa',
    title: 'Hotel Kaskady',
    description: 'Your favourite place. Our family story.'
  },
  {
    image: '/images/mijozfikri.jpg',
    subtitle: 'Luxury Rooms',
    title: 'Perfect Comfort',
    description: 'Experience the ultimate in relaxation and style.'
  },
  {
    image: '/images/hotellandingpage.png',
    subtitle: 'Fine Dining',
    title: 'Exquisite Cuisine',
    description: 'Savor the finest flavors in an elegant atmosphere.'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden mt-[90px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <span className="text-xl md:text-2xl mb-4 font-light tracking-wider">{slide.subtitle}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">{slide.title}</h1>
            <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}     

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}