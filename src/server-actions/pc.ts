"use server";

import { connectToDB } from "@/lib/db";
import Product, { ProductDocument } from "@/models/product";
import { redirect } from "next/navigation";
import { Component, ComponentResponse } from "@/types/component"; // Make sure to import these types
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import Build from "@/models/build";
import User from "@/models/user";

export async function handleAdd(formData: FormData) {
  const price = formData.get("price") as string;
  const pcType = formData.get("pcType") as string;
  console.log("server actions called");
  console.log(price, pcType);
  redirect(`/list?price=${price}&pcType=${pcType}`);
}

// for test purpose using mock data
export async function getComponents(
  price: string,
  name: string
): Promise<ComponentResponse> {
  try {
    await connectToDB();

    const components = await Product.find({});

    // Convert MongoDB documents to Component type and filter by price
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
    const components = await Product.find({ category }).lean();
    const typedComponents: Component[] = components.map((component: any) => ({
      _id: component._id.toString(),
      name: component.name,
      description: component.description,
      price: component.price,
      vendor: component.vendor,
      sold_out: component.sold_out,
      image_url: component.image_url,
      category: component.category,
      createdAt: component.createdAt,
      updatedAt: component.updatedAt,
    }));
    return typedComponents;
  } catch (e) {
    console.error(e);
    return [];
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

// add to user's list

export async function completeBuild(prevState: any, formData: FormData) {
  try {
    await connectToDB();
    const session = await auth();
    if (!session || !session.user) {
      return { success: false, message: "User not authenticated" };
    }

    // find user by email
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const componentsJson = formData.get("components") as string;
    const totalPrice = formData.get("totalPrice") as string;
    const buildName = formData.get("buildName") as string;
    const components = JSON.parse(componentsJson);

    console.log(buildName);

    const newBuild = new Build({
      userId: user.id,
      name: buildName,
      components: components,
      totalPrice: totalPrice,
    });

    await newBuild.save();

    revalidatePath("/builds");

    return { success: true, message: "Build completed successfully" };
  } catch (error) {
    console.error("Error completing build:", error);
    return { success: false, message: "Failed to complete build" };
  }
}

// get all builds of a user
export async function getUserAllBuilds() {
  try {
    await connectToDB();
    const session = await auth();
    if (!session || !session.user) {
      return { success: false, message: "User not authenticated" };
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const builds = await Build.find({ userId: user.id }).lean();
    const typedBuilds = builds.map((build: any) => ({
      _id: build._id.toString(),
      userId: build.userId.toString(),
      name: build.name,
      components: build.components,
      totalPrice: build.totalPrice,
    }));
    console.log(typedBuilds);
    return {
      success: true,
      message: "Builds fetched successfully",
      builds: typedBuilds || [],
    };
  } catch (error) {
    console.error("Error getting user builds:", error);
    return { success: false, message: "Failed to get user builds" };
  }
}

// get all builds
export async function getAllBuilds() {
  try {
    await connectToDB();

    // get all build along with user name as well
    const builds = await Build.find({}).populate("userId").lean();
    console.log(builds);
    const typedBuilds = builds.map((build: any) => ({
      _id: build._id.toString(),
      userId: build.userId.name,
      name: build.name,
      components: build.components,
      totalPrice: build.totalPrice,
    }));
    return {
      success: true,
      message: "Builds fetched successfully",
      builds: typedBuilds || [],
    };
  } catch (error) {
    console.error("Error getting all builds:", error);
    return { success: false, message: "Failed to get all builds" };
  }
}

// delete a user build
export async function deleteUserBuild(prevState: any, formData: FormData) {
  try {
    await connectToDB();
    const session = await auth();
    if (!session || !session.user) {
      return { success: false, message: "User not authenticated" };
    }
    const id = formData.get("id") as string;

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const build = await Build.findOne({ _id: id, userId: user.id });
    if (!build) {
      return {
        success: false,
        message: "Build not found or not owned by user",
      };
    }

    await Build.findByIdAndDelete(id);
    revalidatePath("/user-list");
    return { success: true, message: "Build deleted successfully" };
  } catch (error) {
    console.error("Error deleting build:", error);
    return { success: false, message: "Failed to delete build" };
  }
}

function calculateTotalPrice(components: Record<string, any>): number {
  return Object.values(components).reduce(
    (total, component) => total + component.price,
    0
  );
}
