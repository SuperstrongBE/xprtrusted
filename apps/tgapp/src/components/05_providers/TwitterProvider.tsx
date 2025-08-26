"use client";

import { TwitterConfig, TwitterUser, TwitterAuthState } from "@/interfaces/twitter";
import { getTwitterConfig } from "@/services/twitter-config";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface TwitterContextType extends TwitterAuthState {
  config: TwitterConfig;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export const TwitterContext = createContext<TwitterContextType>({
  config: { enabled: false },
  isLoading: false,
  isConnected: false,
  connect: async () => {},
  disconnect: async () => {},
});

interface TwitterProviderProps {
  children: ReactNode;
}

export const TwitterProvider: FC<TwitterProviderProps> = ({ children }) => {
  const [config] = useState<TwitterConfig>(getTwitterConfig());
  const { data: session, status } = useSession();
  const [authState, setAuthState] = useState<TwitterAuthState>({
    isLoading: false,
    isConnected: false,
  });

  useEffect(() => {
    if (status === "loading") {
      setAuthState(prev => ({ ...prev, isLoading: true }));
    } else if (status === "authenticated" && session?.user) {
      const twitterUser: TwitterUser = {
        id: session.user.id || "",
        username: session.user.name || "",
        name: session.user.name || "",
        profile_image_url: session.user.image || undefined,
      };
      
      setAuthState({
        isLoading: false,
        isConnected: true,
        user: twitterUser,
        error: undefined,
      });
    } else {
      setAuthState({
        isLoading: false,
        isConnected: false,
        user: undefined,
        error: undefined,
      });
    }
  }, [session, status]);

  const connect = async (): Promise<void> => {
    if (!config.enabled) {
      console.warn("Twitter connection is disabled in config");
      return;
    }

    setAuthState(prev => ({ ...prev, isLoading: true, error: undefined }));

    try {
      await signIn("twitter", { callbackUrl: "/" });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Failed to connect Twitter",
      }));
    }
  };

  const disconnect = async (): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Failed to disconnect Twitter",
      }));
    }
  };

  const providerValue: TwitterContextType = useMemo(() => ({
    config,
    ...authState,
    connect,
    disconnect,
  }), [config, authState]);

  return (
    <TwitterContext.Provider value={providerValue}>
      {children}
    </TwitterContext.Provider>
  );
};

export const useTwitterContext = () => {
  const context = useContext(TwitterContext);
  if (!context) {
    throw new Error("useTwitterContext must be used within TwitterProvider");
  }
  return context;
};