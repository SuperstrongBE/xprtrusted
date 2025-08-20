"use client";
import {Stepper} from "@/components/02_molecules/stepper";
import {useTrustifyContext} from "@/components/05_providers/UserProvider";
// import useAppUser from "@/hooks/tg-user";
import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import {LucideLink, LucideLock, LucideShieldUser} from "lucide-react";
import {useMemo} from "react";
import {MessageScreen} from "./screens/message-screen";
import {ProcessingScreen} from "./screens/processing-screen";
import {useXPRN} from "xprnkit";
import {CompleteScreen} from "./screens/complete-screen";

type OnboardingStepperProps = React.HTMLAttributes<HTMLDivElement> & {};
export const OnboardingStepper: React.FunctionComponent<
  OnboardingStepperProps
> = ({className}) => {
  const {userState} = useTrustifyContext();
  // const {telegramUser} = useAppUser();
  const {session} = useXPRN();
  const rootClasses = classNames({
    "w-full h-full flex flex-col justify-center items-center gap-2 p-4": true,
    [`${className}`]: className,
  });

  const stepIndex = useMemo(() => {
    if (userState == "connect") return 1;
    if (userState == "verify") return 2;
    if (userState == "link") return 3;
    if (userState == "trusted") return 4;
    return 0;
  }, [userState]);

  return (
    <div className={`${rootClasses}`}>
      <motion.div className="flex flex-col gap-4 w-full flex-grow  items-stretch justify-stretch h-full">
        {userState && stepIndex > 0 && stepIndex < 3 && (
          <motion.div
            transition={{layout: {duration: 0.5, ease: "easeInOut"}}}
            className="flex flex-col gap-2"
          >
            <Stepper maxSteps={3} activeStep={stepIndex}></Stepper>
          </motion.div>
        )}
        <AnimatePresence mode="wait">
          {userState && userState == "prepare" && (
            <motion.div className="flex flex-col flex-grow  justify-center items-center  gap-3">
              <ProcessingScreen message="Checking your account..." />
            </motion.div>
          )}
          {userState && userState == "processing" && (
            <motion.div className="flex flex-col flex-grow  justify-center items-center  gap-3">
              <ProcessingScreen />
            </motion.div>
          )}
          {userState && userState == "connect" && (
            <motion.div className="flex flex-col flex-grow  justify-center items-center  gap-3">
              <MessageScreen
                title="Let's connect"
                message={["HyperFold links you in.", "WebAuth secures within."]}
                icon={<LucideLock className="w-16 h-16 stroke-white" />}
              />
            </motion.div>
          )}
          {userState && userState == "verify" && (
            <motion.div className="flex flex-col flex-grow  justify-center items-center  gap-3">
              <MessageScreen
                title="Identity proof"
                message={[
                  "Front meets back-end true.",
                  "Crypto handshake proves it’s you.",
                ]}
                icon={<LucideShieldUser className="w-16 h-16" />}
              />
            </motion.div>
          )}
          {userState && userState == "link" && (
            <motion.div className="flex flex-col flex-grow  justify-center items-center  gap-3">
              <MessageScreen
                title="Trusting your account"
                message={[
                  "Now let’s make it true",
                  `Link your account with ${session?.auth.actor.toString()} on XPR too.`,
                ]}
                icon={<LucideLink className="w-16 h-16 stroke-white" />}
              />
            </motion.div>
          )}
          {userState && userState == "trusted" && (
            <motion.div className="flex flex-col flex-grow  justify-center items-center  gap-3">
              <CompleteScreen />
            </motion.div>
          )}
          {/* <h1 className="text-4xl font-bold">Hey, {telegramUser?.username}</h1> */}
          {userState && userState == "start" && (
            <motion.h1
              transition={{layout: {duration: 0.5, ease: "easeInOut"}}}
              className="text-4xl font-bold"
            >
              It’s time to start an epic quest
            </motion.h1>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
