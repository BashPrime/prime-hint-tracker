import { z } from "zod";
import {
  BossKeyHintsSchema,
  KeybearerHintSchema,
  NewBossHintSchema,
  NewTranslatorHintSchema,
} from "../Prime2.types";

export const SanctuaryBossHintsSchema = z.object({
  item: NewBossHintSchema.shape.item,
  checked: NewBossHintSchema.shape.checked,
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
  sanctuaryEnergyController: NewTranslatorHintSchema,
  sanctuaryEntrance: NewTranslatorHintSchema,
  hallOfCombatMastery: NewTranslatorHintSchema,
  mainGyroChamber: NewTranslatorHintSchema,
  mainResearch: NewTranslatorHintSchema,
  watchStation: NewTranslatorHintSchema,
});
export type SanctuaryTranslatorHints = z.infer<
  typeof SanctuaryTranslatorHintsSchema
>;
