import { z } from "zod";
import {
  BossKeyHintsSchema,
  KeybearerHintSchema,
  BossHintSchema,
  TranslatorHintSchema,
} from "../Prime2.types";

export const TorvusBossHintsSchema = z.object({
  item: BossHintSchema.shape.item,
  checked: BossHintSchema.shape.checked,
  keys: BossKeyHintsSchema,
});
export type TorvusBossHints = z.infer<typeof TorvusBossHintsSchema>;

export const TorvusKeybearerHintsSchema = z.object({
  torvusLagoon: KeybearerHintSchema,
  catacombs: KeybearerHintSchema,
});
export type TorvusKeybearerHints = z.infer<typeof TorvusKeybearerHintsSchema>;

export const TorvusTranslatorHintsSchema = z.object({
  torvusEnergyController: TranslatorHintSchema,
  pathOfRoots: TranslatorHintSchema,
  undergroundTunnel: TranslatorHintSchema,
  catacombs: TranslatorHintSchema,
  gatheringHall: TranslatorHintSchema,
  trainingChamber: TranslatorHintSchema,
});
export type TorvusTranslatorHints = z.infer<typeof TorvusTranslatorHintsSchema>;
