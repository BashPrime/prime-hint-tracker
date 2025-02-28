import { z } from "zod";

export const ArtifactHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type ArtifactHint = z.infer<typeof ArtifactHintSchema>;