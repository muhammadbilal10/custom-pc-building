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
import Link from "next/link";

import { useFormState, useFormStatus } from "react-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { loginFormSchema } from "@/lib/formSchema";
import { login } from "@/server-actions/auth";
import { useRef } from "react";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="w-full">
      {!pending ? (
        "Login"
      ) : (
        <>
          <Loader2 className="animate-spin h-4 w-4" />
          <span className="ml-2">Logging in...</span>
        </>
      )}
    </Button>
  );
}

export default function LoginForm({}: {}) {
  const [state, formAction] = useFormState(login, null);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            // ref={formRef}
            action={formAction}
            // onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
            className="space-y-4"
          >
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
                    />
                  </FormControl>
                  {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton />
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/registration" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
