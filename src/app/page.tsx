import PcCard from "@/components/PC/PcCard";
import { CarouselDemo, CustomCarousel } from "@/components/common/Carousel";
import BuildGuides from "@/components/layout/BuildGuides";
import FeaturedCategories from "@/components/layout/FeaturedCategories";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  const backgroundImages = [
    "https://www.cyberpowerpc.com/ti/mainbanner/Microsoft_Deal_2_.jpg",
    "https://www.cyberpowerpc.com/ti/mainbanner/Windows_11_2024.jpg",
    "https://www.cyberpowerpc.com/ti/mainbanner/AMD_Radeon7000_Banner.jpg",
  ];

  const pcProducts = [
    {
      id: "PBET99611",
      name: "Prebuilt Gaming PC GLX 99611",
      image: "/images/cs/PBET2018/ET99611/main_400.png",
      specs: [
        "Windows 11 Home",
        "Intel® Core™ Processor i7-14700KF",
        "GeForce RTX™ 4060 Ti 16GB GDDR6 Video Card (DLSS 3.0) [AI-Powered Graphics]",
        "32GB DDR5-6000MHz RAM",
        "Z790 DDR5 Motherboard",
        "2TB PCIe NVMe M.2 SSD",
      ],
      price: "$1529",
      previous_price: "$1579",
      reviews: 16,
      fps: 145,
      link: "/system/Prebuilt-Gaming-PC-GLX-99611",
    },
    {
      id: "PBET99620",
      name: "Prebuilt Gaming PC GLX 99620",
      image: "/images/cs/PBET2018/ET99620/wht_400.png?v2",
      specs: [
        "Windows 11 Home",
        "Intel® Core™ Processor i9-14900KF",
        "GeForce RTX™ 4070 Ti SUPER 16GB GDDR6X Video Card",
        "32GB DDR5-6000MHz RAM",
        "Z790 DDR5 Motherboard",
        "2TB PCIe NVMe GEN4 M.2 SSD",
      ],
      price: "$2149",
      previous_price: "$2199",
      reviews: 0,
      fps: 215,
      link: "/system/Prebuilt-Gaming-PC-GLX-99620",
    },
    {
      id: "PBET9799",
      name: "Prebuilt Gaming PC GM 9799",
      image: "/images/cs/PBET2018/et9799_auron242v/blk_400.png",
      specs: [
        "Windows 11 Home",
        "AMD Ryzen™ 5 7600 Processor",
        "GeForce RTX™ 4060 8GB GDDR6 Video Card",
        "16GB (16GBx1) DDR5/5600MHz Memory",
        "B650 AM5 with WIFI Motherboard",
        "1TB PCIe NVMe M.2 SSD",
      ],
      price: "$979",
      previous_price: "$1029",
      reviews: 8,
      fps: 125,
      link: "/system/Prebuilt-Gaming-PC-GM-9799",
    },
    {
      id: "PBET99612",
      name: "Prebuilt Gaming PC GLX 99612",
      image: "/images/cs/PBET2018/ET99612/main_400.png",
      specs: [
        "Windows 11 Home",
        "Intel® Core™ Processor i7-14700KF",
        "GeForce RTX™ 4070 Ti 12GB GDDR6X Video Card",
        "32GB DDR5-6000MHz RAM",
        "Z790 DDR5 Motherboard",
        "2TB PCIe NVMe M.2 SSD",
      ],
      price: "$1949",
      previous_price: "$1999",
      reviews: 6,
      fps: 215,
      link: "/system/Prebuilt-Gaming-PC-GLX-99612",
    },
    {
      id: "PBET2795",
      name: "Prebuilt Gaming PC GLX 2795",
      image: "/images/cs/pbet2018/ET2795_H510/wht_400.png?v1",
      specs: [
        "Windows 11 Home",
        "Intel® Core™ Processor i7-12700KF",
        "GeForce RTX™ 3070 8GB GDDR6X",
        "32GB (8Gx4) DDR4/3200MHz RAM",
        "Z690 DDR4 Motherboard",
        "500GB PCIe NVMe M.2 SSD",
      ],
      price: "$1249",
      previous_price: "$1299",
      reviews: 9,
      fps: 150,
      link: "/system/Prebuilt-Gaming-PC-GLX-2795",
    },
    {
      id: "PBET99613",
      name: "Prebuilt Gaming PC GLX 99613",
      image: "/images/cs/PBET2018/ET99613/main_400.png?v1",
      specs: [
        "Windows 11 Home",
        "Intel® Core™ Processor i9-14900KF",
        "GeForce RTX 4090 24GB GDDR6X Video Card",
        "64GB DDR5-6000MHz RAM",
        "Z790 DDR5 Motherboard",
        "2TB PCIe NVMe M.2 SSD",
      ],
      price: "$3379",
      previous_price: "$3429",
      reviews: 0,
      fps: 315,
      link: "/system/Prebuilt-Gaming-PC-GLX-99613",
    },
    {
      id: "PBET99622",
      name: "Prebuilt Gaming PC GLX 99622",
      image: "/images/cs/PBET2018/ET99622/blk_400.png",
      specs: [
        "Windows 11 Home",
        "AMD Ryzen™ 9 7900X Processor",
        "GeForce RTX™ 4070 Ti SUPER 16GB GDDR6X Video Card",
        "64GB DDR5-6000MHz RAM",
        "X670-P Motherboard",
        "2TB PCIe NVMe GEN4 M.2 SSD",
      ],
      price: "$2119",
      previous_price: "$2169",
      reviews: 0,
      fps: 215,
      link: "/system/Prebuilt-Gaming-PC-GLX-99622",
    },
  ];
  return (
    <main className="">
      <section>
        <Navbar />
      </section>
      <section className="mt-16">
        <CustomCarousel images={backgroundImages} />
      </section>

      <section className="mt-24 px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <FeaturedCategories />
      </section>

      <section className="px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <BuildGuides />
      </section>

      <section className="px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">Featured Desktops</h1>
        <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <PcCard />
          <PcCard />
          <PcCard />
          <PcCard />
          <PcCard />
          <PcCard />
        </div>
      </section>
      <section className="px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">Popular Prebuilt Systems</h1>
        <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <PcCard />
          <PcCard />
          <PcCard />
          <PcCard />
          <PcCard />
          <PcCard />
        </div>
      </section>
      <section className="mt-12">
        <Footer />
      </section>
    </main>
  );
}
