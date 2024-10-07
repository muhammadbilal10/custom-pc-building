"use server";

import { connectToDB } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function getUser(email: string, password: string) {
  try {
    //password hashing
    // const pwHash = await bcrypt.hash(password, 10);

    // Connect to the database
    await connectToDB();
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      throw new Error("User not found.");
    }
    const isPasswordValid = await bcrypt.compare(password, user?.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return user;
  } catch (error) {
    console.log("Error in authorize", error);
    return null;
  }
}
