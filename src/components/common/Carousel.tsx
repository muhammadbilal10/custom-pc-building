"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CustomCarouselProps {
  images: string[];
  className?: string;
}
export function CustomCarousel({ images }: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const startSlideShow = () => {
    stopSlideShow();
    slideInterval.current = setInterval(() => {
      goToNext();
    }, 3000);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, [currentIndex]);

  return (
    <div className="">
      <div className="relative text-white lg:h-[650px] md:h-[500px] max-md:h-80 ">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              height={784}
              width={1825}
              className=" w-full h-full"
            />
          </div>
        ))}
        <div className="lg:block hidden absolute z-50 p-5  w-[520px] top-[40%] m-7">
          <h1 className="text-4xl font-bold">
            Design, Build, and Enhance Your Ideal PC
          </h1>
          <p className="mt-4 max-w-lg mx-auto">
            Dive into custom PC construction with our expert guidance on parts
            selection, price comparisons, and compatibility. Craft your perfect
            machine today.
          </p>
          <Button asChild variant="ghost" className="mt-8 bg-white text-black">
            <Link href="/list"> Start Assembling Now</Link>
          </Button>
        </div>
        <div className="">
          <div className="absolute top-[85%] lg:top-[94%] left-[30%] lg:left-[45%] transform -translate-y-1/2">
            <Button
              onClick={goToPrevious}
              variant="secondary"
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft size={20} />
            </Button>
          </div>
          <div className=" absolute top-[85%] lg:top-[94%] right-[30%] lg:right-[45%] transform -translate-y-1/2">
            <Button
              onClick={goToNext}
              variant="secondary"
              className="rounded-full w-12 h-12"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:hidden block px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">
          Design, Build, and Enhance Your Ideal PC
        </h1>
        <p className="mt-4">
          Dive into custom PC construction with our expert guidance on parts
          selection, price comparisons, and compatibility. Craft your perfect
          machine today.
        </p>
        <Button className="mt-8 ">Start Assembling Now</Button>
      </div>
    </div>
  );
}

export function ImageCarousel({ images, className }: CustomCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="">
        {images.map((img, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1 ">
              <Card className="">
                <CardContent className="p-8">
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    height={800}
                    width={800}
                    className="rounded-lg h-full w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[5%]" />
      <CarouselNext className="right-[5%]" />
    </Carousel>
  );
}
