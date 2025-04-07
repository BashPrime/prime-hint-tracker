import z from "zod";
import {
  CheckedSchema,
  EmptyStringSchema,
  EndgameHint,
  EndgameHintSchema,
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

export const BossKeyHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: EmptyStringSchema,
  checked: CheckedSchema,
});
export type BossKeyHint = z.infer<typeof BossKeyHintSchema>;

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

export const TranslatorHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  firstValue: EmptyStringSchema,
  secondValue: EmptyStringSchema,
  proximity: EmptyStringSchema,
  checked: CheckedSchema,
});
export type TranslatorHint = z.infer<typeof TranslatorHintSchema>;

export const NewRegionKeybearerHintsSchema = z.record(
  z.string(),
  KeybearerHintSchema
);
export type NewRegionKeybearerHints = z.infer<
  typeof NewRegionKeybearerHintsSchema
>;

export const KeybearerHintsUpdateSchema = z.tuple([
  z.string(),
  KeybearerHintSchema,
]);
export type KeybearerHintsUpdate = z.infer<typeof KeybearerHintsUpdateSchema>;

export const NewRegionHintsSchema = z.object({
  bossHints: BossHintsSchema,
  keybearerHints: NewRegionKeybearerHintsSchema,
  translatorHints: NewRegionTranslatorHintsSchema,
});
export type NewRegionHints = z.infer<typeof NewRegionHintsSchema>;

export const RegionHintsSchema = z.object({
  variant: z.enum(["temple", "agon", "torvus", "sanctuary"]),
  translatorHints: z.array(TranslatorHintSchema),
});
export type RegionHints = z.infer<typeof RegionHintsSchema>;

export const NewSkyTempleKeyHintSchema = z.object({
  id: z.number(),
  location: EmptyStringSchema,
  checked: CheckedSchema,
});
export type NewSkyTempleKeyHint = z.infer<typeof NewSkyTempleKeyHintSchema>;

export const NewSkyTempleKeyHintsSchema = z.object({
  "Key 1": NewSkyTempleKeyHintSchema,
  "Key 2": NewSkyTempleKeyHintSchema,
  "Key 3": NewSkyTempleKeyHintSchema,
  "Key 4": NewSkyTempleKeyHintSchema,
  "Key 5": NewSkyTempleKeyHintSchema,
  "Key 6": NewSkyTempleKeyHintSchema,
  "Key 7": NewSkyTempleKeyHintSchema,
  "Key 8": NewSkyTempleKeyHintSchema,
  "Key 9": NewSkyTempleKeyHintSchema,
});
export type NewSkyTempleKeyHints = z.infer<typeof NewSkyTempleKeyHintsSchema>;

export const SkyTempleKeyHintSchema = EndgameHintSchema;
export type SkyTempleKeyHint = EndgameHint;
