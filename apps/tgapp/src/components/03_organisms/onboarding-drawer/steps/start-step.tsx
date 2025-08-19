"use client";
import {Button} from "@/components/button";
import classNames from "classnames";
type StartStepProps = React.HTMLAttributes<HTMLDivElement> & {
  onStepComplete: () => void;
};
export const StartStep: React.FunctionComponent<StartStepProps> = ({
  children,
  className,
  onStepComplete,
}) => {
  const rootClasses = classNames({
    "grid grid-cols-1 gap-5": true,
    [`${className}`]: className,
  });

  return (
    <div className={`${rootClasses}`}>
      <h2 className="text-2xl font-bold text-black">
        Armed with your WebAuth wallet, complete the process and get access to
        exclusive content
      </h2>
      <Button onClick={onStepComplete}>Start your quest</Button>
    </div>
  );
};
