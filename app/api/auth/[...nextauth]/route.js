import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
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
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
