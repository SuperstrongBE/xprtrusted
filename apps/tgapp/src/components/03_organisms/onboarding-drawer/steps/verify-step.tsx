"use client";

import { useTrustifyContext } from "@/components/05_providers/UserProvider";
import {Button} from "@/components/button";
import useAppUser from "@/hooks/tg-user";
import { registerTrusted } from "@/services/register-trusted";
import { getSHA256Hash } from "@/utils/hash.utils";
import { wait } from "@/utils/wait.utils";
import { ResolvedTransaction, TransactResult } from "@proton/link";
import classNames from "classnames";
import { useCallback } from "react";
import { useXPRN } from "xprnkit";
type VerifyStepProps = React.HTMLAttributes<HTMLDivElement> & {
  onStepComplete: () => void;
};
export const VerifyStep: React.FunctionComponent<VerifyStepProps> = ({
  children,
  className,
  onStepComplete,
}) => {
  const rootClasses = classNames({
    "grid grid-cols-1 gap-5":true,
    [`${className}`]: className,
  });

  const { session } = useXPRN();
  const { telegramUser } = useAppUser();
  const {setUserState} = useTrustifyContext()
  
  const verifyIdentity = useCallback(
    () => {
      if (session && session.auth.actor && telegramUser && telegramUser.id) {
        (async () => {
          setUserState('processing')
          const hash = await getSHA256Hash(telegramUser.id.toString());
          // TODO raise an error if hash is null
          const generateAuthAction = {
            account: "proton.wrap",
            name: "generateauth",
            authorization: [
              {
                actor: session.auth.actor.toString(),
                permission: session.auth.permission.toString(),
              },
            ],
            data: {
              protonAccount: session.auth.actor.toString(),
              time: new Date().toISOString().slice(0, -1),
            },
          };
          

          await session
            .transact(
              {actions: [generateAuthAction]},
              {broadcast: false}
            )
            .then((tx: TransactResult) => {
              
              console.log(tx);
              registerTrusted(
                {
                  signer: {
                    actor: session.auth.actor.toString(),
                    permission: session.auth.permission.toString(),
                    public_key: session.publicKey.toString(),
                  },
                  transaction: tx.resolvedTransaction as ResolvedTransaction,
                  signatures: tx.signatures,
                },
                {
                  actor: session.auth.actor.toString(),
                  hash: hash!,
                  userId: telegramUser.id,
                }
              ).then(() => {
                //TODO manage error state
                wait(2000).then(()=>{onStepComplete()})
                
              })
            });
        })();
      }
    },
    [telegramUser,session]
  );


  return (
    <div className={`${rootClasses}`}>
      <h2 className="text-2xl font-bold text-black">
        Great, now we need to verify your <b>{session && session.auth.actor.toString() }</b> account.
      </h2>
      <Button onClick={verifyIdentity}>Verify @rockeronebp</Button>
    </div>
  );
};
