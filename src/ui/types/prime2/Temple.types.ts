import { z } from "zod";
import { KeybearerHintSchema, NewBossHintSchema } from "../Prime2.types";

export const TempleBossHintsSchema = z.object({
  item: NewBossHintSchema.shape.item,
  checked: NewBossHintSchema.shape.checked,
  keys: z.literal(undefined),
});

export const TempleKeybearerHintsSchema = z.object({
  industrialSite: KeybearerHintSchema,
  landingSite: KeybearerHintSchema,
  storageCavernA: KeybearerHintSchema,
});
export type TempleKeybearerHints = z.infer<typeof TempleKeybearerHintsSchema>;
