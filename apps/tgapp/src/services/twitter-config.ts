import { TwitterConfig } from "@/interfaces/twitter";

export const getTwitterConfig = (): TwitterConfig => {
  return {
    enabled: true,
    apiKey: process.env.NEXT_PUBLIC_TWITTER_API_KEY,
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/twitter/callback`,
  };
};