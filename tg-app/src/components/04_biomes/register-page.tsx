"use client";
import useAppUser from "@/hooks/tg-user";
import {getSHA256Hash} from "@/utils/hash.utils";
import classNames from "classnames";
import {useCallback, useEffect, useState} from "react";
import {LinkSession, useXPRN} from "xprnkit";
import {Button} from "../button";

import {registerTrusted} from "@/services/register-trusted";
import {Stepper} from "../02_molecules/stepper";
import { wait } from "@/utils/wait.utils";
import { redirect } from "next/navigation";


type RegisterPageProps = React.HTMLAttributes<HTMLDivElement> & {};
export const RegisterPage: React.FunctionComponent<RegisterPageProps> = ({
  className,
  ...rest
}) => {
  const rootClasses = classNames({
    "grid grid-cols-1 gap-4 w-full": true,
    [`${className}`]: className,
  });

  const {connect,session} = useXPRN();
  const {telegramUser} = useAppUser();
  const [currentStep, setCurrentStep] = useState<number>();

  const pushTrustify = useCallback(
    () => {
      if (session && session.auth.actor && telegramUser && telegramUser.id) {
        (async () => {
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
            .then((tx: any) => {
              //TODO contact API to verify auth + push user to db
              console.log(tx);
              
              wait(2000).then(()=>{redirect('/')})
            });
        })();
      }
    },
    [telegramUser,session]
  );
  
  const verifyIdentity = useCallback(
    () => {
      if (session && session.auth.actor && telegramUser && telegramUser.id) {
        (async () => {
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
            .then((tx: any) => {
              
              console.log(tx);
              registerTrusted(
                {
                  signer: {
                    actor: session.auth.actor.toString(),
                    permission: session.auth.permission.toString(),
                    public_key: session.publicKey.toString(),
                  },
                  transaction: tx.resolvedTransaction,
                  signatures: tx.signatures,
                },
                {
                  actor: session.auth.actor.toString(),
                  hash: hash!,
                  userId: telegramUser.id,
                }
              ).then(() => {
                //TODO manage error state
                setCurrentStep(2)
              })
              //wait(2000).then(()=>{redirect('/')})
            });
        })();
      }
    },
    [telegramUser,session]
  );

  const connectHandler = useCallback(() => {
    console.log("After connect");
    connect(
      (session: LinkSession) => {
        console.log("connected", session);
        setCurrentStep(1);
        //if (session) pushTrustifyHandler(session);
      },
      () => {}
    );
    console.log("After connect");
  }, [connect, pushTrustify]);

  useEffect(() => {
    setCurrentStep(0);
  }, []);
  
  useEffect(() => {
    if (session)setCurrentStep(1);
  }, [session]);

  return (
    <>
      {telegramUser && (
        <div {...rest} className={`${rootClasses}`}>
          <h1 className="text-4xl font-bold">
            Welcome {telegramUser?.username}, start your MetalX Quest
          </h1>
          <p className="text-white">
              Link your TG and XPR Network account anonymously through XPRTrustify smart
              contract
            </p>
          <Stepper maxSteps={3}></Stepper>
          <div className="flex flex-col gap-3">
           
            {currentStep == 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-white">
                  First connect the XPR Network account you want to link
                </p>
                <Button onClick={connectHandler}>Connect with WebAuth</Button>
              </div>
            )}
            {currentStep == 1 && (
              <div className="flex flex-col gap-3">
                <p className="text-white">
                  Next, verify your account identity
                </p>

                <Button onClick={verifyIdentity}>Verify identity</Button>
              </div>
            )}
            {currentStep == 2 && (
              <div className="flex flex-col gap-3">
                <p className="text-white">
                  Finally, link you TG account with our smart contract
                </p>

                <Button onClick={pushTrustify}>Register your account</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
