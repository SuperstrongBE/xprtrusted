import {Database} from "../../interfaces/db_scheme";
import {loadReader} from "../../ship-reader";
import { SupabaseClient } from "@supabase/supabase-js";
import * as R from 'ramda'

const dbClient = new SupabaseClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SERVICE_ROLE_KEY!
);

const runProcess = async () => {
  const {start, close$, actions$} = await loadReader();
  start();

  actions$.subscribe(async (action: any) => {
    console.log(action);
    const {data: questsData, error: questError} = await dbClient
      .from("quests")
      .select("*")
      .eq("contract", action.account)
      .eq("trigger", action.name)
      .eq("trigger_type", "action")
      .limit(1)
      .single()
    if (questError) throw new Error("Error while fetching quests table");
    if (!questsData ) {
      console.warn("No Quest found, canceling the process");
      return 
    }
    const conditionValue:string = R.path(questsData.condition_path!.split('.'), action) as string;
    if (conditionValue == action.receiver) {
      const { data: accountData, error: accountError } = await dbClient
        .from('accounts')
        .select('*')
        .eq('actor', conditionValue)
        .limit(1)
        .single();
      if (accountError) throw new Error("Error while fetching accounts table");
      if (!accountData ) {
        console.warn("No Account found, canceling the process");
        return 
      }

      const { data: achievementInsert, error: achievementError } = await dbClient
        .from('achievements')
        .insert({
          quest: questsData.id,
          account: accountData.id
        })
        .select('*')
        .single();
      if (achievementError) throw new Error("Error while insert achievement ");
      if (!achievementInsert ) {
        console.warn("No Achievement has been inserted");
        return 
      }
      console.log(achievementInsert, 'inserted achiement ');
    }
  });

  close$.subscribe(() => console.log("Balances process connection closed"));
  console.log("Action process is listening");
};

runProcess();
