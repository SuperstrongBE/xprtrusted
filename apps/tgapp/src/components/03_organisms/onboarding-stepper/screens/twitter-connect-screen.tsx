"use client";

import {useTwitterContext} from "@/components/05_providers/TwitterProvider";
import {Button} from "@/components/button";
import {LucideTwitter, LucideLoader2, LucideX} from "lucide-react";

export const TwitterConnectScreen: React.FunctionComponent = () => {
  const {config, isLoading, isConnected, user, error, connect} =
    useTwitterContext();

  if (!config.enabled) {
    return null;
  }

  return (
    <>
      <div className="relative w-30 aspect-square flex items-center justify-center mb-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-0">
          <div className="w-30 aspect-square bg-black rounded-full opacity-30"></div>
        </div>
        <div className="z-10">
          {isConnected && user ? (
            <div className="w-30 aspect-square rounded-full bg-[#1DA1F2] flex items-center justify-center">
              <LucideX className="w-16 h-16 fill-white stroke-white" />
            </div>
          ) : (
            <LucideX className="w-16 h-16 stroke-[#1DA1F2]" />
          )}
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">
        {isConnected ? "Twitter Connected" : "Connect Twitter"}
      </h1>

      <div className="flex flex-col mb-8">
        {isConnected && user ? (
          <>
            <span className="text-xl text-center">
              Connected as @{user.username}
            </span>
            <span className="text-lg text-center text-gray-400">
              {user.name}
            </span>
          </>
        ) : (
          <>
            <span className="text-xl text-center">
              Link your Twitter account to verify
            </span>
            <span className="text-xl text-center">
              your social presence and unlock rewards
            </span>
          </>
        )}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-500/20 rounded-lg">
          <span className="text-red-400 text-sm">{error}</span>
        </div>
      )}

      {!isConnected && (
        <Button
          onClick={connect}
          className="w-full bg-[#1DA1F2] hover:bg-[#1A8CD8] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {isLoading ? (
            <>
              <LucideLoader2 className="w-5 h-5 mr-2 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <LucideTwitter className="w-5 h-5 mr-2" />
              Connect Twitter
            </>
          )}
        </Button>
      )}
    </>
  );
};
