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

interface CustomCarouselProps {
  images: string[];
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
    <div className="relative">
      <div className="relative text-white lg:min-h-screen flex items-center justify-center text-center ">
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
        {/* <div className="z-10 p-5 bg-opacity-50 bg-black rounded-md shadow-md">
          <h1 className="text-4xl font-bold">Find Your Dream Home</h1>
          <p className="mt-4 max-w-lg mx-auto">
            We are recognized for exceeding client expectations and delivering
            great results through dedication, ease of process, and extraordinary
            services to our worldwide clients.
          </p>
        </div> */}
      </div>
      <div className="hidden md:block">
        <div className="ml-10 absolute top-1/2 left-0 transform -translate-y-1/2">
          <Button
            onClick={goToPrevious}
            variant="secondary"
            className="rounded-full w-12 h-12"
          >
            <ChevronLeft size={20} />
          </Button>
        </div>
        <div className="mr-10 absolute top-1/2 right-0 transform -translate-y-1/2">
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
  );
}

export function CarouselDemo({ images }: CustomCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      console.log("selected prop");
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-7xl mx-auto min-h-[682px]"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index} className="">
            <div className="">
              <Card className="">
                <CardContent className="p-0 h-[682px]">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={800}
                    className="w-full h-full "
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />

      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </Carousel>
  );
}
