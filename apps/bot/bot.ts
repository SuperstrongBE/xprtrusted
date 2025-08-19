import {Markup, Telegraf} from "telegraf";
import * as dotenv from "dotenv";
import {getDbClient, type Database, type Tables} from "@metalquest/db-client";
import {getSHA256Hash} from "./utils/sha256";
import {isAccountTrusted} from "./utils/account-lookup";
import {message} from "telegraf/filters";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;
const DB_URL = process.env.SUPABASE_URL;
const SERVICE_TOKEN = process.env.SUPABASE_SERVICE;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN must be provided in .env file");
}
if (!WEBAPP_URL) {
  throw new Error("WEBAPP_URL must be provided in .env file");
}
if (!DB_URL) {
  throw new Error("DB_URL must be provided in .env file");
}
if (!SERVICE_TOKEN) {
  throw new Error("SERVICE_TOKEN must be provided in .env file");
}

const bot = new Telegraf(BOT_TOKEN);

const dbClient = getDbClient<Database>(DB_URL, SERVICE_TOKEN);

dbClient.realtime
  .channel("achievements")
  .on(
    "postgres_changes",
    {event: "INSERT", schema: "public", table: "achievements"},
    async (payload: any) => {
      console.log(payload);
      if (!payload.new) return;
      if (!payload.new.account) return;
      if (!payload.new.quest) return;
      const {data: accountData, error: accountError} = await dbClient
        .from("accounts")
        .select("*")
        .eq("id", payload.new.account)
        .limit(1)
        .single();
      const {data: questData, error: questError} = await dbClient
        .from("quests")
        .select("*")
        .eq("id", payload.new.quest)
        .limit(1)
        .single();
      console.log(accountError, questError);
      if (accountError) return;
      console.log(accountData, questData);
      if (accountData && accountData.userId && questData && questData.title) {
        console.log(`before sending message to ${accountData.userId}`);
        const sent = await bot.telegram.sendMessage(
          accountData.userId,
          `You just completed: ${questData.title}`
        );
        console.log(sent);
      }
    }
  )
  .subscribe();

// bot.use(async (ctx, next) => {
//   console.log(ctx.update, "update");
//   if (ctx.update.text == "/start") {
//     next();
//     return;
//   }
//   const hash = await getSHA256Hash(ctx.update.message.from.id.toString());
//   const isTrusted = await isAccountTrusted(hash);
//   if (!isTrusted) {
//     await ctx.reply(
//       `@${ctx.update.message.from.username}, You are not trusted, please register with @xprtrustbot`
//     );
//     await ctx.deleteMessage(ctx.update.message.message_id);
//     return;
//   } else {
//     await ctx.reply("You are trusted");
//     await next();
//   }
// });

bot.on("chat_join_request", async ctx => {
  const msg = ctx.channelPost;
  console.log(msg);
});

bot.command("start", async ctx => {
  console.log(ctx.text, "text");
  const payload = ctx.text.substring(6);
  if (payload.length) {
    const url = Buffer.from(payload, "base64").toString();
    const params = Object.fromEntries(new URLSearchParams(url).entries());

    // Result: { a: '123', b: 'gdfgd-gdfgdfgdf' }
    console.log(url);
  } else {
    console.log("no payload");
    // Start bot without payload
  }
  ctx.reply(
    "Welcome to metal quest, open the app to start",
    Markup.inlineKeyboard([
      Markup.button.url("Open HyperFold", `${WEBAPP_URL}`),
    ])
  );
});

bot.on(message("text"), async ctx => {
  if (ctx.update.message.text != "/start") {
    const hash = await getSHA256Hash(ctx.update.message.from.id.toString());
    const isTrusted = await isAccountTrusted(hash);
    if (isTrusted) {
      await ctx.reply(
        `Hey, ${ctx.update.message.from.username}, You are trusted`
      );
      return;
    } else {
      await ctx.reply(
        `@${ctx.update.message.from.username}, You are not trusted, please register with @xprtrustbot`
      );
      await ctx.deleteMessage(ctx.update.message.message_id);
      return;
    }
  }
});

// Start the bot
bot
  .launch({
    allowedUpdates: ["message", "callback_query"],
  })
  .then(() => {
    console.log("Bot is running!");
  });

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
