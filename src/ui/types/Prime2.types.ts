import z from "zod";
import {
  PRIME_2_MAJORS_VALUES,
  PRIME_2_ALL_LOCATIONS,
  PRIME_2_EXPANSIONS_VALUES,
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_PROGRESSIVE_MAJORS_VALUES,
  PRIME_2_TEMPLE_KEYS_VALUES,
  PRIME_2_RELATED_UPGRADES_HINTS,
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_ALL_REGIONS,
} from "../data/Prime2.data";

export const Prime2MajorItemSchema = z.enum(PRIME_2_MAJORS_VALUES);
export type Prime2MajorItem = z.infer<typeof Prime2MajorItemSchema>;

export const Prime2ProgressiveItemScema = z.enum(
  PRIME_2_PROGRESSIVE_MAJORS_VALUES
);
export type Prime2ProgressiveItem = z.infer<typeof Prime2ProgressiveItemScema>;

export const Prime2ExpansionSchema = z.enum(PRIME_2_EXPANSIONS_VALUES);
export type Prime2Expansion = z.infer<typeof Prime2ExpansionSchema>;

export const Prime2TempleKeySchema = z.enum(PRIME_2_TEMPLE_KEYS_VALUES);
export type Prime2TempleKey = z.infer<typeof Prime2TempleKeySchema>;

export const Prime2ItemSchema = z.enum(PRIME_2_ALL_ITEMS_VALUES);
export type Prime2Item = z.infer<typeof Prime2ItemSchema>;

export const Prime2LocationSchema = z.enum(PRIME_2_ALL_LOCATIONS).nullable();
export type Prime2Location = z.infer<typeof Prime2LocationSchema>;

export const Prime2RegionSchema = z.enum(PRIME_2_ALL_REGIONS).nullable();
export type Prime2Region = z.infer<typeof Prime2RegionSchema>;

export const Prime2LocationWithItemSchema = z
  .enum(PRIME_2_LOCATIONS_WITH_ITEMS)
  .nullable()
  .default(null);
export type Prime2LocationWithItem = z.infer<
  typeof Prime2LocationWithItemSchema
>;

export const Prime2ItemLocationHintSchema = z.object({
  item: z.string().nullable().default(null),
  location: z.string().nullable().default(null),
});
export type Prime2ItemLocationHint = z.infer<
  typeof Prime2ItemLocationHintSchema
>;

export const Prime2ItemHintSchema = z.object({
  label: z.string().nullable().default(null),
  item: Prime2ItemSchema.nullable().default(null),
});
export type Prime2ItemHint = z.infer<typeof Prime2ItemHintSchema>;

export const Prime2LocationHintSchema = z.object({
  label: z.string().nullable().default(null),
  location: Prime2LocationSchema.nullable().default(null),
});
export type Prime2LocationHint = z.infer<typeof Prime2LocationHintSchema>;

export const MajorGuardianHintsSchema = z.object({
  amorbis: Prime2ItemSchema.nullable().default(null),
  chykka: Prime2ItemSchema.nullable().default(null),
  quadraxis: Prime2ItemSchema.nullable().default(null),
  umosReward: Prime2ItemSchema.nullable().default(null),
});
export type MajorGuardianHints = z.infer<typeof MajorGuardianHintsSchema>;

export const Prime2RelatedUpgradesHintSchema = z
  .enum(PRIME_2_RELATED_UPGRADES_HINTS)
  .nullable();
export type Prime2RelatedUpgradesHint = z.infer<
  typeof Prime2RelatedUpgradesHintSchema
>;

export const BossKeyHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string(),
});
export type BossKeyHint = z.infer<typeof BossKeyHintSchema>;

export const BossHintsSchema = z.object({
  name: z.string(),
  item: z.string(),
  keys: z.array(BossKeyHintSchema),
});
export type BossHints = z.infer<typeof BossHintsSchema>;

export const KeybearerHintSchema = z.object({
  id: z.number(),
  lightWorldLocation: z.string(),
  darkWorldLocation: z.string(),
  value: z.string(),
});
export type KeybearerHint = z.infer<typeof KeybearerHintSchema>;

export const TranslatorHintSchema = z.object({
  id: z.number(),
  name: z.string().default(""),
  firstValue: z.string(),
  secondValue: z.string(),
  proximity: z.string(),
});
export type TranslatorHint = z.infer<typeof TranslatorHintSchema>;

export const RegionHintsSchema = z.object({
  variant: z.enum(["temple", "agon", "torvus", "sanctuary"]),
  bossHints: BossHintsSchema,
  flyingCacheHints: z.array(KeybearerHintSchema),
  translatorHints: z.array(TranslatorHintSchema),
});
export type RegionHints = z.infer<typeof RegionHintsSchema>;

export const UnhintedItemSchema = z.object({
  id: z.string(),
  item: z.string().default(""),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});

export type UnhintedItem = z.infer<typeof UnhintedItemSchema>;

export const SkyTempleKeyHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type SkyTempleKeyHint = z.infer<typeof SkyTempleKeyHintSchema>;
