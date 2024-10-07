"use server";

import { connectToDB } from "@/lib/db";
import Product, { ProductDocument } from "@/models/product";
import { redirect } from "next/navigation";
import { Component, ComponentResponse } from "@/types/component"; // Make sure to import these types

export async function handleAdd(formData: FormData) {
  const price = formData.get("price") as string;
  const pcType = formData.get("pcType") as string;
  console.log("server actions called");
  console.log(price, pcType);
  redirect(`/list?price=${price}&pcType=${pcType}`);
}

// for test purpose using mock data
export async function getComponents(): Promise<ComponentResponse> {
  try {
    await connectToDB();
    const components = await Product.find().lean();

    // Convert MongoDB documents to Component type
    const typedComponents: Component[] = components.map((component: any) => ({
      _id: component._id.toString(),
      name: component.name,
      description: component.description,
      price: component.price,
      vendor: component.vendor,
      sold_out: component.sold_out,
      image_url: component.image_url,
      category: component.category,
      source: component.source,
      createdAt: component.createdAt,
      updatedAt: component.updatedAt,
    }));

    console.log(typedComponents);
    return {
      success: true,
      message: "Components fetched successfully",
      components: typedComponents,
    };
  } catch (e) {
    console.error(e);
    console.log("error");
    return {
      success: false,
      message: "Failed to fetch components",
    };
  }
}

export async function fetchComponentsByCategory(category: string) {
  try {
    await connectToDB();
    const components = await Product.find({ category });
    return components;
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "Failed to fetch components",
    };
  }
}

export async function fetchComponentById(id: string) {
  try {
    await connectToDB();
    const component = await Product.findById(id);
    return component;
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "Failed to fetch component",
    };
  }
}
