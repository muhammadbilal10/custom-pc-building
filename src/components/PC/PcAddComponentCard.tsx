import React from "react";
import PcCard from "@/components/PC/PcCard"; // Assuming PcCard is updated
import Image from "next/image";

interface Product {
  image: string;
  name: string;
  brand: string;
  specs: { name: string; value: string }[];
  price: string;
  productLink?: string; // Optional property
}

const PcAddComponentCard: React.FC<Product> = ({
  image,
  name,
  brand,
  specs,
  price,
  productLink,
}) => {
  const keySpecs = specs.slice(0, 3); // Extract first 3 specs

  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        height={800}
        width={800}
        alt={name}
        className="w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-base text-gray-500">{brand}</p>
        <ul className="list-disc space-y-1 mt-2 text-sm text-gray-700">
          {keySpecs.map((spec) => (
            <li key={spec.name}>
              {spec.name}: {spec.value}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-medium text-gray-900">{price}</p>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium text-sm rounded-lg px-3 py-2">
              Add to Build
            </button>
            {productLink && (
              <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium text-sm"
              >
                View Details
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcAddComponentCard;

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Car, Plus } from "lucide-react";
// import Image from "next/image";
// import { Button } from "../ui/button";

// export default function PcAddComponentCard() {
//   return (
//     <Card className="flex justify-between cursor-pointer group bg-gray-100 shadow-md rounded-lg">
//       <CardHeader className="flex-row items-center space-x-2">
//         <div className="bg-yellow-600 p-2 h-10 w-10 rounded-sm">
//           <Plus size={24} className="text-white" strokeWidth={2.5} />
//         </div>
//         <div>
//           <CardTitle className="group-hover:text-yellow-400 transition-all duration-500 ease-in-out text-black">
//             Data Drive - M.2 SOCKET
//           </CardTitle>
//           <CardDescription className="group-hover:text-gray-800 transition-all duration-500 ease-in-out text-gray-500">
//             Kingston FURY Renegade 2TB - PCIe M.2 SSD
//           </CardDescription>
//         </div>
//       </CardHeader>

//       <CardContent className="flex justify-center items-center">
//         <div className="invisible group-hover:visible group-hover:translate-y-3 transition-all duration-300 ease-in">
//           <Button className="bg-white text-black hover:text-white w-32 ">
//             Add Component
//           </Button>
//         </div>
//       </CardContent>
//       <CardFooter className="p-0">
//         <Image
//           src="https://images.ctfassets.net/n2eibog5sv5g/PsSeSz2g2WuG4TXvH/54206a6290f870e18b4f64f862a9cae4/ONBOARD_ETHERNET_1200X600_V3.jpg"
//           width={200}
//           height={200}
//           alt="Motherboard Image"
//         />
//       </CardFooter>
//     </Card>
//   );
// }
