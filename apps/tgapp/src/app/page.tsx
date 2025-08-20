"use client";
import {OnboardingStepper} from "@/components/03_organisms/onboarding-stepper/onboarding-stepper";
import {useIsWebView} from "@/hooks/useWebview";

export default function Home() {
  const {isWebView, context} = useIsWebView();

  return (
    <>
      {isWebView && context === "browser" ? (
        <OnboardingStepper></OnboardingStepper>
      ) : (
        <div
          className="flex flex-col gap-4 p-4 bg-red-500 rounded-lg"
          onClick={() => {
            window.open("http://metal-quest-tg-app.vercel.app", "_blank");
          }}
        >
          <p>Start the trusting process on your browser</p>
        </div>
      )}
    </>
    // <ButtonTest></ButtonTest>
  );
}
