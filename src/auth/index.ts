import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "@/server-actions/user";
import { UserDocument } from "@/models/user";

export const BASE_PATH = "/";

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
            console.log("User not found");
            throw new Error("User not found.");
          }
          return user;
        } catch (error) {
          console.log("Error in authorize", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});
