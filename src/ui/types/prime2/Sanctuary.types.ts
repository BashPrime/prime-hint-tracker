import { z } from "zod";
import { KeybearerHintSchema } from "../Prime2.types";

export const SanctuaryKeybearerHintsSchema = z.object({
  sancEntrance: KeybearerHintSchema,
  dynamoWorks: KeybearerHintSchema,
});
export type SanctuaryKeybearerHints = z.infer<
  typeof SanctuaryKeybearerHintsSchema
>;
