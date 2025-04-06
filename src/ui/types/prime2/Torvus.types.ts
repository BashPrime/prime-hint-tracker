import { z } from "zod";
import {
  BossKeyHintsSchema,
  KeybearerHintSchema,
  NewBossHintSchema,
} from "../Prime2.types";

export const TorvusBossHintsSchema = z.object({
  item: NewBossHintSchema.shape.item,
  checked: NewBossHintSchema.shape.checked,
  keys: BossKeyHintsSchema,
});
export type TorvusBossHints = z.infer<typeof TorvusBossHintsSchema>;

export const TorvusKeybearerHintsSchema = z.object({
  torvusLagoon: KeybearerHintSchema,
  catacombs: KeybearerHintSchema,
});
export type TorvusKeybearerHints = z.infer<typeof TorvusKeybearerHintsSchema>;
