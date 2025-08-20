import Image from "next/image";
import {LucideShieldCheck} from "lucide-react";
import {useXPRN} from "xprnkit";

export const CompleteScreen: React.FunctionComponent = () => {
  const {profile} = useXPRN();
  return (
    <>
      <div className="relative w-30 aspect-square flex  items-center justify-center mb-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-0">
          <div className="w-30 aspect-square bg-black rounded-full opacity-30"></div>
        </div>
        <div className="z-10">
          {profile && profile.avatar ? (
            <Image
              alt="avatar"
              width={120}
              height={120}
              src={`data:image/png;base64,${profile?.avatar}`}
              className="w-30 aspect-square rounded-full"
            />
          ) : (
            <LucideShieldCheck className="w-16 h-16 stroke-white" />
          )}
        </div>
      </div>
      <h1 className="text-3xl font-bold">Account trusted</h1>
      <div className="flex flex-col ">
        <span className="text-xl text-center">The process now complete.</span>
        <span className="text-xl text-center">
          Your destiny bound on-chain, discreet.
        </span>
      </div>
    </>
  );
};
