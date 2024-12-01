// app/pc-builder/pc-builder-client.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ComponentList } from "@/components/PC/component-list";
import { BuildSummary } from "@/components/PC/build-summary";
import { componentCategories } from "@/constant";
import { Component } from "@/types/component"; // Import the Component type from a shared location
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { checkCompatibility } from "@/utils/compatibilityCheck";
import { toast } from "sonner";
import { sumPrices, formatPrice } from "@/utils/priceUtils";

interface PCBuilderClientProps {
  initialComponents: Component[];
}

interface CompatibilityStatus {
  message: string;
  isCompatible: boolean;
}

export default function PCBuilderClient({
  initialComponents,
}: PCBuilderClientProps) {
  console.log(initialComponents);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState<
    Record<string, Component>
  >({});
  const [compatibility, setCompatibility] = useState<CompatibilityStatus>({
    message: "",
    isCompatible: true,
  });

  const handleSelectComponent = async (
    category: string,
    component: Component
  ) => {
    const searchParams = new URLSearchParams(window.location.search);
    const budget = Number(searchParams.get("price")) || 0;

    // Calculate current total price excluding the component being replaced
    const currentComponents = { ...selectedComponents };
    delete currentComponents[category];
    const currentTotal = sumPrices(
      Object.values(currentComponents).map((c) => c.price)
    );
    const componentPrice = parseFloat(
      component.price.replace(/[^0-9.-]+/g, "")
    );

    // Check if adding this component would exceed budget
    if (currentTotal + componentPrice > budget) {
      toast.error(
        `Adding ${component.name} would exceed your budget of ${formatPrice(
          budget
        )}`
      );
      return;
    }

    const existingComponentCount = Object.keys(selectedComponents).length;
    let compatibilityStatus = { message: "", isCompatible: true };

    if (existingComponentCount > 0) {
      const compatibilityResult = await checkCompatibility(
        selectedComponents,
        component,
        category
      );

      compatibilityStatus = {
        message: (compatibilityResult.message as string) || "",
        isCompatible: compatibilityResult.isCompatible,
      };

      setCompatibility(compatibilityStatus);

      if (!compatibilityResult.isCompatible) {
        return;
      }
    }

    setSelectedComponents((prev) => ({ ...prev, [category]: component }));

    if (currentStep < componentCategories.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRemoveComponent = async (category: string) => {
    const updatedComponents = { ...selectedComponents };
    delete updatedComponents[category];

    // Reset compatibility status when removing components
    setCompatibility({ message: "", isCompatible: true });

    // Find the index of the category and set it as current step
    const categoryIndex = componentCategories.findIndex(
      (c) => c.name === category
    );
    if (categoryIndex !== -1) {
      setCurrentStep(categoryIndex);
    }

    setSelectedComponents(updatedComponents);
  };

  const currentCategory = componentCategories[currentStep];
  const currentComponents = initialComponents.filter(
    (component) => component.category === currentCategory.name
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-4xl">{currentCategory.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ComponentList
            category={currentCategory}
            components={currentComponents}
            onSelect={handleSelectComponent}
            selectedComponent={selectedComponents[currentCategory.name]}
          />

          <div className="flex justify-between mt-6">
            <Button
              onClick={handlePreviousStep}
              disabled={currentStep === 0}
              variant="outline"
            >
              Previous Step
            </Button>
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={
                currentStep === componentCategories.length - 1 ||
                !selectedComponents[currentCategory.name]
              }
            >
              Next Step
            </Button>
          </div>
        </CardContent>
      </Card>

      <BuildSummary
        selectedComponents={selectedComponents}
        onRemoveComponent={handleRemoveComponent}
        compatibility={compatibility}
      />
    </div>
  );
}
