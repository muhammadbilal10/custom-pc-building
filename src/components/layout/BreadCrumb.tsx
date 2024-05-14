import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type breadcrumbType = {
  text: string;
  link: string;
};

export default function BreadCrumb({
  breadcrumbList,
}: {
  breadcrumbList: breadcrumbType[];
}) {
  return (
    <Breadcrumb className="max-w-7xl mx-auto px-3">
      <BreadcrumbList>
        {breadcrumbList.map((breadcrumb, index) => {
          return (
            <div key={index} className="flex items-center space-x-2">
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.link}>
                  {breadcrumb.text}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbList.length - 1 && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
