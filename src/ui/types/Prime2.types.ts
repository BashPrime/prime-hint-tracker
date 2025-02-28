import z from "zod";
import { EndgameHint, EndgameHintSchema } from "./common.types";

export const BossKeyHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type BossKeyHint = z.infer<typeof BossKeyHintSchema>;

export const BossHintsSchema = z.object({
  name: z.string(),
  item: z.string().default(""),
  checked: z.boolean().default(false),
  keys: z.array(BossKeyHintSchema).default([]),
});
export type BossHints = z.infer<typeof BossHintsSchema>;

export const KeybearerHintSchema = z.object({
  id: z.number(),
  lightWorldLocation: z.string(),
  darkWorldLocation: z.string(),
  value: z.string().default(""),
  checked: z.boolean().default(false),
});
export type KeybearerHint = z.infer<typeof KeybearerHintSchema>;

export const TranslatorHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  firstValue: z.string().default(""),
  secondValue: z.string().default(""),
  proximity: z.string().default(""),
  checked: z.boolean().default(false),
});
export type TranslatorHint = z.infer<typeof TranslatorHintSchema>;

export const RegionHintsSchema = z.object({
  variant: z.enum(["temple", "agon", "torvus", "sanctuary"]),
  bossHints: BossHintsSchema,
  keybearerHints: z.array(KeybearerHintSchema),
  translatorHints: z.array(TranslatorHintSchema),
});
export type RegionHints = z.infer<typeof RegionHintsSchema>;

export const SkyTempleKeyHintSchema = EndgameHintSchema;
export type SkyTempleKeyHint = EndgameHint;
