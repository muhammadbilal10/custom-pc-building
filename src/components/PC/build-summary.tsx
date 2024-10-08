"use client";

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
import { sumPrices, formatPrice, parsePrice } from "@/utils/priceUtils";
import { componentCategories } from "@/constant";
import { completeBuild } from "@/server-actions/pc";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";

interface BuildSummaryProps {
  selectedComponents: Record<string, Component>;
}

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending || disabled}>
      {pending ? "Processing..." : "Complete Your Build"}
    </Button>
  );
}

export function BuildSummary({ selectedComponents }: BuildSummaryProps) {
  const router = useRouter();
  const [state, formAction] = useFormState(completeBuild, null);

  const componentPrices = Object.values(selectedComponents).map(
    (component) => component.price
  );

  console.log("Component Prices:", componentPrices);
  const totalPrice = sumPrices(componentPrices);

  useEffect(() => {
    if (state?.success) {
      toast.success("Build completed successfully");
      router.push("/user-list");
    }
    if (state?.success === false) {
      toast.error(state.message);
    }
  }, [state, router]);

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
        <form action={formAction} className="w-full">
          <input
            type="hidden"
            name="components"
            value={JSON.stringify(selectedComponents)}
          />
          <input
            type="hidden"
            name="totalPrice"
            value={totalPrice.toString()}
          />
          <SubmitButton
            disabled={
              Object.keys(selectedComponents).length !==
              Object.keys(componentCategories).length
            }
          />
        </form>
      </CardFooter>
    </Card>
  );
}
