import { Context, InlineKeyboard } from "grammy";
import { PLAY_GAME_TEXT } from "../constants";
import { escapeMarkdown } from "../utils/stringUtil";

// Handle /start command
export async function handleStart(ctx: Context) {
  if (!ctx.from) return;

  await ctx.reply(escapeMarkdown(PLAY_GAME_TEXT), {
    reply_markup: getPlayKeyboard(),
    parse_mode: "MarkdownV2",
  });
}

export function getPlayKeyboard() {
  return new InlineKeyboard()
    .webApp(
      "Play Coral Canvas",
      `https://coral-canvas.fractionai.xyz/?start_param=fullscreen`
    )
}