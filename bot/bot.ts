import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided in .env file');
}

const bot = new Telegraf(BOT_TOKEN);

// Start command
bot.command('start', async (ctx) => {
    const userId = ctx.from.id;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://xprtrust.com/user/${userId}`;
    
    await ctx.reply('Welcome to XPR Trusted Bot! 👋');
    await ctx.replyWithPhoto({ url: qrCodeUrl }, {
        caption: `Your unique QR code for user ID: ${userId}\nScan to view your profile!`
    });
});

// Help command
bot.command('help', async (ctx) => {
    const helpMessage = `
Available commands:
/start - Start the bot
/help - Show this help message
`;
    await ctx.reply(helpMessage);
});

// Handle text messages
bot.on('text', async (ctx) => {
    const message = ctx.message.text;
    await ctx.reply(`You said: ${message}`);
});

// Error handling
bot.catch((err, ctx) => {
    console.error(`Error for ${ctx.updateType}:`, err);
});

// Start the bot
bot.launch({
    allowedUpdates: ['message', 'callback_query'],
}).then(() => {
    console.log('Bot is running!');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));