import { z } from "zod";

export const ArtifactHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type ArtifactHint = z.infer<typeof ArtifactHintSchema>;

export const ArtifactHintsSchema = z.tuple([
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Truth").catch("Truth"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Strength").catch("Strength"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Elder").catch("Elder"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Wild").catch("Wild"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Lifegiver").catch("Lifegiver"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Warrior").catch("Warrior"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Chozo").catch("Chozo"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Nature").catch("Nature"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Sun").catch("Sun"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("World").catch("World"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Spirit").catch("Spirit"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
  z.object({
    id: ArtifactHintSchema.shape.id,
    name: z.literal("Newborn").catch("Newborn"),
    location: ArtifactHintSchema.shape.location,
    checked: ArtifactHintSchema.shape.checked,
  }),
]);
export type ArtifactHints = z.infer<typeof ArtifactHintsSchema>;

export const PhazonSuitHintSchema = z.object({
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type PhazonSuitHint = z.infer<typeof PhazonSuitHintSchema>;
