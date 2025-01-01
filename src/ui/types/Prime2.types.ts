import z from "zod";
import {
  PRIME_2_ALL_LOCATIONS,
  PRIME_2_EXPANSIONS_VALUES,
  PRIME_2_ITEMS_VALUES,
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_PROGRESSIVE_ITEMS_VALUES,
  PRIME_2_TEMPLE_KEYS_VALUES,
} from "../data/Prime2.data";
import { ProximityTypeSchema } from "./Hint.types";

export const Prime2MajorItemSchema = z.enum(PRIME_2_ITEMS_VALUES);
export type Prime2MajorItem = z.infer<typeof Prime2MajorItemSchema>;

export const Prime2ProgressiveItemScema = z.enum(
  PRIME_2_PROGRESSIVE_ITEMS_VALUES
);
export type Prime2ProgressiveItem = z.infer<typeof Prime2ProgressiveItemScema>;

export const Prime2ExpansionSchema = z.enum(PRIME_2_EXPANSIONS_VALUES);
export type Prime2Expansion = z.infer<typeof Prime2ExpansionSchema>;

export const Prime2TempleKeySchema = z.enum(PRIME_2_TEMPLE_KEYS_VALUES);
export type Prime2TempleKey = z.infer<typeof Prime2TempleKeySchema>;

export const Prime2ItemSchema = z.union([
  Prime2MajorItemSchema,
  Prime2ProgressiveItemScema,
  Prime2ExpansionSchema,
  Prime2TempleKeySchema,
]);
export type Prime2Item = z.infer<typeof Prime2ItemSchema>;

export const Prime2ItemLocationHintSchema = z.object({
  item: Prime2ItemSchema,
  location: z.string(),
  proximityType: ProximityTypeSchema,
  numRooms: z.number(),
});

export const Prime2LocationSchema = z.enum(PRIME_2_ALL_LOCATIONS);
export type Prime2Location = z.infer<typeof Prime2LocationSchema>;

export const Prime2LocationWithItemSchema = z.enum(
  PRIME_2_LOCATIONS_WITH_ITEMS
);
export type Prime2LocationWithItem = z.infer<
  typeof Prime2LocationWithItemSchema
>;
