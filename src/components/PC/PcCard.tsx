import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function PcCard() {
  const pcImages = [
    "https://www.cyberpowerpc.com/images/cs/Lumina/cs-450-194_400.png",
    "https://www.cyberpowerpc.com/images/cs/syberm3/CS-192-303_400.png?v2",
    "https://www.cyberpowerpc.com/images/cs/cpnv5s/CS-450-190_400.png",
    "https://maingear.com/wp-content/uploads/apex-rush-rog-certified-apex.webp",
    "https://www.cyberpowerpc.com//images/cs/PBET2018/et9799_auron242v/blk_400.png",
  ];

  const title = "Prebuilt Gaming PC GLX 99613";
  const specs = [
    "Intel® Core™ Processor i7-14700KF",
    "GeForce RTX™ 4060 Ti 16GB GDDR6 Video Card (DLSS 3.0) [AI-Powered Graphics]",
    "32GB DDR5-6000MHz RAM",
    "Z790 DDR5 Motherboard",
    "2TB PCIe NVMe M.2 SSD",
  ];

  const reviews = 16 as number;
  const ratingStars = 4 as number;

  return (
    <Card className="bg-[#f6f8f8] border-none rounded-none shadow-lg ">
      <Link href="/">
        <CardContent className="bg-[#f1f3f5] p-5">
          <Image
            src={pcImages[4]}
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-[280px] h-[280px] mx-auto"
          />
        </CardContent>
        <CardHeader className="">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          {specs.map((spec, index) => (
            <CardDescription key={index} className="line-clamp-1">
              {spec}
            </CardDescription>
          ))}
        </CardHeader>
        <CardFooter className="flex-col items-start">
          <div className="flex space-x-2 items-center">
            <div className="flex">
              {Array.from({ length: ratingStars }, (_, index) => (
                <Star
                  key={index}
                  fill={reviews === 0 ? "white" : "black"}
                  className="h-4 w-4 "
                />
              ))}
            </div>
            <p className="text-sm font-bold ">
              {reviews}
              <span className="ml-2 font-light text-muted-foreground">
                Reviews
              </span>
            </p>
          </div>
          <div className="mt-2 w-full flex items-center justify-between">
            <div className="">
              <div className="text-sm text-muted-foreground line-through">
                $1579
              </div>
              <div className="text-lg font-bold">$1529</div>
            </div>
            <Button className="">Buy Now</Button>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
