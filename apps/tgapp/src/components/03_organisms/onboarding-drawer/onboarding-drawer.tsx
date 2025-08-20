"use client";
import {useTrustifyContext} from "@/components/05_providers/UserProvider";
import classNames from "classnames";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import {AnimatedGradient} from "../animated-gradient/animated-gradient";
import {TabBar} from "../tab-bar/tab-bar";
import {ConnectStep} from "./steps/connect-step";
import {LinkStep} from "./steps/link-step";
import {LoadingStep} from "./steps/loading-step";
import {PrepareStep} from "./steps/prepare-step";
import {StartStep} from "./steps/start-step";
import {VerifyStep} from "./steps/verify-step";
import {Button} from "@/components/button";
import {useXPRN} from "xprnkit";

// Heading variants to animate each header in/out
const headingVariants = {
  initial: {y: 0, opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {opacity: 0},
};

// Drawer container variants to collapse it when "trusted"
const drawerContainerVariants = {
  open: {
    height: "auto",
    opacity: 1,
  },
  closed: {
    paddingTop: 0,
    paddingBottom: 0,
    height: 80,
    opacity: 1,
  },
};

export const OnboardingDrawer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({children, className}) => {
  const {userState, setUserState} = useTrustifyContext();
  const {disconnect} = useXPRN();

  // Let the grid rows adjust automatically.
  const rootClasses = classNames(
    className,
    "grid grid-rows-[1fr_min-content] gap-4 z-10"
  );

  return (
    <>
      {/* Animated gradient in the background */}
      <AnimatedGradient
        className="absolute top-0 bottom-0 left-0 right-0 z-0"
        variant={userState}
      />
      <motion.div
        className={rootClasses}
        animate
        layout
        transition={{layout: {duration: 0.3, ease: "circInOut"}}}
      >
        <LayoutGroup>
          {/* Content container */}
          <motion.div
            className="flex justify-center items-center overflow-hidden"
            layout="position"
            animate
            transition={{layout: {duration: 0.4, ease: "circInOut"}}}
          >
            {children}
          </motion.div>

          {/* Drawer container */}
          <motion.div
            layout
            variants={drawerContainerVariants}
            initial="open"
            animate={userState === "trusted" ? "open" : "open"}
            transition={{
              layout: {duration: 0.4, ease: "circInOut"},
              opacity: {duration: 0.1},
            }}
            className="drawer grid grid-cols-1 grid-rows-[min-content_1fr]"
          >
            {/* The tab bar will crossfade between two versions */}

            <motion.div
              key="tab-bar"
              className="tab-bar flex flex-col w-full justify-center items-center z-10"
            >
              <TabBar />
            </motion.div>

            {/* AnimatePresence for the drawer’s content */}
            <motion.div className="bg-amber-50 px-5 pb-5 pt-15 w-full  relative">
              <AnimatePresence mode="wait">
                {userState === "prepare" && (
                  <motion.div
                    key="prepare"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="grid gap-5 grid-cols-1"
                    layoutId="onboaring"
                    layout="position"
                  >
                    <PrepareStep />
                  </motion.div>
                )}
                {userState === "processing" && (
                  <motion.div
                    key="processing"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="grid gap-5 grid-cols-1"
                    layoutId="onboaring"
                    layout="position"
                  >
                    <LoadingStep />
                  </motion.div>
                )}
                {userState === "start" && (
                  <motion.div
                    key="start"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="grid gap-5 grid-cols-1"
                    layoutId="onboaring"
                    layout="position"
                  >
                    <StartStep onStepComplete={() => setUserState("connect")} />
                  </motion.div>
                )}
                {userState === "connect" && (
                  <motion.div
                    key="connect"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="grid gap-5 grid-cols-1"
                    layoutId="onboaring"
                    layout="position"
                  >
                    <ConnectStep
                      onStepComplete={() => setUserState("verify")}
                    />
                  </motion.div>
                )}
                {userState === "verify" && (
                  <motion.div
                    key="verify"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="grid gap-5 grid-cols-1"
                    layoutId="onboaring"
                    layout="position"
                  >
                    <VerifyStep onStepComplete={() => setUserState("link")} />
                  </motion.div>
                )}
                {userState === "link" && (
                  <motion.div
                    key="link"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="grid gap-5 grid-cols-1"
                    layoutId="onboaring"
                    layout="position"
                  >
                    <LinkStep onStepComplete={() => setUserState("prepare")} />
                  </motion.div>
                )}
                {userState === "trusted" && (
                  <motion.div
                    key="link"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="grid gap-5 grid-cols-1"
                    layoutId="onboaring"
                    layout="position"
                  >
                    <Button
                      onClick={() => {
                        disconnect();
                        window.close();
                      }}
                    >
                      Close window
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </>
  );
};
