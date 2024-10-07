// app/pc-builder/pc-builder-client.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ComponentList } from "@/components/PC/component-list";
import { BuildSummary } from "@/components/PC/build-summary";
import { componentCategories } from "@/constant";
import { Component } from "@/types/component"; // Import the Component type from a shared location
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PCBuilderClientProps {
  initialComponents: Component[];
}

export default function PCBuilderClient({
  initialComponents,
}: PCBuilderClientProps) {
  console.log(initialComponents);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState<
    Record<string, Component>
  >({});

  const handleSelectComponent = (category: string, component: Component) => {
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

      <BuildSummary selectedComponents={selectedComponents} />
    </div>
  );
}
