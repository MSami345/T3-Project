import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import { text } from "stream/consumers";


export const option: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_CLIENTID !,
            clientSecret: process.env.NEXTAUTH_CLIENTSECRET!
        }),
        GoogleProvider(
            {
                clientId: process.env.NEXTAUTH_CLIENTID!,
                clientSecret: process.env.NEXTAUTH_CLIENTSECRET!
            }
        ),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'username:', type: "text", placeholder: 'enter unique username'
                },
                password: {
                    label: 'password:', type: "password", placeholder: 'enter password'
                }
            }, async authorize(credentials) {
                const user = { id: '42', name: 'sami', password: 'nextAuth' }
                if (credentials?.username == user.name && credentials.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}