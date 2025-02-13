import { z } from "zod";
import { Rectangle } from "electron";

export const GameSchema = z.enum(["prime", "echoes", "corruption"]);
export type Game = z.infer<typeof GameSchema>;

export const ActionSchema = z.enum(["reset-size", "tracker"]);
export type Action = z.infer<typeof ActionSchema>;

export const TrackerConfigSchema = z.object({
  game: GameSchema,
  tracker: z.any(),
});
export type TrackerConfig = z.infer<typeof TrackerConfigSchema>;

export const AppConfigSchema = z.object({
  toggles: z.object({
    alwaysOnTop: z.boolean(),
    legacyHintsEnabled: z.boolean(),
  }),
  window: z.custom<Rectangle>(),
});
export type AppConfig = z.infer<typeof AppConfigSchema>;

export const KeybearerRoomsSchema = z.enum(["aether", "darkAether", "both"]);
export type KeybearerRoom = z.infer<typeof KeybearerRoomsSchema>;

