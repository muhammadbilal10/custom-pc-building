import { CarouselDemo, CustomCarousel } from "@/components/common/Carousel";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  const backgroundImages = [
    "https://www.cyberpowerpc.com/ti/mainbanner/Microsoft_Deal_2_.jpg",
    "https://www.cyberpowerpc.com/ti/mainbanner/Windows_11_2024.jpg",
    "https://www.cyberpowerpc.com/ti/mainbanner/AMD_Radeon7000_Banner.jpg",
  ];
  return (
    <main className="">
      <section>
        <Navbar />
      </section>
      <section>
        <CustomCarousel images={backgroundImages} />
      </section>
      <section className="">
        <h1 className="text-4xl font-bold">Featured Desktops</h1>
      </section>
    </main>
  );
}
