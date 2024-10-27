'use client'

import Image from 'next/image'
import { Button } from "../ui/button"
import { useState, useEffect } from 'react'
import WordRotate from '../ui/word-rotate'

const images = [
  {
    src: "/car.png",
    alt: "Modern property representing blockchain-based real estate"
  },
  {
    src: "/rb.png",
    alt: "Visual representation of smart contracts in real estate"
  },
  {
    src: "/car1.png",
    alt: "Secure blockchain transactions in property deals"
  }
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-12 md:py-12 lg:py-12 xl:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6     lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-500 xl:text-5xl/none">
              Revolutionize <span className='whitespace-nowrap'>  
              <WordRotate
      className="font-bold text-blue-500 dark:text-white"
      words={["Ownership", "Transfer"]} 
    />  </span> <br/> with ProperTY
             
             
              </h1>
              <p className="max-w-[500px] mt-12  text-gray-500 md:text-xl dark:text-gray-400">
                The best blockchain-based property ownership transfer platform. Secure, transparent, and efficient.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50">
                Explore Properties
              </Button>
             
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[100%]">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="object-cover w-[100px] transition-opacity duration-500"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImage ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Switch to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
