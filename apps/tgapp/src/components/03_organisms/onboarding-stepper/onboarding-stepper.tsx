"use client";
import {Stepper} from "@/components/02_molecules/stepper";
import {useTrustifyContext} from "@/components/05_providers/UserProvider";
import useAppUser from "@/hooks/tg-user";
import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import { useMemo } from "react";
type OnboardingStepperProps = React.HTMLAttributes<HTMLDivElement> & {};
export const OnboardingStepper: React.FunctionComponent<
  OnboardingStepperProps
> = ({children, className}) => {
  const {userState} = useTrustifyContext();

  const rootClasses = classNames({
    "w-full flex flex-col justify-start gap-2": true,
    [`${className}`]: className,
  });

	const stepIndex = useMemo(() => {
		if (userState == 'connect') return 0;
		if (userState == 'verify') return 1;
		if (userState == 'link') return 2;
		return 0;
  },[userState]);

  return (
    <div className={`${rootClasses}`}>
      <motion.div>
        <h1 className="text-4xl font-bold">Hey, RockerzOne</h1>
        <AnimatePresence mode="wait">
          {userState && userState == "start" && (
            <motion.h1
              transition={{layout: {duration: 0.5, ease: "easeInOut"}}}
              className="text-4xl font-bold"
            >
              It’s time to start an epic quest
            </motion.h1>
          )}
          {userState && userState != "prepare" && userState != "start" && (
            <motion.div
              transition={{layout: {duration: 0.5, ease: "easeInOut"}}}
              className="flex flex-col gap-2"
            >
              <h2 className="text-2xl font-semibold">
                Your journey is just 3 step away
              </h2>
              <Stepper maxSteps={3} activeStep={stepIndex}></Stepper>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
