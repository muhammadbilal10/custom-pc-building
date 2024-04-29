import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FeaturedCategories() {
  return (
    <div className="grid grid-cols-12 space-x-8">
      <div className="col-span-12 md:col-span-6 relative">
        <Image
          src="https://www.cyberpowerpc.com/ti/home/Homepage_Subfeature_Prebuilt.jpg"
          alt="Prebuilt Gaming PC GLX 99622"
          height={800}
          width={800}
          className="h-full w-full"
        />
        <div className="absolute -mt-20 w-full text-center">
          <Button
            asChild
            className="bg-white text-black border-none rounded-none hover:bg-black hover:text-white min-w-40"
          >
            <Link href="/system/Prebuilt-Gaming-PC-GLX-99622">Shop Now</Link>
          </Button>
        </div>
      </div>

      <div className="col-span-6 md:col-span-3">
        <Image
          src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/2_2022-03-02.jpg?v=1652057671&width=600"
          alt="Prebuilt Gaming PC GLX 99622"
          height={800}
          width={800}
          className="h-full w-full transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="col-span-6 md:col-span-3  bg-gray-100 relative">
        <Image
          src="https://www.cyberpowerpc.com/images/cs/amethyst242/cs-450-176_400.png"
          alt="Prebuilt Gaming PC GLX 99622"
          height={800}
          width={800}
          className="h-full w-full transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-[85%]  w-full text-center">
          <Button
            asChild
            className="bg-white text-black border-none rounded-none hover:bg-black hover:text-white min-w-40"
          >
            <Link href="/system/Prebuilt-Gaming-PC-GLX-99622">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
