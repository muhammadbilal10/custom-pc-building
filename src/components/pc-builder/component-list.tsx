"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Component } from "@/types/component";
import PcComponetCard from "../PC/PcComponetCard";

interface ComponentListProps {
  initialComponents: Component[];
  category: string;
}

export function ComponentList({
  initialComponents,
  category,
}: ComponentListProps) {
  const [components, setComponents] = useState(initialComponents);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {components.map((component) => (
        <PcComponetCard
          key={component._id}
          title={component.name}
          imageUrl={component.image_url}
          price={component.price}
        />
      ))}
    </div>
  );
}
