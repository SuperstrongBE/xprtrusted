"use client";
import useAppUser from "@/hooks/tg-user";

import React, {
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
  userState?: UserState,
  setUserState:(userState:UserState)=>void
}

// Create the context with an UserProvider object as the default value.
export const TrustifyProviderContext = createContext<TrustifyContextType>({
  setUserState:(userState:UserState)=>{}
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
  ;

// Create the provider component.
export const TrustifyProvider: FC<UserProviderProviderProps> = ({children}) => {
  // The provider can pass down additional state or methods in the value.
  // Right now, we are providing an UserProvider object.

  const {trustifyUser, fetchTrustifyUser} = useAppUser();
  const [userState, setUserState] = useState<UserState>();

  const providerValue: TrustifyContextType = useMemo(() => {
    return {
      userState,
      setUserState,
    };
  }, [userState]);

  useEffect(() => {
    setUserState('prepare');
  }, [setUserState]);

 

  return (
    <TrustifyProviderContext.Provider value={providerValue}>
      
      {children}
    </TrustifyProviderContext.Provider>
  );
};

export const useTrustifyContext = () => {
  if (!TrustifyProviderContext) throw new Error ('Need a UserProvider context')
  return useContext(TrustifyProviderContext)
}
