import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "./lib/utils";
import { authConfig } from "./authconfig";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("wrong Credentials");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("wrong Credentials");
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token,user}){
      if(user){
        token.username=user.username
        token.img=user.img
      }
      return token
    },
    async session({session,token}){
      if(token){
        session.user.username=token.username
        session.user.img=token.img
      }
      return session
    },
  }
});
