import { z } from "zod";
import {
  KeybearerHintSchema,
  NewBossHintSchema,
  NewTranslatorHintSchema,
} from "../Prime2.types";

export const TempleBossHintsSchema = z.object({
  item: NewBossHintSchema.shape.item,
  checked: NewBossHintSchema.shape.checked,
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
  mainEnergyController: NewTranslatorHintSchema,
  transportToAgonWastes: NewTranslatorHintSchema,
  fortressTransportAccess: NewTranslatorHintSchema,
  meetingGrounds: NewTranslatorHintSchema,
  pathOfEyes: NewTranslatorHintSchema,
});
export type TempleTranslatorHints = z.infer<typeof TempleTranslatorHintsSchema>;
