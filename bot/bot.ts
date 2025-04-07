import { Markup, Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import {createHash} from 'node:crypto'
import { JsonRpc } from '@proton/js';
import { getDbClient, type Database, type Tables } from 'metal-quest-db-client';

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
    const userId = ctx.from.id;
    const shaUser = await getSHA256Hash(userId.toString())
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://192.168.0.227:3002/verify/${shaUser}`;
    
    await ctx.reply('Welcome to XPR Trusted Bot! 👋');
    await ctx.replyWithPhoto({ url: qrCodeUrl }, {
        caption: `Your unique QR code for user ID: ${userId} - ${shaUser}\nScan to view your profile!`
    });
});

bot.command('verify', async (ctx) => {
    const userId = ctx.from.id;
    const shaUser = await getSHA256Hash(userId.toString())
    const rpc = new JsonRpc(['https://testnet.rockerone.io']);
    const rows = await rpc.get_table_rows({
        code: 'xprtrustify',
        table:"accounts",
        scope: 'xprtrustify',
        lower_bound:toEOSIOSha256(shaUser),
        upper_bound: toEOSIOSha256(shaUser),
        index_position: 2,
        key_type: "sha256", 
        
    })
    if (!rows || !rows.rows || rows.rows.length == 0) await ctx.reply('Not verified');
    await ctx.reply(JSON.stringify(rows.rows));

})
bot.command('app', (ctx) => {
    ctx.reply(
      'Click the button below to open the app:',
      Markup.keyboard([
        Markup.button.webApp('Open WebApp', `${WEBAPP_URL}`)
      ]).resize()
    );
});
  
bot.command('inlineapp', (ctx) => {
    ctx.reply(
      'Click the button below to open the app:',
      Markup.inlineKeyboard([
        Markup.button.webApp('Open WebApp', `${WEBAPP_URL}`)
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