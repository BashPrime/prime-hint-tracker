import { z } from "zod";
import {
  BossKeyHintsSchema,
  KeybearerHintSchema,
  NewBossHintSchema,
} from "../Prime2.types";

export const AgonBossHintsSchema = z.object({
  item: NewBossHintSchema.shape.item,
  checked: NewBossHintSchema.shape.checked,
  keys: BossKeyHintsSchema,
});
export type AgonBossHints = z.infer<typeof AgonBossHintsSchema>;

export const AgonKeybearerHintsSchema = z.object({
  centralMiningStation: KeybearerHintSchema,
  mainReactor: KeybearerHintSchema,
});
export type AgonKeybearerHints = z.infer<typeof AgonKeybearerHintsSchema>;
