import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "@/server-actions/user";
import { UserDocument } from "@/models/user";

export const BASE_PATH = "/login";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<UserDocument | null> => {
        try {
          const user = await getUser(
            credentials.email as string,
            credentials.password as string
          );

          if (!user) {
            throw new Error("User not found.");
          }
          console.log("User found", user);
          return user;
        } catch (error) {
          console.log("Error in authorize", error);
          return null;
        }
      },
    }),
  ],
});
