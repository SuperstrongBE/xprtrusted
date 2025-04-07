import { Database } from '../../interfaces/db_scheme';
import { loadReader } from '../../ship-reader';
import { SupabaseClient } from '@supabase/supabase-js';


const dbClient = new SupabaseClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SERVICE_ROLE_KEY!,
);

const runProcess = async () => {
  const { start, close$, rows$ } = await loadReader();
  start();

  const { data: questsData, error: questError } = await dbClient.from('quests').select('*').eq('trigger_type', 'table');
  if (questError) throw new Error('Error while fetching quests table');
  if (!questsData || questsData.length == 0) { 
    console.warn('No Quest found, canceling the process')
  }
  console.log(questsData)
   rows$.subscribe(async (row:{table:string,scope:string,value:any}) => {
    console.log(row)
  });

  close$.subscribe(() => console.log('Balances process connection closed'));
  console.log('Table process is listening');
};

runProcess();
