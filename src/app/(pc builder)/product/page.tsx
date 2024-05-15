import { DataTable } from "@/components/ui/data-table";
import { Product, columns } from "./columns";

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      imageUrl: "https://m.media-amazon.com/images/I/41hFTmi5aUL.jpg",
      title: "AMD Ryzen™ 9 5950X 16-Core, 32-Thread Unlocked Desktop Processor",
      price: "$799.99",
      buyLink:
        "https://www.amazon.com/AMD-Ryzen-5950X-16-Core-Processor/dp/B0815XFSGK",
      addProduct: "Add to Cart",
    },
  ];
}

export default async function ProductPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
