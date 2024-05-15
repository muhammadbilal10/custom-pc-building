import { BASE_PATH, auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
// import Navbar from "../layout/Navbar";

export async function AuthWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
    };
  }
  return (
    <SessionProvider>
      <>{children}</>
    </SessionProvider>
  );
}
