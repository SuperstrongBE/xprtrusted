"use client";

import {useEffect} from "react";
import useTgUser from "../hooks/tg-user";
import {redirect} from "next/navigation";
import {wait} from "@/utils/wait.utils";
import { TrustifyAccount } from "@/interfaces/trustify";

export default function Home() {
  const {trustifyUser,telegramUser, fetchTrustifyUser} = useTgUser();

  useEffect(() => {
    if (trustifyUser && telegramUser)wait(2000).then(() => redirect("/quests"));
    if (!trustifyUser && telegramUser) {
      fetchTrustifyUser().then((result: TrustifyAccount) => {
        if (!result) {
          console.log(result,"trustify user")
          wait(2000).then(() => redirect("/register"));
        }
      });
    }
  }, [fetchTrustifyUser, trustifyUser,telegramUser]);

  return (
    <main className="container flex justify-center items-center w-full">
      <h1 className="text-2xl font-bold">
        Preparing your Metal Quest experience ...
      </h1>
    </main>
  );
}
