import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Twitter({
      clientId: process.env.AUTH_TWITTER_ID!,
      clientSecret: process.env.AUTH_TWITTER_SECRET!,
    }),
  ],
  callbacks: {
    async session({session, token}) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({token, account, profile}) {
      if (account && profile) {
        token.accessToken = account.oauth_token;
        token.accessTokenSecret = account.oauth_token_secret;
        token.twitterProfile = profile;
      }
      return token;
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
});
