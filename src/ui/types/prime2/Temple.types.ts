import { z } from "zod";
import {
  KeybearerHintSchema,
  BossHintSchema,
  TranslatorHintSchema,
} from "../Prime2.types";

export const TempleBossHintsSchema = z.object({
  item: BossHintSchema.shape.item,
  checked: BossHintSchema.shape.checked,
  keys: z.literal(undefined),
});
export type TempleBossHints = z.infer<typeof TempleBossHintsSchema>;

export const TempleKeybearerHintsSchema = z.object({
  industrialSite: KeybearerHintSchema,
  landingSite: KeybearerHintSchema,
  storageCavernA: KeybearerHintSchema,
});
export type TempleKeybearerHints = z.infer<typeof TempleKeybearerHintsSchema>;

export const TempleTranslatorHintsSchema = z.object({
  mainEnergyController: TranslatorHintSchema,
  transportToAgonWastes: TranslatorHintSchema,
  fortressTransportAccess: TranslatorHintSchema,
  meetingGrounds: TranslatorHintSchema,
  pathOfEyes: TranslatorHintSchema,
});
export type TempleTranslatorHints = z.infer<typeof TempleTranslatorHintsSchema>;
