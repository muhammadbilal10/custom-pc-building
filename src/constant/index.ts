import {
  Cpu,
  GalleryHorizontal,
  HardDrive,
  Home,
  Power,
  Tv,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Category {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const componentCategories: Category[] = [
  {
    name: "Processors",
    icon: Cpu,
    description: "Central Processing Unit - The brain of your computer",
  },
  {
    name: "Storage",
    icon: Home,
    description: "The main circuit board that connects all components",
  },
  {
    name: "Audio",
    icon: GalleryHorizontal,
    description: "Random Access Memory for temporary data storage",
  },
  {
    name: "Monitors",
    icon: Tv,
    description: "Graphics Processing Unit for rendering visuals",
  },
  {
    name: "Motherboards",
    icon: HardDrive,
    description: "Hard drives and SSDs for permanent data storage",
  },
  {
    name: "Memory",
    icon: Power,
    description: "Provides power to all computer components",
  },
  {
    name: "Power Supplies",
    icon: Power,
    description: "Provides power to all computer components",
  },
  {
    name: "Cases",
    icon: Power,
    description: "Provides power to all computer components",
  },
  {
    name: "Cooling",
    icon: Power,
    description: "Provides power to all computer components",
  },
  {
    name: "Peripherals",
    icon: Power,
    description: "Provides power to all computer components",
  },
  {
    name: "Other",
    icon: Power,
    description: "Provides power to all computer components",
  },
];
