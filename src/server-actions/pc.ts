"use server";

import { redirect } from "next/navigation";

export async function handleAdd(formData: FormData) {
  const price = formData.get("price") as string;
  const pcType = formData.get("pcType") as string;
  console.log("server actions called");
  console.log(price, pcType);
  redirect(`/list?price=${price}&pcType=${pcType}`);
}
