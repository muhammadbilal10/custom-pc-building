import PcCard from "@/components/PC/PcCard";
import FilterNavbar from "@/components/layout/FilterNavbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

async function getSystems() {
  return [
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
}

export default async function SystemPage() {
  const systemData = await getSystems();
  return (
    <div className="pt-4">
      <div className="mb-8  bg-gray-100 py-4">
        <Breadcrumb className="max-w-7xl mx-auto px-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/system">{`Completed Builds`}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-3 xl:max-w-[1400px] mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <h1 className="max-sm:text-3xl text-4xl font-bold">
          Choose your dream Gaming PC
        </h1>

        <div className="relative">
          <div className="sticky top-[63px] z-20">
            <FilterNavbar />
          </div>
          <section className="my-12 ">
            <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {systemData.map((pc, index) => (
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
              {systemData.map((pc, index) => (
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
        </div>
      </div>
    </div>
  );
}
