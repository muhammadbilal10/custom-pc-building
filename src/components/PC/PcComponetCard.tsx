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
import Link from "next/link";
import { Button } from "../ui/button";

type PcComponetCardProps = {
  title: string;
  os: string;
  specs: string[];
  reviews: number;
  ratingStars: number;
  imageUrl: string;

  buyLink: string;
};

export default function PcComponetCard({
  title,
  os,
  specs,
  reviews,
  ratingStars,
  imageUrl,
  buyLink,
}: PcComponetCardProps) {
  return (
    <Card className={` bg-[#f6f8f8] border-none rounded-none shadow-lg `}>
      <Link href="#">
        <CardContent className="bg-[#f1f3f5] p-5">
          <Image
            src={imageUrl}
            alt="Picture of PC"
            width={500}
            height={500}
            className="w-[280px] h-[280px] mx-auto"
          />
        </CardContent>
        <CardHeader className="">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          {/* <h3 className="font-bold pt-4">{os}</h3> */}
          {/* {specs.map((spec, index) => (
            <CardDescription key={index} className="line-clamp-1">
              {spec}
            </CardDescription>
          ))} */}
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
            <div className="flex items-center space-x-2">
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
