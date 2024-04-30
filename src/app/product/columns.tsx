"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string;
  imageUrl: string;
  price: string;
  title: string;
  buyLink: string;
  addProduct: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "imageUrl",
    header: "Product",
    cell: ({ row }) => (
      <div>
        {row.getValue("title")}
        <Image
          src={row.getValue("imageUrl")}
          alt={row.original.title}
          height={95}
          width={95}
        />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "buyLink",
    header: "Link",
  },
  {
    accessorKey: "addProduct",
    header: "Add Product",
  },
];
