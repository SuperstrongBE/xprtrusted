import React from "react";
import { motion } from "framer-motion";
import { UserState } from "@/components/05_providers/UserProvider";
import classNames from "classnames";

interface GradientDivProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: UserState;
  children?: React.ReactNode;
}

const gradientVariants = {
  prepare: {
    background: "linear-gradient(45deg, #2c3e50, #3498db)",
  },
  start: {
    background: "linear-gradient(45deg, #e74c3c, #f1c40f)",
  },
  connect: {
    background: "linear-gradient(45deg, #1abc9c, #16a085)",
  },
  verify: {
    background: "linear-gradient(45deg, #9b59b6, #8e44ad)",
  },
  link: {
    background: "linear-gradient(45deg, #f39c12, #d35400)",
  },
  trusted: {
    background: "linear-gradient(45deg, #27ae60, #2ecc71)",
  },
};

export const AnimatedGradient: React.FC<GradientDivProps> = ({
  variant,
  className,
  children,
  style,
  ...rest
}) => {

  const rootClasses = classNames({
    
    [`${className}`]: className,
  });

  return (
    <motion.div
    className={className}
      // Apply the variants to this motion.div so that the background style updates
      variants={gradientVariants}
      initial={variant}
      animate={variant}
      // Customize the transition if desired (keep in mind gradients are not smoothly interpolated)
      transition={{ duration: 0.5 }}
      style={{
        
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};
