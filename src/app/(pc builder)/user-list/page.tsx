import { Suspense } from "react";
import { PCBuildList } from "@/components/pc-builder/pc-build-list";
import { PCBuildSearch } from "@/components/pc-builder/pc-build-search";

export const metadata = {
  title: "PC Build List",
  description: "View and search your PC builds",
};

export default function PCBuildListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Your Custom PC Builds
        </h1>
        <p className="text-muted-foreground">
          Explore your custom PC builds and manage them.
        </p>
      </div>
      {/* <PCBuildSearch /> */}
      <Suspense fallback={<div>Loading builds...</div>}>
        <PCBuildList />
      </Suspense>
    </div>
  );
}
