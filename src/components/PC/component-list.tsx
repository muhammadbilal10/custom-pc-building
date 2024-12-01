// components/pc-builder/component-list.tsx

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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LucideIcon, Loader2 } from "lucide-react";
import { Component } from "@/types/component";

interface ComponentListProps {
  category: { name: string; icon: LucideIcon };
  components: Component[];
  onSelect: (category: string, component: Component) => void;
  selectedComponent?: Component;
  isLoading?: boolean;
  processingCategory?: string | null;
}

export function ComponentList({
  category,
  components,
  onSelect,
  selectedComponent,
  isLoading = false,
  processingCategory = null,
}: ComponentListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const CategoryIcon = category.icon;

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(components);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold ">Choose {category.name}</h2>
        <CategoryIcon className="w-8 h-8 " />
      </div>

      <Input
        placeholder={`Search ${category.name}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <ScrollArea className="h-[400px] pr-4">
        {filteredComponents.map((component) => (
          <Card
            key={component._id}
            className="mb-4 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
          >
            <CardHeader>
              <CardTitle className="">{component.name}</CardTitle>
              <CardDescription className="">{component.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{component.description}</p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => onSelect(category.name, component)}
                variant={
                  selectedComponent?._id === component._id
                    ? "secondary"
                    : "default"
                }
                className="w-full"
                disabled={isLoading}
              >
                {isLoading && processingCategory === category.name ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Checking compatibility...</span>
                  </div>
                ) : selectedComponent?._id === component._id ? (
                  "Selected"
                ) : (
                  "Select"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
}
