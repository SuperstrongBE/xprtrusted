"use client";
import {useTrustifyContext} from "@/components/05_providers/UserProvider";
import {Button} from "@/components/button";
import classNames from "classnames";
type LoadingStepProps = React.HTMLAttributes<HTMLDivElement> & {
  
};
export const LoadingStep: React.FunctionComponent<LoadingStepProps> = ({
  children,
  className,
  
}) => {
  const rootClasses = classNames({
    "grid grid-cols-1 gap-5": true,
    [`${className}`]: className,
  });

  return (
    <div className={`${rootClasses}`}>
      <h2 className="text-2xl font-bold text-black text-center">
        Loading...
      </h2>
      
    </div>
  );
};
