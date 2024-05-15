import PcAddComponentCard from "@/components/PC/PcAddComponentCard";
import PcCard from "@/components/PC/PcCard";
import PcComponetCard from "@/components/PC/PcComponetCard";
import BreadCrumb from "@/components/layout/BreadCrumb";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CheckCircle, Plus } from "lucide-react";
import Link from "next/link";

const components = [
  {
    name: "CPU",
    brand: "AMD",
    image: "https://placeholdit.img/100x100",
    specs: [
      { name: "Model", value: "Ryzen 7 5800X" },
      { name: "Cores", value: "8" },
      { name: "Threads", value: "16" },
      { name: "Clock Speed", value: "3.8 GHz (up to 4.7 GHz)" },
    ],
    price: "$349.00",
    productLink: "https://www.amd.com/en/products/cpu/amd-ryzen-7-5800x",
  },
];

const productData = {
  image:
    "https://nzxt.com/assets/cms/34299/1664351911-n7-b650e-white-hero.png?ar64=MTox&auto=format&dpr=2&fit=crop&h=400&w=400", // Replace with actual image URL
  name: "AMD Ryzen 7 5800X Processor",
  brand: "AMD",
  specs: [
    { name: "Cores", value: "8" },
    { name: "Threads", value: "16" },
    { name: "Clock Speed", value: "3.8 GHz (up to 4.7 GHz)" },
  ],
  price: "$349.00",
  productLink: "https://www.amd.com/en/products/cpu/amd-ryzen-7-5800x",
};

export default function ListPage() {
  return (
    <div className="pt-4">
      <div className="mb-8  bg-gray-100 py-4">
        <BreadCrumb
          breadcrumbList={[
            {
              text: "Home",
              link: "/",
            },
            {
              text: "PC Builder",
              link: "/list",
            },
          ]}
        />
      </div>
      <div className="px-3 xl:max-w-[1400px] mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl space-y-4">
        <div>
          <h1 className="text-4xl font-semibold max-sm:text-3xl">
            Build Your PC
          </h1>
          <p className="text-gray-500">
            Start by selecting the components you want to add to your build.
          </p>
        </div>
        <div className="p-4 bg-[#43AA8B] text-white">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <p className=" font-semibold">
              Compatibility: No issues or incompatibilities found.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl uppercase font-bold">Processor</h2>
            <Link href="/product/processor">
              <Plus size={48} />
            </Link>
          </div>
          <div className="max-w-md">
            <PcComponetCard
              title={productData.name}
              imageUrl={productData.image}
              buyLink={productData.productLink}
              reviews={456}
              ratingStars={4}
              specs={["8 Cores", "16 Threads", "3.8 GHz (up to 4.7 GHz)"]}
              os="Windows 10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl uppercase font-bold">MotherBoard</h2>
            <Link href="/product/motherboard">
              <Plus size={48} />
            </Link>
          </div>
          <div className="max-w-md">
            <PcComponetCard
              title={productData.name}
              imageUrl={productData.image}
              buyLink={productData.productLink}
              reviews={456}
              ratingStars={4}
              specs={["8 Cores", "16 Threads", "3.8 GHz (up to 4.7 GHz)"]}
              os="Windows 10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
