import { z } from "zod";

export const GameSchema = z.enum(["prime", "echoes", "corruption"]);
export type Game = z.infer<typeof GameSchema>;

export const ActionSchema = z.enum(["reset-size"]);
export type Action = z.infer<typeof ActionSchema>;

export const AppConfigSchema = z.object({
  game: GameSchema,
  legacyHintsEnabled: z.boolean(),
  tracker: z.any(),
});
export type AppConfig = z.infer<typeof AppConfigSchema>;
