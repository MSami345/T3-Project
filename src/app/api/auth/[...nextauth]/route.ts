import NextAuth from "next-auth"
import { option } from "./options"
import type { AuthorizationEndpointHandler } from "next-auth/providers/oauth"

const handler = NextAuth(option) as AuthorizationEndpointHandler

export { handler as GET, handler as POST }