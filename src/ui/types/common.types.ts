import { z } from "zod";

export const CheckedSchema = z.boolean().default(false);
export const EmptyStringSchema = z.string().default("");

export const ItemHintSchema = z.object({
  location: EmptyStringSchema,
  checked: CheckedSchema,
});
export type ItemHint = z.infer<typeof ItemHintSchema>;

export const UnhintedItemSchema = z.object({
  id: z.string(),
  item: EmptyStringSchema,
  location: EmptyStringSchema,
  checked: CheckedSchema,
});
export type UnhintedItem = z.infer<typeof UnhintedItemSchema>;

export const EndgameHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string().default(""),
  checked: CheckedSchema,
});
export type EndgameHint = z.infer<typeof EndgameHintSchema>;

export const HintOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
});
export type HintOption = z.infer<typeof HintOptionSchema>;
