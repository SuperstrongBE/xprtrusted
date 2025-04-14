import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname:"https://bloks.io/"
    }]
  }
};

export default nextConfig;
