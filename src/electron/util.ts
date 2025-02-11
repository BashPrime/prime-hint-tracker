import { z } from "zod";
import { WINDOW_SIZE } from "./data.js";
import { GameSchema } from "./types.js";

export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function getDefaultWindowSize(game: string, isLegacyHints: boolean) {
  try {
    const parsedGame = GameSchema.parse(game);
    if (isLegacyHints) {
      return WINDOW_SIZE[parsedGame].legacy;
    }
    return WINDOW_SIZE[parsedGame].featural;
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error(err.issues);
    }
  }
}
