"use client";
import classNames from "classnames";
import {useCallback} from "react";
type StepperProps = React.HTMLAttributes<HTMLDivElement> & {
  maxSteps: number;
};
export const Stepper: React.FunctionComponent<StepperProps> = ({
  className,
  maxSteps,
}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
  });

  const getGridColumns = useCallback(() => {
    return new Array(maxSteps)
      .fill(null)
      .map((_, index) => {
        if (index == maxSteps - 1) return "min-content";
        return "min-content_1fr";
      })
      .join("_");
  }, [maxSteps]);

  return (
    <div className={`${rootClasses}`}>
      <div
        className={`justify-between relative flex`}
        
      >
        {new Array(maxSteps).fill(null).map((_, index) => (
          <StepperItem first={index==0} last={index==maxSteps-1} key={index}>{ index+1}</StepperItem>
        ))}
      </div>
    </div>
  );
};

type StepperItemProps = React.HTMLAttributes<HTMLDivElement> & {
  first?:boolean
  last?: boolean,
};
export const StepperItem: React.FunctionComponent<StepperItemProps> = ({
  children,
  className,
  first,
  last
}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
    'grow': !last,
    'relative flex': true,
    'items-center':true,
    'after:content-[""] after:absolute after:h-0.5  after:bg-purple-500 ':!last,
    'after:left-0 after:right-0 ':true,
    'justify-start':true,
    
  });
  return (
    <div className={`${rootClasses}`}>
      
        <div
          className={`z-10 w-10 h-10 aspect-square rounded-full bg-purple-500 flex justify-center items-center relative`}
        >
          {children}
        </div>
      
    </div>
  );
};
