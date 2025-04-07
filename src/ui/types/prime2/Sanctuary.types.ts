import { z } from "zod";
import {
  BossKeyHintsSchema,
  KeybearerHintSchema,
  BossHintSchema,
  TranslatorHintSchema,
} from "../Prime2.types";

export const SanctuaryBossHintsSchema = z.object({
  item: BossHintSchema.shape.item,
  checked: BossHintSchema.shape.checked,
  keys: BossKeyHintsSchema,
});
export type SanctuaryBossHints = z.infer<typeof SanctuaryBossHintsSchema>;

export const SanctuaryKeybearerHintsSchema = z.object({
  sanctuaryEntrance: KeybearerHintSchema,
  dynamoWorks: KeybearerHintSchema,
});
export type SanctuaryKeybearerHints = z.infer<
  typeof SanctuaryKeybearerHintsSchema
>;

export const SanctuaryTranslatorHintsSchema = z.object({
  sanctuaryEnergyController: TranslatorHintSchema,
  sanctuaryEntrance: TranslatorHintSchema,
  hallOfCombatMastery: TranslatorHintSchema,
  mainGyroChamber: TranslatorHintSchema,
  mainResearch: TranslatorHintSchema,
  watchStation: TranslatorHintSchema,
});
export type SanctuaryTranslatorHints = z.infer<
  typeof SanctuaryTranslatorHintsSchema
>;
