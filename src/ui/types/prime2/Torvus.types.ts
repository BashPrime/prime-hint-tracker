import { z } from "zod";
import { KeybearerHintSchema } from "../Prime2.types";

export const TorvusKeybearerHintsSchema = z.object({
  torvusLagoon: KeybearerHintSchema,
  catacombs: KeybearerHintSchema,
});
export type TorvusKeybearerHints = z.infer<typeof TorvusKeybearerHintsSchema>;
