import { ImageCarousel } from "@/components/common/Carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Star } from "lucide-react";

type system = {
  model: string;
  specs: {
    os: string;
    cpu: {
      name: string;
      price: string;
      specs: string[];
    };
    videoCard: {
      name: string;
      price: string;
    };
    ram: {
      name: string;
      price: string;
    };
    motherboard: {
      name: string;
      price: string;
    };
    ssd: {
      name: string;
      price: string;
    };
  };
  price: string;
  discounted_price: string;
  shipping_date: string;
  reviews: number;
  fps: string;
  link: string;
  imageUrl: string;
};

async function getSystemDetails(systemId: string): Promise<system> {
  return {
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
  };
}

export default async function SystemDetails({
  params,
}: {
  params: { systemId: string };
}) {
  console.log(params.systemId);
  const systemImages = [
    "https://www.cyberpowerpc.com/images/cs/PBET2018/ET4416_matrexx55/blk_400.png?v1",
    "https://www.cyberpowerpc.com/images/cs/PBET2018/ET99611/main_400.png",
    "https://www.cyberpowerpc.com/images/cs/KING95/CS-448-300_400.png",
  ];

  const systemDetails = await getSystemDetails(params.systemId);
  return (
    <div className="pt-4">
      <div className="mb-8 bg-gray-100 py-4">
        <Breadcrumb className="max-w-7xl mx-auto px-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/systems">Systems</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid gap-8  px-4 md:grid-cols-2 mx-auto max-w-7xl">
        <ImageCarousel images={systemImages} className="h-40" />
        <div>
          <h1 className="lg:text-3xl font-bold mb-3 text-xl">
            {systemDetails?.model}
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium  ">{systemDetails?.price}</p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  fill={systemDetails?.reviews === 0 ? "white" : "black"}
                  className="h-4 w-4 "
                />
              ))}
              <p className="text-sm ml-1 text-muted-foreground">
                ({systemDetails?.reviews} Reviews)
              </p>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <div className="">
              <span className="text-sm font-medium text-gray-400">
                Operating System:
              </span>
              <span className="text-sm font-light ml-1">
                {systemDetails?.specs.os}
              </span>
            </div>
            <div className="">
              <span className="text-sm font-medium text-gray-400">CPU:</span>
              <span className="text-sm font-light ml-1">
                {systemDetails?.specs.cpu.name}
              </span>
            </div>
            <div className="">
              <span className="text-sm font-medium text-gray-400">
                Video Card:
              </span>
              <span className="text-sm font-light ml-1">
                {systemDetails?.specs.videoCard.name}
              </span>
            </div>
            <div className="">
              <span className="text-sm font-medium text-gray-400">RAM:</span>
              <span className="text-sm font-light ml-1">
                {systemDetails?.specs.ram.name}
              </span>
            </div>
            <div className="">
              <span className="text-sm font-medium text-gray-400">
                Motherboard:
              </span>
              <span className="text-sm font-light ml-1">
                {systemDetails?.specs.motherboard.name}
              </span>
            </div>
            <div className="">
              <span className="text-sm font-medium text-gray-400">SSD:</span>
              <span className="text-sm font-light ml-1">
                {systemDetails?.specs.ssd.name}
              </span>
            </div>
            <div className="">
              <span className="text-sm font-medium text-gray-400">FPS:</span>
              <span className="text-sm font-light ml-1">
                {systemDetails?.fps}
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="max-w-[200px] w-full">Buy It Now</Button>
          </div>
        </div>
      </div>
      <div>{/* <h2 className="text-xl font-bold">Description</h2> */}</div>
    </div>
  );
}
