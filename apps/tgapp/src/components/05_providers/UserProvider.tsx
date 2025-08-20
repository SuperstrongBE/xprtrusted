"use client";

import {useIsWebView} from "@/hooks/useWebview";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// Define the shape of your context data if needed.
// In this example, we're using an empty object.
interface TrustifyContextType {
  userState?: UserState;
  setUserState: (userState: UserState) => void;
}

// Create the context with an UserProvider object as the default value.
export const TrustifyProviderContext = createContext<TrustifyContextType>({
  setUserState: (_: UserState) => {
    console.log("setUserState", _);
  },
});

// Define the props for the provider component.
interface UserProviderProviderProps {
  children: ReactNode;
}

export type UserState =
  | "prepare"
  | "start"
  | "connect"
  | "verify"
  | "link"
  | "trusted"
  | "processing"
  | "webview";

// Create the provider component.
export const TrustifyProvider: FC<UserProviderProviderProps> = ({children}) => {
  // The provider can pass down additional state or methods in the value.
  // Right now, we are providing an UserProvider object.

  const [userState, setUserState] = useState<UserState>("prepare");
  const {isWebView, context} = useIsWebView();

  const providerValue: TrustifyContextType = useMemo(() => {
    return {
      userState,
      setUserState,
    };
  }, [userState]);

  useEffect(() => {
    if (isWebView && context === "webview") {
      setUserState("webview");
      console.log("webview");
    } else {
      setUserState("prepare");
    }
  }, [setUserState, isWebView]);

  return (
    <TrustifyProviderContext.Provider value={providerValue}>
      {children}
    </TrustifyProviderContext.Provider>
  );
};

export const useTrustifyContext = () => {
  if (!TrustifyProviderContext) throw new Error("Need a UserProvider context");
  return useContext(TrustifyProviderContext);
};
