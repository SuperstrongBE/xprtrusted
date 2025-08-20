"use client";

import {OnboardingStepper} from "@/components/03_organisms/onboarding-stepper/onboarding-stepper";
import {useIsWebView} from "@/hooks/useWebview";

export default function Home() {
  const {isWebView, context} = useIsWebView();
  return (
    <>
      <div
        className="flex flex-col gap-4 p-4 bg-red-500 rounded-lg"
        onClick={() => {
          window.open("http://metal-quest-tg-app.vercel.app", "_blank");
        }}
      >
        <p>Hey open this in pure browser</p>
      </div>
      <OnboardingStepper></OnboardingStepper>
      <p>{isWebView && context === "browser" ? "browser" : "webview"}</p>
      <p>{context}</p>
    </>
    // <ButtonTest></ButtonTest>
  );
}
