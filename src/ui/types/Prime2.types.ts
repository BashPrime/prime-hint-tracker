import z from "zod";
import {
  CheckedSchema,
  EmptyStringSchema,
} from "./common.types";

export const NewBossKeyHintSchema = z.object({
  location: EmptyStringSchema,
  checked: CheckedSchema,
});
export type NewBossKeyHint = z.infer<typeof NewBossKeyHintSchema>;

export const BossKeyHintsSchema = z.object({
  "Key 1": NewBossKeyHintSchema,
  "Key 2": NewBossKeyHintSchema,
  "Key 3": NewBossKeyHintSchema,
});

export const NewBossHintSchema = z.object({
  name: z.string(),
  item: EmptyStringSchema,
  checked: CheckedSchema,
  keys: BossKeyHintsSchema.optional(),
});

export const BossHintsSchema = z.object({
  item: NewBossHintSchema.shape.item,
  checked: NewBossHintSchema.shape.checked,
  keys: BossKeyHintsSchema.optional(),
});
export type BossHints = z.infer<typeof BossHintsSchema>;

export const KeybearerHintSchema = z.object({
  item: EmptyStringSchema,
  checked: CheckedSchema,
});
export type KeybearerHint = z.infer<typeof KeybearerHintSchema>;

export const NewTranslatorHintSchema = z.object({
  firstValue: EmptyStringSchema,
  secondValue: EmptyStringSchema,
  proximity: EmptyStringSchema,
  checked: CheckedSchema,
});
export type NewTranslatorHint = z.infer<typeof NewTranslatorHintSchema>;

export const NewRegionTranslatorHintsSchema = z.record(
  z.string(),
  NewTranslatorHintSchema
);
export type NewRegionTranslatorHints = z.infer<
  typeof NewRegionTranslatorHintsSchema
>;

export const NewRegionKeybearerHintsSchema = z.record(
  z.string(),
  KeybearerHintSchema
);
export type NewRegionKeybearerHints = z.infer<
  typeof NewRegionKeybearerHintsSchema
>;

export const NewRegionHintsSchema = z.object({
  bossHints: BossHintsSchema,
  keybearerHints: NewRegionKeybearerHintsSchema,
  translatorHints: NewRegionTranslatorHintsSchema,
});
export type NewRegionHints = z.infer<typeof NewRegionHintsSchema>;

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
