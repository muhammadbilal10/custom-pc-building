"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import Image from "next/image";

import { useFormState, useFormStatus } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { registrationFormSchema } from "@/lib/formSchema";
import { registration } from "@/server-actions/auth";
import { Loader2, Triangle, TriangleAlert } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="w-full">
      {!pending ? (
        "Create an account"
      ) : (
        <>
          <Loader2 className="animate-spin h-4 w-4" />
          <span className="ml-2">Creating account...</span>
        </>
      )}
    </Button>
  );
}

export default function RegistrationForm() {
  const [state, formAction] = useFormState(registration, null);
  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registrationFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action={formAction}
            // onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Muhammad" {...field} required />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      {state?.errors?.lastName && (
                        <div className="col-span-2 mt-1">
                          <div className=" text-red-700 p-1 rounded-md flex items-start space-x-1">
                            <TriangleAlert className="mt-1 w-4 h-4" />
                            <span>{state.errors.lastName}</span>
                          </div>
                        </div>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Uzair" {...field} required />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      {state?.errors?.lastName && (
                        <div className="col-span-2 mt-1">
                          <div className=" text-red-700 p-1 rounded-md flex items-start space-x-1">
                            <TriangleAlert className="mt-1 w-4 h-4" />
                            <span>{state.errors.lastName}</span>
                          </div>
                        </div>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="johndoe@example.com"
                        {...field}
                        required
                      />
                    </FormControl>
                    {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {state?.errors?.email && (
                <div className="col-span-2 mt-1">
                  <div className=" text-red-700 p-1 rounded-md mb-4 flex items-center space-x-1">
                    <TriangleAlert className="w-4 h-4" />
                    <span>{state.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                  </div>

                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      required
                    />
                  </FormControl>
                  <div>
                    {state?.errors?.password && (
                      <div className="col-span-2 mt-1">
                        <div className=" text-red-700 p-1 rounded-md flex items-start space-x-1">
                          <TriangleAlert className="mt-1 w-4 h-4" />
                          <span>{state.errors.password[0]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <FormDescription>
                    Your password should be at least 8 characters long and
                    include a mix of letters, numbers, and special characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton />
            {/* <Button variant="outline" className="w-full">
              Sign up with Google
            </Button> */}
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
