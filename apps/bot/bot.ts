import { Markup, Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import {createHash} from 'node:crypto'
import { JsonRpc } from '@proton/js';
import { getDbClient, type Database, type Tables } from '@metalquest/db-client';

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;
const DB_URL = process.env.SUPABASE_URL;
const SERVICE_TOKEN = process.env.SUPABASE_SERVICE;

if (!BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided in .env file');
}
if (!WEBAPP_URL) {
    throw new Error('WEBAPP_URL must be provided in .env file');
}
if (!DB_URL) {
    throw new Error('DB_URL must be provided in .env file');
}
if (!SERVICE_TOKEN) {
    throw new Error('SERVICE_TOKEN must be provided in .env file');
}

const bot = new Telegraf(BOT_TOKEN);

const dbClient = getDbClient<Database>(DB_URL, SERVICE_TOKEN)

dbClient.realtime.channel('achievements').on('postgres_changes', {event:"INSERT", schema: 'public', table: "achievements" }, async (payload: any) => {
  
  console.log(payload)
  if(!payload.new) return
  if(!payload.new.account) return
  if(!payload.new.quest) return
  const { data:accountData, error:accountError } = await dbClient.from('accounts').select('*').eq('id', payload.new.account).limit(1).single();
  const { data: questData, error: questError } = await dbClient.from('quests').select('*').eq('id', payload.new.quest).limit(1).single();
  console.log(accountError,questError)
  if (accountError) return 
  console.log(accountData,questData)
  if (accountData && accountData.userId && questData && questData.title) {
    console.log(`before sending message to ${accountData.userId}`)
    const sent = await bot.telegram.sendMessage(accountData.userId, `You just completed: ${questData.title}`)
    console.log(sent);
  }
  

}).subscribe()

// Start command
bot.command('start', async (ctx) => {
  ctx.reply(
    'Welcome to metal quest, open the app to start',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open Metal Quest', `${WEBAPP_URL}`)
    ])
  );
});


// Start the bot
bot.launch({
    allowedUpdates: ['message', 'callback_query'],
}).then(() => {
    console.log('Bot is running!');
});

const getSHA256Hash = async (input:string) => {
    const hash = createHash("SHA-256").update(input).digest('hex')
    return hash;
};
  
export function toEOSIOSha256(sha256Key: string): string {
    const part1 = sha256Key.substring(0, 32);
    const part2 = sha256Key.substring(32);
  
    // Reverse the bytes of each part
    const reversedPart1 = Buffer.from(part1, 'hex').reverse();
    const reversedPart2 = Buffer.from(part2, 'hex').reverse();
  
    // Reconvert the parts to strings
    const reversedString1 = reversedPart1.toString('hex');
    const reversedString2 = reversedPart2.toString('hex');
  
    // Combine the two parts
    return reversedString1 + reversedString2;
  }

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));