"use client";
import {OnboardingDrawer} from "@/components/03_organisms/onboarding-drawer/onboarding-drawer";
import {TrustifyProvider} from "@/components/05_providers/UserProvider";
import {Geist, Geist_Mono} from "next/font/google";
import {XPRNProvider} from "xprnkit";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <TrustifyProvider>
          <XPRNProvider
            config={{
              endpoints: ["https://testnet.rockerone.io"],
              chainId:
                "71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd",
              apiMode: "mainnet",
              dAppName: "HyperFold",
              requesterAccount: "rockeronebp",
            }}
          >
            <OnboardingDrawer className="flex h-dvh relative">
              {children}
            </OnboardingDrawer>
          </XPRNProvider>
        </TrustifyProvider>
      </body>
    </html>
  );
}
