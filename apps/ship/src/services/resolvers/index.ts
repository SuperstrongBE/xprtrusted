import './../../loadEnv';
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../interfaces/db_scheme";
import { buildRPCParams } from '../../utils/rpc-params';
import {JsonRpc} from '@proton/js'
import { runFormulas } from '../../utils/formula-parser';

const dbClient = new SupabaseClient<Database>(
  "https://tsaxtomiidckqzpqixcu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzYXh0b21paWRja3F6cHFpeGN1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzY5MTcyOSwiZXhwIjoyMDU5MjY3NzI5fQ.TmrXWXvxEZgBOS-yRLQs6CnfvGjtqyT9Xs2Ri8Q2vCo"
);

const rpc = new JsonRpc(['https://api.rockerone.io']);

async function runProcess() { 

  const { data: userSelectData, error: userSelectError } = await dbClient.from('init_queue').select('*, account(*)').eq('status', 'queued').limit(1).single();
  if (userSelectError) {
    return;
  }
  if (userSelectData) {
    const { data: questsSelectData, error: questsSelectError } = await dbClient.from('quests').select('*').eq('trigger','userverify');
    if (questsSelectError) {
      return;
    }
    if (questsSelectData) { 
      questsSelectData.map(async (quest) => {
        if (quest.init_process == "table" && quest.init_rpc_params) {
          const rpcparams = buildRPCParams(quest.init_rpc_params, { lower: userSelectData.account!.actor!, upper: userSelectData.account!.actor!});
          const query = await rpc.get_table_rows(rpcparams);
          query.rows.map(async (row) => {
            console.log(runFormulas(quest.init_condition_formula!, row))
            
          })

        }
      })
    }
  
  }
  //TODO Check remaining init accounts queue
  //TODO If account remains in init queue get first
  //TODO Mark the account as progress
  //TODO Fetch quests
  //TODO Read initial data (init_process:txs_resolver | table_resolver,)
  //TODO Loop through all TX and traces
  //TODO Validate each trace on quest initialization formula


  
}


runProcess()