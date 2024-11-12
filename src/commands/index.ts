import { Bot } from "grammy";
import { handleStart } from "./start";

export function registerCommands(bot: Bot) {
  bot.command("start", handleStart);
}