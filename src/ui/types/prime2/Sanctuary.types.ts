import { z } from "zod";
import { BossKeyHintsSchema, KeybearerHintSchema, NewBossHintSchema } from "../Prime2.types";

export const SanctuaryBossHintsSchema = z.object({
  item: NewBossHintSchema.shape.item,
  checked: NewBossHintSchema.shape.checked,
  keys: BossKeyHintsSchema,
});
export type SanctuaryBossHints = z.infer<typeof SanctuaryBossHintsSchema>;

export const SanctuaryKeybearerHintsSchema = z.object({
  sancEntrance: KeybearerHintSchema,
  dynamoWorks: KeybearerHintSchema,
});
export type SanctuaryKeybearerHints = z.infer<
  typeof SanctuaryKeybearerHintsSchema
>;
