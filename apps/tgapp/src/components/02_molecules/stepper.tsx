"use client";
import classNames from "classnames";

type StepperProps = React.HTMLAttributes<HTMLDivElement> & {
  maxSteps: number;
  activeStep: number;
};
export const Stepper: React.FunctionComponent<StepperProps> = ({
  className,
  maxSteps,
  activeStep
}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
  });


  return (
    <div className={`${rootClasses}`}>
      <div
        className={`relative flex gap-3`}
        
      >
        {new Array(maxSteps).fill(null).map((_, index) => (
          <StepperItem  active={index<=activeStep} key={index}></StepperItem>
        ))}
      </div>
    </div>
  );
};

type StepperItemProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean,
};
export const StepperItem: React.FunctionComponent<StepperItemProps> = ({
  active,
  className
}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
    'relative': true,
    
    'bg-black': true,
    'opacity-30': !active,
    'w-20 h-2 rounded-full':true
    
  });
  return (
    <div className={`${rootClasses}`}>
    
      
    </div>
  );
};
