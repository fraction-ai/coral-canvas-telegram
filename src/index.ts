import { Bot } from "grammy";
import dotenv from "dotenv";
import { registerCommands } from "./commands";

// Load environment variables
dotenv.config();

// Ensure BOT_TOKEN is available
if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is required in .env file");
}

// Create bot instance
const bot = new Bot(process.env.BOT_TOKEN);

registerCommands(bot)

// Start the bot
bot.start();
console.log("Bot is running...");

