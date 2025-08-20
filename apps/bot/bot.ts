import {Context, Markup, Scenes, session, Telegraf} from "telegraf";
import * as dotenv from "dotenv";
import {getDbClient, type Database, type Tables} from "@metalquest/db-client";
import {getSHA256Hash} from "./utils/sha256";
import {isAccountTrusted} from "./utils/account-lookup";
import {message} from "telegraf/filters";
import type {SceneSessionData} from "telegraf/scenes";

dotenv.config();

interface SessionData {
  user_id: string;
  trustedHash: string;
  isTrusted: boolean;
  socket: WebSocket;
}

interface BotSession
  extends Scenes.SceneSession<SceneSessionData>,
    SessionData {
  // will be available under `ctx.session.mySessionProp`
}

interface SessionContext extends Context {
  session: BotSession;
}

class SessionManager {
  private store = new Map<string, SessionData>();

  get(hash: string) {
    return this.store.get(hash);
  }

  set(hash: string, data: SessionData) {
    this.store.set(hash, data);
  }

  getAllSessions() {
    return Array.from(this.store.entries());
  }
}

export const sessionManager = new SessionManager();

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

const bot = new Telegraf<SessionContext>(BOT_TOKEN);
bot.use(session());
bot.use(async (ctx, next) => {
  console.log("something");
  await next();
});

bot.on("chat_join_request", async ctx => {
  const msg = ctx.channelPost;
  console.log(msg);
});

bot.command("start", async ctx => {
  console.log(ctx.text, "text");
  const hash = await getSHA256Hash(ctx.update.message.from.id.toString());
  const isTrusted = await isAccountTrusted(hash);
  if (!ctx.session) {
    const socket = new WebSocket("http://0.0.0.0:3006/");
    socket.onmessage = function (event) {
      console.log("received: %s", event.data);
      const data = JSON.parse(event.data);
      const sessionData = sessionManager.get(data.hash.toLowerCase());
      if (sessionData) {
        console.log("sending message to user");
        bot.telegram.sendMessage(sessionData.user_id, "You are trusted");
      }
    };
    socket.onopen = function (event) {
      console.log("connected to relay");
    };
    socket.onclose = function (event) {
      console.log("disconnected from relay");
    };
    socket.onerror = function (event) {
      console.log("error: %s", event);
    };
    const sessionData: SessionData = {
      user_id: ctx.update.message.from.id.toString(),
      trustedHash: hash,
      isTrusted: isTrusted,
      socket: socket,
    };
    sessionManager.set(hash, sessionData);
    ctx.session = sessionData;
  }
  const mobileUrl = `${WEBAPP_URL}?user=${ctx.update.message.from.username}&id=${ctx.update.message.from.id}`;
  ctx.reply(
    "Trusting process is about linking your telegram account with your XPR Network account with a layer of channel anonymity. \n\nTo start, open the app with the button below",
    Markup.inlineKeyboard([
      Markup.button.url("Let's get trusted", `${mobileUrl}`),
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

bot.on(message("migrate_to_chat_id"), async ctx => {
  console.log(ctx.update.message.migrate_to_chat_id);
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
