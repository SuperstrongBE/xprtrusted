"use client";
import classNames from "classnames";
import {motion} from "framer-motion";

type StepperProps = React.HTMLAttributes<HTMLDivElement> & {
  maxSteps: number;
  activeStep?: number;
};
export const Stepper: React.FunctionComponent<StepperProps> = ({
  className,
  maxSteps,
  activeStep,
}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
    "w-full": true,
  });

  return (
    <div className={`${rootClasses}`}>
      <div className={`relative flex gap-3 w-full`}>
        {new Array(maxSteps).fill(null).map((_, index) => (
          <StepperItem
            active={index + 1 <= (activeStep ?? 0)}
            key={index}
          ></StepperItem>
        ))}
      </div>
    </div>
  );
};

type StepperItemProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
};
export const StepperItem: React.FunctionComponent<StepperItemProps> = ({
  active,
  className,
}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
    relative: true,
    "flex-grow": true,
    "bg-black": true,
    "opacity-30": !active,
    "h-2 rounded-full": true,
  });
  return <motion.div className={`${rootClasses}`}></motion.div>;
};
