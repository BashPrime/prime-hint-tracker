import { z } from "zod";

export const UnhintedItemSchema = z.object({
  id: z.string(),
  item: z.string().default(""),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});

export type UnhintedItem = z.infer<typeof UnhintedItemSchema>;

export const EndgameHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type EndgameHint = z.infer<typeof EndgameHintSchema>;

export const HintOptionSchema = z.object({
  label: z.string(),
  value: z.string()
});
export type HintOption = z.infer<typeof HintOptionSchema>;
