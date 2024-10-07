import PCBuilderClient from "@/app/(pc builder)/list/pc-builder-client";
import BreadCrumb from "@/components/layout/BreadCrumb";
import { getComponents } from "@/server-actions/pc";
import { Component } from "@/types/component";

import { CheckCircle, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

interface ComponentResponse {
  success: boolean;
  message: string;
  components?: Component[];
}

export default async function ListPage() {
  const componentsData: ComponentResponse = await getComponents();
  console.log(componentsData);
  if (!componentsData.success) {
    return <div>{componentsData.message}</div>;
  }

  return (
    <div className="pt-4">
      <div className="mb-8  bg-gray-100 py-4">
        <BreadCrumb
          breadcrumbList={[
            {
              text: "Home",
              link: "/",
            },
            {
              text: "PC Builder",
              link: "/list",
            },
          ]}
        />
      </div>
      <div className="px-3 xl:max-w-[1400px] mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl space-y-4">
        <div>
          <h1 className="text-4xl font-semibold max-sm:text-3xl">
            Build Your PC
          </h1>
          <p className="text-gray-500">
            Start by selecting the components you want to add to your build.
          </p>
        </div>
        {/* <div className="p-4 bg-[#43AA8B] text-white">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <p className=" font-semibold">
              Compatibility: No issues or incompatibilities found.
            </p>
          </div>
        </div> */}

        <div className="">
          <Suspense fallback={<Loading />}>
            <PCBuilderClient
              initialComponents={componentsData.components || []}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-white bg-opacity-20 rounded w-3/4 mx-auto mb-8"></div>

        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-4">
            <div className="h-40 bg-white bg-opacity-20 rounded mb-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
