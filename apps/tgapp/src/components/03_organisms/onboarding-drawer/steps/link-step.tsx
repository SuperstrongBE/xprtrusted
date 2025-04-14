"use client";
import { useTrustifyContext } from "@/components/05_providers/UserProvider";
import {Button} from "@/components/button";
import useAppUser from "@/hooks/tg-user";
import { getSHA256Hash } from "@/utils/hash.utils";
import { wait } from "@/utils/wait.utils";
import {  TransactResult } from "@proton/link";
import classNames from "classnames";
import { useCallback } from "react";
import { useXPRN } from "xprnkit";
type LinkStepProps = React.HTMLAttributes<HTMLDivElement> & {
  onStepComplete: () => void;
};
export const LinkStep: React.FunctionComponent<LinkStepProps> = ({
  children,
  className,
  onStepComplete,
}) => {
  const rootClasses = classNames({
    "grid grid-cols-1 gap-5":true,
    [`${className}`]: className,
  });

  const { session } = useXPRN();
  const {telegramUser} = useAppUser();
  const {setUserState} = useTrustifyContext()
  
  const pushTrustify = useCallback(
    () => {
      if (session && session.auth.actor && telegramUser && telegramUser.id) {
        (async () => {
          setUserState('processing');
          const hash = await getSHA256Hash(telegramUser.id.toString());
          // TODO raise an error if hash is null
          
          const trustifyAction = {
            account: "xprtrustify",
            name: "acc.trustify",
            authorization: [
              {
                actor: session.auth.actor.toString(),
                permission: session.auth.permission.toString(),
              },
            ],
            data: {
              account: session.auth.actor.toString(),
              hash: hash,
            },
          };

          await session
            .transact(
              {actions: [trustifyAction]},
              {broadcast: true}
            )
            .then((tx: TransactResult) => {
              //TODO contact API to verify auth + push user to db
              console.log(tx);
              
              wait(2000).then(()=>{onStepComplete()})
            });
        })();
      }
    },
    [telegramUser,session]
  );


  return (
    <div className={`${rootClasses}`}>
      <h2 className="text-2xl font-bold text-black">
        Now let’s link your <b>{ telegramUser?.username}</b> Telegram account with your
      <b>{session && session.auth.actor.toString() } on XPR Network</b>
      </h2>
      <Button onClick={pushTrustify}>Verify @rockeronebp</Button>
    </div>
  );
};
