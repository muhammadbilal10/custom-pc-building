// app/components/pc-builder/build-summary.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Component } from "@/types/component";
import { sumPrices, formatPrice } from "@/utils/priceUtils";
import { componentCategories } from "@/constant";

interface BuildSummaryProps {
  selectedComponents: Record<string, Component>;
}

export function BuildSummary({ selectedComponents }: BuildSummaryProps) {
  const componentPrices = Object.values(selectedComponents).map(
    (component) => component.price
  );
  const totalPrice = sumPrices(componentPrices);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="">Your Build Summary</CardTitle>
        <CardDescription className="">
          Total Price: {formatPrice(totalPrice)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {Object.entries(selectedComponents).map(([category, component]) => (
          <div
            key={category}
            className="flex justify-between items-center mb-2"
          >
            <span className="line-clamp-1">
              {category}: {component.name}
            </span>
            <span>{component.price}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="">
        <Button
          className="w-full"
          disabled={
            Object.keys(selectedComponents).length !==
            componentCategories.length
          }
        >
          Complete Your Build
        </Button>
      </CardFooter>
    </Card>
  );
}
