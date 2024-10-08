"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Component } from "@/types/component";
import { sumPrices, formatPrice } from "@/utils/priceUtils";
import { componentCategories } from "@/constant";
import { completeBuild } from "@/server-actions/pc";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";

interface BuildSummaryProps {
  selectedComponents: Record<string, Component>;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Processing..." : "Complete Your Build"}
    </Button>
  );
}

export function BuildSummary({ selectedComponents }: BuildSummaryProps) {
  const router = useRouter();
  const [state, formAction] = useFormState(completeBuild, null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const componentPrices = Object.values(selectedComponents).map(
    (component) => component.price
  );

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

  const isCompleteDisabled =
    Object.keys(selectedComponents).length !==
    Object.keys(componentCategories).length;

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
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full" disabled={isCompleteDisabled}>
              Complete Your Build
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Name Your PC Build</DialogTitle>
              <DialogDescription>
                Give your PC build a name before completing it.
              </DialogDescription>
            </DialogHeader>
            <form action={formAction} className="grid gap-4 py-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="buildName" className="col-span-3" />

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
              </div>

              <DialogFooter>
                <SubmitButton />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
