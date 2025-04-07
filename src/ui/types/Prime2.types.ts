import z from "zod";
import {
  CheckedSchema,
  EmptyStringSchema,
} from "./common.types";

export const BossKeyHintSchema = z.object({
  location: EmptyStringSchema,
  checked: CheckedSchema,
});
export type BossKeyHint = z.infer<typeof BossKeyHintSchema>;

export const BossKeyHintsSchema = z.object({
  "Key 1": BossKeyHintSchema,
  "Key 2": BossKeyHintSchema,
  "Key 3": BossKeyHintSchema,
});

export const BossHintSchema = z.object({
  name: z.string(),
  item: EmptyStringSchema,
  checked: CheckedSchema,
  keys: BossKeyHintsSchema.optional(),
});

export const BossHintsSchema = z.object({
  item: BossHintSchema.shape.item,
  checked: BossHintSchema.shape.checked,
  keys: BossKeyHintsSchema.optional(),
});
export type BossHints = z.infer<typeof BossHintsSchema>;

export const KeybearerHintSchema = z.object({
  item: EmptyStringSchema,
  checked: CheckedSchema,
});
export type KeybearerHint = z.infer<typeof KeybearerHintSchema>;

export const TranslatorHintSchema = z.object({
  firstValue: EmptyStringSchema,
  secondValue: EmptyStringSchema,
  proximity: EmptyStringSchema,
  checked: CheckedSchema,
});
export type TranslatorHint = z.infer<typeof TranslatorHintSchema>;

export const RegionTranslatorHintsSchema = z.record(
  z.string(),
  TranslatorHintSchema
);
export type RegionTranslatorHints = z.infer<
  typeof RegionTranslatorHintsSchema
>;

export const RegionKeybearerHintsSchema = z.record(
  z.string(),
  KeybearerHintSchema
);
export type RegionKeybearerHints = z.infer<
  typeof RegionKeybearerHintsSchema
>;

export const RegionHintsSchema = z.object({
  bossHints: BossHintsSchema,
  keybearerHints: RegionKeybearerHintsSchema,
  translatorHints: RegionTranslatorHintsSchema,
});
export type RegionHints = z.infer<typeof RegionHintsSchema>;

export const SkyTempleKeyHintSchema = z.object({
  location: EmptyStringSchema,
  checked: CheckedSchema,
});
export type SkyTempleKeyHint = z.infer<typeof SkyTempleKeyHintSchema>;

export const SkyTempleKeyHintsSchema = z.object({
  "Key 1": SkyTempleKeyHintSchema,
  "Key 2": SkyTempleKeyHintSchema,
  "Key 3": SkyTempleKeyHintSchema,
  "Key 4": SkyTempleKeyHintSchema,
  "Key 5": SkyTempleKeyHintSchema,
  "Key 6": SkyTempleKeyHintSchema,
  "Key 7": SkyTempleKeyHintSchema,
  "Key 8": SkyTempleKeyHintSchema,
  "Key 9": SkyTempleKeyHintSchema,
});
export type SkyTempleKeyHints = z.infer<typeof SkyTempleKeyHintsSchema>;
