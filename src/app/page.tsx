import PcCard from "@/components/PC/PcCard";
import { CustomCarousel } from "@/components/common/Carousel";
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

  const preBuiltPcList = [
    {
      model: "Prebuilt Gaming PC GLX 99613",
      specs: {
        os: "Windows 11 Home",
        cpu: {
          name: "Intel® Core™ Processor i9-14900KF",
          price: "$1000",
          specs: ["3.20 GHz", "16 Cores", "32 Threads", "30MB Cache"],
        },
        videoCard: {
          name: "GeForce RTX™ 4070 Ti SUPER  16GB GDDR6X Video Card",
          price: "$2000",
        },
        ram: {
          name: "32GB DDR5-6000MHz RAM",
          price: "$500",
        },
        motherboard: {
          name: "Z790 DDR5 Motherboard",
          price: "$300",
        },
        ssd: {
          name: "2TB PCIe NVMe GEN4 M.2 SSD",
          price: "$200",
        },
      },
      price: "$3379",
      discounted_price: "$3429",
      shipping_date: "4/30/2024",
      reviews: 60,
      fps: "315",
      link: "/system/Prebuilt-Gaming-PC-GLX-99613",
      imageUrl:
        "https://www.cyberpowerpc.com/images/cs/PBET2018/ET4416_matrexx55/blk_400.png?v1",
    },
    {
      model: "Prebuilt Gaming PC GLX 99613",
      specs: {
        os: "Windows 11 Home",
        cpu: {
          name: "Intel® Core™ Processor i9-14900KF",
          price: "$1000",
          specs: ["3.20 GHz", "16 Cores", "32 Threads", "30MB Cache"],
        },
        videoCard: {
          name: "GeForce RTX™ 4070 Ti SUPER  16GB GDDR6X Video Card",
          price: "$2000",
        },
        ram: {
          name: "32GB DDR5-6000MHz RAM",
          price: "$500",
        },
        motherboard: {
          name: "Z790 DDR5 Motherboard",
          price: "$300",
        },
        ssd: {
          name: "2TB PCIe NVMe GEN4 M.2 SSD",
          price: "$200",
        },
      },
      price: "$3379",
      discounted_price: "$3429",
      shipping_date: "4/30/2024",
      reviews: 80,
      fps: "315",
      link: "/system/Prebuilt-Gaming-PC-GLX-99613",
      imageUrl:
        "https://www.cyberpowerpc.com/images/cs/PBET2018/ET99611/main_400.png",
    },
    {
      model: "Prebuilt Gaming PC GLX 99613",
      specs: {
        os: "Windows 11 Home",
        cpu: {
          name: "Intel® Core™ Processor i9-14900KF",
          price: "$1000",
          specs: ["3.20 GHz", "16 Cores", "32 Threads", "30MB Cache"],
        },
        videoCard: {
          name: "GeForce RTX™ 4070 Ti SUPER  16GB GDDR6X Video Card",
          price: "$2000",
        },
        ram: {
          name: "32GB DDR5-6000MHz RAM",
          price: "$500",
        },
        motherboard: {
          name: "Z790 DDR5 Motherboard",
          price: "$300",
        },
        ssd: {
          name: "2TB PCIe NVMe GEN4 M.2 SSD",
          price: "$200",
        },
      },
      price: "$3379",
      discounted_price: "$3429",
      shipping_date: "4/30/2024",
      reviews: 30,
      fps: "315",
      link: "/system/Prebuilt-Gaming-PC-GLX-99613",
      imageUrl:
        "https://www.cyberpowerpc.com/images/cs/KING95/CS-448-300_400.png",
    },
  ];

  const featurePcsList = [
    {
      model: "Prebuilt Gaming PC GLX 99613",
      specs: {
        os: "Windows 11 Home",
        cpu: {
          name: "Intel® Core™ Processor i9-14900KF",
          price: "$1000",
          specs: ["3.20 GHz", "16 Cores", "32 Threads", "30MB Cache"],
        },
        videoCard: {
          name: "GeForce RTX™ 4070 Ti SUPER  16GB GDDR6X Video Card",
          price: "$2000",
        },
        ram: {
          name: "32GB DDR5-6000MHz RAM",
          price: "$500",
        },
        motherboard: {
          name: "Z790 DDR5 Motherboard",
          price: "$300",
        },
        ssd: {
          name: "2TB PCIe NVMe GEN4 M.2 SSD",
          price: "$200",
        },
      },
      price: "$3379",
      discounted_price: "$3429",
      shipping_date: "4/30/2024",
      reviews: 100,
      fps: "315",
      link: "/system/Prebuilt-Gaming-PC-GLX-99613",
      imageUrl:
        "https://www.cyberpowerpc.com/images/cs/HYTEY60/CS-450-172_400.png?v22",
    },
    {
      model: "Prebuilt Gaming PC GLX 99613",
      specs: {
        os: "Windows 11 Home",
        cpu: {
          name: "Intel® Core™ Processor i9-14900KF",
          price: "$1000",
          specs: ["3.20 GHz", "16 Cores", "32 Threads", "30MB Cache"],
        },
        videoCard: {
          name: "GeForce RTX™ 4070 Ti SUPER  16GB GDDR6X Video Card",
          price: "$2000",
        },
        ram: {
          name: "32GB DDR5-6000MHz RAM",
          price: "$500",
        },
        motherboard: {
          name: "Z790 DDR5 Motherboard",
          price: "$300",
        },
        ssd: {
          name: "2TB PCIe NVMe GEN4 M.2 SSD",
          price: "$200",
        },
      },
      price: "$3379",
      discounted_price: "$3429",
      shipping_date: "4/30/2024",
      reviews: 10,
      fps: "315",
      link: "/system/Prebuilt-Gaming-PC-GLX-99613",
      imageUrl:
        "https://www.cyberpowerpc.com/images/cs/Lumina/cs-450-194_400.png",
    },
    {
      model: "Prebuilt Gaming PC GLX 99613",
      specs: {
        os: "Windows 11 Home",
        cpu: {
          name: "Intel® Core™ Processor i9-14900KF",
          price: "$1000",
          specs: ["3.20 GHz", "16 Cores", "32 Threads", "30MB Cache"],
        },
        videoCard: {
          name: "GeForce RTX™ 4070 Ti SUPER  16GB GDDR6X Video Card",
          price: "$2000",
        },
        ram: {
          name: "32GB DDR5-6000MHz RAM",
          price: "$500",
        },
        motherboard: {
          name: "Z790 DDR5 Motherboard",
          price: "$300",
        },
        ssd: {
          name: "2TB PCIe NVMe GEN4 M.2 SSD",
          price: "$200",
        },
      },
      price: "$3379",
      discounted_price: "$3429",
      shipping_date: "4/30/2024",
      reviews: 40,
      fps: "315",
      link: "/system/Prebuilt-Gaming-PC-GLX-99613",
      imageUrl:
        "https://www.cyberpowerpc.com/images/cs/cpnv5s/CS-450-190_400.png",
    },
  ];

  return (
    <main className="">
      <section>
        <Navbar />
      </section>
      <section>
        <CustomCarousel images={backgroundImages} />
      </section>

      <section className="mt-24 px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <FeaturedCategories />
      </section>

      <section className="px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <BuildGuides />
      </section>

      <section className="px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <h1 className="max-sm:text-3xl text-4xl font-bold">
          Featured Custombuilt Systems
        </h1>
        <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {featurePcsList.map((pc, index) => (
            <PcCard
              key={pc.model}
              title={pc.model}
              os={pc.specs.os}
              specs={[
                pc.specs.cpu.name,
                pc.specs.videoCard.name,
                pc.specs.ram.name,
                pc.specs.motherboard.name,
                pc.specs.ssd.name,
              ]}
              reviews={pc.reviews}
              ratingStars={4}
              imageUrl={pc.imageUrl}
              count={index + 1}
            />
          ))}
        </div>
      </section>
      <section className="px-3 my-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <h1 className="max-sm:text-3xl text-4xl font-bold">
          Popular Prebuilt Systems
        </h1>
        <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {preBuiltPcList.map((pc, index) => (
            <div key={index} className={`${index}`}>
              <PcCard
                title={pc.model}
                os={pc.specs.os}
                specs={[
                  pc.specs.cpu.name,
                  pc.specs.videoCard.name,
                  pc.specs.ram.name,
                  pc.specs.motherboard.name,
                  pc.specs.ssd.name,
                ]}
                reviews={pc.reviews}
                ratingStars={4}
                imageUrl={pc.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <Footer />
      </section>
    </main>
  );
}
