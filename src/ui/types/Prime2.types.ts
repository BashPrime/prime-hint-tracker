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
  PROXIMITY_OPTIONS,
} from "../data/Prime2.data";
import { PrimitiveAtom, atom } from "jotai";
import { v4 as uuidV4 } from "uuid";

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

export const FlyingIngCacheHintSchema = z.object({
  name: z.string().default(""),
  value: z.custom<PrimitiveAtom<string>>(),
});
export type FlyingIngCacheHint = z.infer<typeof FlyingIngCacheHintSchema>;

export const TranslatorHintSchema = z.object({
  name: z.string().default(""),
  firstValue: z.string().nullable().default(null),
  secondValue: z.string().nullable().default(null),
  proximityType: z.enum([...PROXIMITY_OPTIONS]).default("in"),
  numRooms: z.number().default(0),
});
export type TranslatorHint = z.infer<typeof TranslatorHintSchema>;

export const RegionHintsSchema = z.object({
  variant: z.enum(["temple", "agon", "torvus", "sanctuary"]),
  bossName: z.string(),
  bossItem: z.custom<PrimitiveAtom<string>>(),
  bossKeys: z.array(z.custom<PrimitiveAtom<string>>()),
  flyingCacheHints: z.array(FlyingIngCacheHintSchema),
  translatorHints: z.array(TranslatorHintSchema),
});
export type RegionHints = z.infer<typeof RegionHintsSchema>;

export const UnhintedItemSchema = z.object({
  id: z.string(),
  hint: z.custom<PrimitiveAtom<Prime2ItemLocationHint>>(),
});

export type UnhintedItem = z.infer<typeof UnhintedItemSchema>;
