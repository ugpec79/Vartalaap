import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "877971644707-q1mn0tclnrb6o5tdmoqett8vveiks9f8.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  secret:"abc"
}
export default NextAuth(authOptions)