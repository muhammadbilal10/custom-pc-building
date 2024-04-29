import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function BuildGuides() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:bg-gray-100 max-lg:space-y-4">
        <Image
          src="https://maingear.com/wp-content/uploads/mg-1-geforce-hero.webp"
          alt="Build Guides"
          height={800}
          width={800}
          className="h-full w-full"
        />
        <div className="space-y-8 my-auto max-lg:text-center pr-10">
          <div className="space-y-2">
            <h2 className="text-6xl font-bold">Build Guides</h2>
            <p>
              Building your own PC and need ideas on where to get started?
              Explore our build guides which cover systems for a variety of
              use-cases and budgets.
            </p>
          </div>
          <div>
            <Button>View the Build Guides</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
