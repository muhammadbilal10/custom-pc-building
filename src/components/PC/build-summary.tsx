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
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";
import { CheckCircle, Trash2, AlertCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

interface BuildSummaryProps {
  selectedComponents: Record<string, Component>;
  onRemoveComponent: (category: string) => void;
  compatibility: {
    message: string | null;
    isCompatible: boolean;
  };
  editBuildId?: string;
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Processing..." : text}
    </Button>
  );
}

export function BuildSummary({
  selectedComponents,
  onRemoveComponent,
  compatibility,
  editBuildId,
}: BuildSummaryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const budget = Number(searchParams.get("price")) || 0;
  const pcType = searchParams.get("pcType") || "";
  const [state, formAction] = useFormState(completeBuild, null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showCompatibility, setShowCompatibility] = useState(false);

  const componentPrices = Object.values(selectedComponents).map(
    (component) => component.price
  );

  const totalPrice = sumPrices(componentPrices);
  const remainingBudget = budget - totalPrice;
  const isOverBudget = totalPrice > budget;

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
      Object.keys(componentCategories).length || isOverBudget;

  const componentCount = Object.keys(selectedComponents).length;

  useEffect(() => {
    if (compatibility.message && !compatibility.isCompatible) {
      setShowCompatibility(true);
    }
  }, [compatibility]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Build Summary</CardTitle>
            <CardDescription className="mt-2">
              Budget: {formatPrice(budget)} ({pcType} PC)
            </CardDescription>
          </div>
          {Object.keys(selectedComponents).length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "flex items-center gap-2",
                compatibility.isCompatible ? "text-green-600" : "text-red-600"
              )}
              onClick={() => setShowCompatibility(true)}
            >
              {compatibility.isCompatible ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              {compatibility.isCompatible ? "Compatible" : "Incompatible"}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {Object.entries(selectedComponents).map(([category, component]) => (
          <div
            key={category}
            className="flex items-center justify-between p-2 mb-2 group hover:bg-gray-50 rounded-lg"
          >
            <div className="flex-1">
              <span className="font-medium">{category}</span>
              <p className="text-sm text-gray-600 line-clamp-1">
                {component.name}
              </p>
              <span className="text-sm font-semibold">{component.price}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onRemoveComponent(category)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        ))}

        {Object.keys(selectedComponents).length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No components selected yet
          </div>
        )}

        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span>Total Price:</span>
            <span
              className={cn(
                "font-semibold",
                isOverBudget ? "text-red-600" : "text-green-600"
              )}
            >
              {formatPrice(totalPrice)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>Remaining Budget:</span>
            <span
              className={cn(
                "font-semibold",
                remainingBudget < 0 ? "text-red-600" : "text-green-600"
              )}
            >
              {formatPrice(remainingBudget)}
            </span>
          </div>

          {isOverBudget && (
            <p className="text-sm text-red-600 mt-2">
              ⚠️ Your build exceeds the specified budget by{" "}
              {formatPrice(Math.abs(remainingBudget))}
            </p>
          )}
        </div>
      </CardContent>

      <AlertDialog open={showCompatibility} onOpenChange={setShowCompatibility}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {compatibility.isCompatible ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
              {compatibility.isCompatible
                ? "Components are Compatible"
                : "Compatibility Issue Detected"}
            </AlertDialogTitle>
            <div className="max-h-[60vh] overflow-y-auto">
              <AlertDialogDescription
                className={cn(
                  "mt-4 space-y-2 whitespace-pre-wrap",
                  compatibility.isCompatible ? "text-green-700" : "text-red-700"
                )}
              >
                {compatibility.message}
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>

      <CardFooter className="">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-full"
              disabled={isCompleteDisabled}
              title={isOverBudget ? "Build exceeds budget limit" : undefined}
            >
              {isOverBudget ? "Exceeds Budget Limit" : "Complete Your Build"}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editBuildId ? "Update Your PC Build" : "Name Your PC Build"}
              </DialogTitle>
              <DialogDescription>
                {editBuildId
                  ? "Update your PC build configuration."
                  : "Give your PC build a name before completing it."}
              </DialogDescription>
            </DialogHeader>
            <form action={formAction} className="grid gap-4 py-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="buildName"
                  className="col-span-3"
                  required
                />

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
                {editBuildId && (
                  <input type="hidden" name="buildId" value={editBuildId} />
                )}
              </div>

              <DialogFooter>
                <SubmitButton
                  text={editBuildId ? "Update Build" : "Complete Build"}
                />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
