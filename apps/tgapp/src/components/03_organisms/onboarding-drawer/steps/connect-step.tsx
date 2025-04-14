"use client";
import { useTrustifyContext } from "@/components/05_providers/UserProvider";
import {Button} from "@/components/button";
import classNames from "classnames";
import {useCallback} from "react";
import {useXPRN} from "xprnkit";
type ConnectStepProps = React.HTMLAttributes<HTMLDivElement> & {
  onStepComplete: () => void;
};
export const ConnectStep: React.FunctionComponent<ConnectStepProps> = ({
  children,
  className,
  onStepComplete,
}) => {
  const rootClasses = classNames({
    "grid grid-cols-1 gap-5":true,
    [`${className}`]: className,
  });

  const { connect } = useXPRN();
  const {setUserState} = useTrustifyContext()

  const onConnect = useCallback(() => {
    setUserState('processing');
    connect(session => {
      if (session) onStepComplete();
    });
  }, [connect]);

  return (
    <div className={`${rootClasses}`}>
      <h2 className="text-2xl font-bold text-black">
        First, let’s connect your WebAuth wallet
      </h2>
      <Button onClick={onConnect}>Connect WebAuth</Button>
    </div>
  );
};
