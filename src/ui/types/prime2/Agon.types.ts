import { z } from "zod";
import {
  BossKeyHintsSchema,
  KeybearerHintSchema,
  BossHintSchema,
  TranslatorHintSchema,
} from "../Prime2.types";

export const AgonBossHintsSchema = z.object({
  item: BossHintSchema.shape.item,
  checked: BossHintSchema.shape.checked,
  keys: BossKeyHintsSchema,
});
export type AgonBossHints = z.infer<typeof AgonBossHintsSchema>;

export const AgonKeybearerHintsSchema = z.object({
  centralMiningStation: KeybearerHintSchema,
  mainReactor: KeybearerHintSchema,
});
export type AgonKeybearerHints = z.infer<typeof AgonKeybearerHintsSchema>;

export const AgonTranslatorHintsSchema = z.object({
  agonEnergyController: TranslatorHintSchema,
  miningPlaza: TranslatorHintSchema,
  portalTerminal: TranslatorHintSchema,
  miningStationA: TranslatorHintSchema,
  miningStationB: TranslatorHintSchema,
});
export type AgonTranslatorHints = z.infer<typeof AgonTranslatorHintsSchema>;
