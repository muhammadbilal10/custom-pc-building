"use server";

import { signIn } from "@/auth";
import { connectToDB } from "@/lib/db";
import { loginFormSchema, registrationFormSchema } from "@/lib/formSchema";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  try {
    const user = await signIn("credentials", formData);
    // console.log("user", user);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" };
        default:
          return { error: "Something went wrong" };
      }
      throw error;
    }
  }
  redirect("/");
}

export async function registration(prevState: any, formData: FormData) {
  try {
    const validatedData = registrationFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
    });

    console.log("validatedData");

    if (!validatedData.success) {
      return { errors: validatedData.error?.flatten().fieldErrors };
    }

    const { email, password, firstName, lastName } = validatedData.data;

    await connectToDB();

    // check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return {
        errors: {
          email: "email already exists",
        },
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // store user to database
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: firstName.trim() + " " + lastName.trim(),
    });
    console.log(`User ${newUser.name} created successfully`);
    // return {
    //   message: `your account has been created successfully, ${newUser.name}!`,
    // };
  } catch (error) {
    console.log("Error in registration", error);
  }
  redirect("/login");
}
