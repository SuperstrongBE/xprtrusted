"use client";

import {OnboardingStepper} from "@/components/03_organisms/onboarding-stepper/onboarding-stepper";
import {useIsWebView} from "@/hooks/useWebview";

export default function Home() {
  const isWebview = useIsWebView();
  return (
    <>
      <OnboardingStepper></OnboardingStepper>
      <p>{isWebview ? "Webview" : "Not webview"}</p>
    </>
    // <ButtonTest></ButtonTest>
  );
}
