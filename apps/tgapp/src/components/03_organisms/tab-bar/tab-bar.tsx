"use client";
import {
  UserState,
  useTrustifyContext,
} from "@/components/05_providers/UserProvider";
import classNames from "classnames";
import {motion} from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import { useXPRN } from "xprnkit";
type TabBarProps = React.HTMLAttributes<HTMLDivElement> & {};
export const TabBar: React.FunctionComponent<TabBarProps> = ({className}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
    "w-full flex justify-center": true,
  });

  const { userState } = useTrustifyContext();
  const { profile } = useXPRN();

  const containerVariants = {
    open: {
      width: "100%",
      height: 80,
      transform: "translateY(0%)",
      transition: {
        width: {delay: 0.2, duration: 0.2, type: "circInOut"},
        transform: {delay: 0, duration: 0.3, type: "circInOut"},
      },
    },
    close: {
      width: 80,
      height: 80,
      transform: "translateY(50%)",
      transition: {
        width: {delay: 0.1, duration: 0.2, type: "circInOut"},
        transform: {delay: 0, duration: 0.3, type: "circInOut"},
      },
    },
  };

  const avatarVariants = {
    open: {
      borderRadius:0,
      scale: 1,
    },
    close: {
      borderRadius:200,
      scale: 0,
    },
    trusted: {
      borderRadius:200,
      scale: 1,
    },
  };

  const avatarVariantState = useMemo(() => {
    
    if(profile && profile.avatar!=="" && userState != "trusted") return "open"
    if(profile && profile.avatar!=="" && userState == "trusted") return "trusted"
    return "close"


  },[profile,userState])

  

  return (
    <div className={`${rootClasses}`}>
      <motion.div
        variants={containerVariants}
        initial="close"
        animate={userState=="trusted" ? "open" : "close"}
        className="tab-bar bg-black flex justify-center items-center"
      >
        <div className="w-20 h-20 relative flex justify-center items-center">
          <span className="text-5xl font-bold">M</span>
          
          <motion.div
            variants={avatarVariants}
            initial="close"
            animate={avatarVariantState}
            layout
            className="absolute left-2 top-2 right-2 bottom-2 overflow-hidden">
            
             <Image alt="" width={64} height={64} src={profile ? `data:image/png;base64, ${profile && profile.avatar}` :""}></Image>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
