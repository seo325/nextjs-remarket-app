import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
export const authOptions :NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!
        }),CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: 'Username1111', type: 'text' ,placeholder:'dddd' },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = {id : "1", name :"jeong " ,email: "seohwa0325@naver.com"}
                if(user) {
                    return user
                }else {
                    return null
                }
            //     if (!credentials?.email || !credentials?.password) {
            //         throw new Error('Invalid credentials');
            //     }

            //     const user = await prisma.user.findUnique({
            //         where: {
            //             email: credentials.email
            //         }
            //     });

            //     if (!user || !user?.hashedPassword) {
            //         throw new Error('Invalid credentials');
            //     }

            //     const isCorrectPassword = await bcrypt.compare(
            //         credentials.password,
            //         user.hashedPassword
            //     );

            //     if (!isCorrectPassword) {
            //         throw new Error('Invalid credentials');
            //     }

            //     return user;
            // }
        }
    }
    )
    ],session :{
        strategy : 'jwt'
    },
     jwt: {
        secret: 'secret',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {

        async jwt({ token, user }) {

            console.log(token)
            console.log(user)

            return { ...token, ...user }
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        }
    },
};


export default NextAuth(authOptions)