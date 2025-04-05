import { z } from "zod";

export const ArtifactHintSchema = z.object({
  id: z.number(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type ArtifactHint = z.infer<typeof ArtifactHintSchema>;

export const ArtifactHintsSchema = z.object({
  Truth: ArtifactHintSchema,
  Strength: ArtifactHintSchema,
  Elder: ArtifactHintSchema,
  Wild: ArtifactHintSchema,
  Lifegiver: ArtifactHintSchema,
  Warrior: ArtifactHintSchema,
  Chozo: ArtifactHintSchema,
  Nature: ArtifactHintSchema,
  Sun: ArtifactHintSchema,
  World: ArtifactHintSchema,
  Spirit: ArtifactHintSchema,
  Newborn: ArtifactHintSchema,
});
export type ArtifactHints = z.infer<typeof ArtifactHintsSchema>;

export const PhazonSuitHintSchema = z.object({
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type PhazonSuitHint = z.infer<typeof PhazonSuitHintSchema>;
