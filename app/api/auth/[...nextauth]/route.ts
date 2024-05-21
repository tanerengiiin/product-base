import users from "@/lib/users";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials?.email || !credentials?.password) {
                    return null;
                }

                const foundUser = users.find((user) => user.email === credentials.email);
                if (!foundUser) {
                    return null
                }
                if (foundUser.password === credentials.password) {
                    return {
                        id: foundUser.username,
                        name: foundUser.fullName,
                        email: foundUser.email,
                        image: foundUser.profilePic,
                        username: foundUser.username,
                        role: foundUser?.role || 'user'
                    }
                }
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.role = user.role;
            };
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.username = token.username;
                session.user.role = token.role;
            };
            return session;
        }
    },
    pages: {
        signIn: '/auth/login',
    },
})

export { handler as GET, handler as POST }