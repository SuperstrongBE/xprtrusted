"use client";
import {OnboardingDrawer} from "@/components/03_organisms/onboarding-drawer/onboarding-drawer";
import {OnboardingStepper} from "@/components/03_organisms/onboarding-stepper/onboarding-stepper";

export default function Home() {
  return (
    <>
      <OnboardingDrawer className="flex h-dvh relative">
        <OnboardingStepper></OnboardingStepper>
      </OnboardingDrawer>
    </>
  );
}
