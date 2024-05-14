import PcAddComponentCard from "@/components/PC/PcAddComponentCard";
import PcCard from "@/components/PC/PcCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Plus } from "lucide-react";

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
    "https://www.cyberpowerpc.com/images/cs/HYTEY60/CS-450-172_400.png?v22", // Replace with actual image URL
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
    <div>
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
      <div className="max-w-7xl mx-auto space-y-4">
        <div>
          <h1 className="text-4xl font-semibold">Build Your PC</h1>
          <p className="text-gray-500">
            Start by selecting the components you want to add to your build.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl uppercase font-bold">Processor</h2>
          <Plus size={48} />
        </div>
        {/* <PcAddComponentCard {...productData} /> */}
        {/* <PcCard
          title={productData.name}
          specs={[]}
          reviews={4}
          imageUrl={productData.image}
        /> */}
      </div>
    </div>
  );
}
