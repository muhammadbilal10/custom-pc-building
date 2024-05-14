"use server";

import { connectToDB } from "@/lib/db";
import User, { UserDocument } from "@/models/user";
import bcrypt from "bcryptjs";

export async function getUser(email: string, password: string) {
  try {
    //password hashing
    const pwHash = await bcrypt.hash(password, 10);

    // Connect to the database
    await connectToDB();
    const user = User.findOne({
      email: email,
      // password: pwHash,
    });

    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  } catch (error) {
    console.log("Error in authorize", error);
    return null;
  }
}
