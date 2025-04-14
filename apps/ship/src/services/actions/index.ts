import {Database, Tables} from "../../interfaces/db_scheme";
import {loadReader} from "../../ship-reader";
import { SupabaseClient } from "@supabase/supabase-js";
import { runFormulas } from "../../utils/formula-parser";
import { Subject } from "rxjs";
import { EosioReaderActionStreamData } from "@blockmatic/eosio-ship-reader";
import WebSocket from "ws";

const dbClient = new SupabaseClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE!
);

let start:()=>void = ()=>{};
let stop:()=>void = ()=>{};
let close$: Subject<WebSocket.CloseEvent> = new Subject();
let actions$:Subject<EosioReaderActionStreamData> = new Subject();
const runProcess = async () => {
  
  dbClient.realtime.channel('achievements').on('postgres_changes', { event: "INSERT", schema: 'public', table: "quests" }, async () => {
  
    initProcess()
    
  }).subscribe();
  initProcess()
  
};

async function initProcess() {
  if (actions$) actions$.unsubscribe()
  stop();
  start();
  const shipReader = await loadReader();
  if (!shipReader) throw new Error('Unable to reload ship reader');
  actions$ = shipReader.actions$;
  close$ = shipReader.close$;
  start = shipReader.start;
  stop = shipReader.stop;
  actions$.subscribe(processActions);
  close$.subscribe(() => console.log("Balances process connection closed"));
  console.log("Action process is listening");
}

async function processActions(action: any) {
  console.log("Run process on action")
    
    const {data: questsData, error: questError} = await dbClient
      .from("quests")
      .select("*")
      .eq("contract", action.account)
      .eq("trigger", action.name)
      .eq("trigger_type", "action")
      
    if (questError) throw new Error("Error while fetching quests table");
    if (!questsData ) {
      console.warn("No Quest found, canceling the process");
      return 
    }

    questsData.map(async (quest:Tables<'quests'>) => {
      const formulaOutput = runFormulas(quest.condition_formulas || [], action);
      if (formulaOutput > 0) { 
        // TODO Get achievement by quest id
        // TODO Upsert on quest
        const { data: accountData, error: accountError } = await dbClient.from('accounts').select('*').eq('actor', action.receipt.receiver).limit(1).single();
        if (accountError) throw new Error(`Error while fetching account: ${JSON.stringify(accountError)}`);
      if (!accountData ) {
        console.warn("No Account found");
        return 
      }
        const { data: achievementInsert, error: achievementError } = await dbClient
        .from('achievements')
        .insert({
          quest: quest.id,
          account: accountData.id,
          requested_occurence: quest.requested_occurence,
          current_occurence:formulaOutput
        })
        .select('*')
        .single();
      if (achievementError) throw new Error(JSON.stringify(achievementError));
      if (!achievementInsert ) {
        console.warn("No Achievement has been inserted");
        return 
      }
      console.log(achievementInsert, 'inserted achiement ');

      }  

    })
}

runProcess();
