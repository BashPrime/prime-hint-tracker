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

export const KeybearerRoomsSchema = z.enum(["aether", "darkAether", "both"]);
export type KeybearerRoom = z.infer<typeof KeybearerRoomsSchema>;

export const TogglesSchema = z.object({
  alwaysOnTop: z.boolean().default(false),
  legacyHintsEnabled: z.boolean().default(false),
  keybearerRoomLabels: KeybearerRoomsSchema.default("both"),
});
export type Toggles = z.infer<typeof TogglesSchema>;

export const AppConfigSchema = z.object({
  game: GameSchema.default("prime"),
  toggles: TogglesSchema,
  window: z.custom<Rectangle>(),
});
export type AppConfig = z.infer<typeof AppConfigSchema>;
