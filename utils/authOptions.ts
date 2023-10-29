import { AuthOptions } from "next-auth";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const match = await bcrypt.compare(password, user.password);

          if (!match) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error:", error);
        }
        return;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    // maxAge: 3 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
  },
};
