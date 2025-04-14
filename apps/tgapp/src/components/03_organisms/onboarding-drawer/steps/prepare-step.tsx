"use client";
import {useTrustifyContext} from "@/components/05_providers/UserProvider";
import {Button} from "@/components/button";
import useAppUser from "@/hooks/tg-user";
import { wait } from "@/utils/wait.utils";
import classNames from "classnames";
import { useEffect } from "react";
type PrepareStepProps = React.HTMLAttributes<HTMLDivElement> & {
  
};
export const PrepareStep: React.FunctionComponent<PrepareStepProps> = ({
  className,
  
}) => {

  const { trustifyUser,fetchTrustifyUser,telegramUser } = useAppUser()
  const {setUserState} = useTrustifyContext()

  const rootClasses = classNames({
    "grid grid-cols-1 gap-5": true,
    [`${className}`]: className,
  });

  useEffect(() => {
    if (!telegramUser) return;
    if (trustifyUser) {
      console.log('trused')
      wait(3000).then(() => {
        setUserState("trusted");
      })
      return;
    }
    if (!trustifyUser) {
      fetchTrustifyUser()
      .then((result) => {
        console.log('trused after fetch',result)
        wait(3000).then(() => {
          if (result) {
            setUserState("trusted");
          } else {
            setUserState("start");
          }
        })
      })
      .catch(() => {
        console.log('untrused')
        wait(3000).then(() => {
          setUserState("start");
        })
        });
    }
  },[telegramUser])

  return (
    <div className={`${rootClasses}`}>
      <h2 className="text-2xl font-bold text-black text-center">
                    Preparing your Metal Quest experience...
                  </h2>
    </div>
  );
};
