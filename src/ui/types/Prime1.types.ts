import { z } from "zod";
import { EndgameHint, EndgameHintSchema } from "./common.types";

export const ArtifactHintSchema = EndgameHintSchema;
export type ArtifactHint = EndgameHint;

export const PhazonSuitHintSchema = z.object({
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type PhazonSuitHint = z.infer<typeof PhazonSuitHintSchema>;
