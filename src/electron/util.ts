import { z } from "zod";
import { WINDOW_SIZE } from "./data.js";
import { GameSchema } from "../shared/types.js";

export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function getDefaultWindowSize(game: string, isLegacyHints: boolean) {
  try {
    const parsedGame = GameSchema.parse(game);
    if (game === "echoes") {
      return isLegacyHints ? WINDOW_SIZE.echoesLegacy : WINDOW_SIZE.echoes;
    }

    return WINDOW_SIZE[parsedGame];
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error(err.issues);
    }
  }

  return WINDOW_SIZE.default;
}
