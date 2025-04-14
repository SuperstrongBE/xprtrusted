"use client";

import {useEffect} from "react";
import useTgUser from "../hooks/tg-user";
import {redirect} from "next/navigation";
import {wait} from "@/utils/wait.utils";
import { TrustifyAccount } from "@/interfaces/trustify";
import { useTrustifyContext } from "@/components/05_providers/UserProvider";

export default function Home() {

  const {setUserState} = useTrustifyContext()

  return (
    <main className="container flex justify-center items-center w-full flex-col">
      <button onClick={()=>setUserState('prepare')}>Prepare</button>
      <button onClick={()=>setUserState('start')}>Start</button>
      <button onClick={()=>setUserState('connect')}>Connect</button>
      <button onClick={()=>setUserState('verify')}>Verify</button>
      <button onClick={()=>setUserState('link')}>Link</button>
    </main>
  );
}
