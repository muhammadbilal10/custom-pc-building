import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ComponentList } from "@/components/pc-builder/component-list";
import { ComponentSearch } from "@/components/pc-builder/component-search";
import { fetchComponentsByCategory } from "@/server-actions/pc";
import { componentCategories, Category } from "@/constant";
import BreadCrumb from "@/components/layout/BreadCrumb";

export const dynamicParams = true;

export async function generateStaticParams() {
  return Object.keys(componentCategories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  // convert category into normal string
  const normalCategory = decodeURIComponent(params.category);
  console.log(normalCategory);
  const category = componentCategories.find(
    (c) => c.name.toLowerCase() === normalCategory.toLowerCase()
  );
  if (!category) return notFound();

  console.log(category);

  return {
    title: `Select ${category.name} | PC Builder`,
    description: `Choose the perfect ${category.name} for your custom PC build.`,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: { category: string };
}) {
  console.log(params.category);
  const normalCategory = decodeURIComponent(params.category);
  const category = componentCategories.find(
    (c) => c.name.toLowerCase() === normalCategory.toLowerCase()
  );
  if (!category) return notFound();

  const components = await fetchComponentsByCategory(normalCategory);

  return (
    <div className="pt-4">
      <div className="mb-4  bg-gray-100 py-4">
        <BreadCrumb
          breadcrumbList={[
            {
              text: "Home",
              link: "/",
            },
            {
              text: "Components",
              link: "#",
            },
            {
              text: category.name,
              link: `/components/${category.name}`,
            },
          ]}
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Select {category.name}</h1>
        <div className="text-lg text-gray-700 mb-6">
          Discover a curated collection of top-notch {category.name} components
          to enhance your PC's performance.
        </div>
        {/* <ComponentSearch category={normalCategory} /> */}
        <Suspense fallback={<div>Loading components...</div>}>
          <ComponentList
            initialComponents={components}
            category={normalCategory}
          />
        </Suspense>
      </div>
    </div>
  );
}
