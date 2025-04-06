import z from "zod";
import { EndgameHint, EndgameHintSchema } from "./common.types";
import { PrimitiveAtom } from "jotai";

export const NewBossKeyHintSchema = z.object({
  id: z.number(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type NewBossKeyHint = z.infer<typeof BossKeyHintSchema>;

export const BossKeyHintsSchema = z.object({
  "Key 1": NewBossKeyHintSchema,
  "Key 2": NewBossKeyHintSchema,
  "Key 3": NewBossKeyHintSchema,
});

export const NewBossHintSchema = z.object({
  name: z.string(),
  item: z.string().default(""),
  checked: z.boolean().default(false),
  keys: BossKeyHintsSchema.optional(),
});

export const BossKeyHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string().default(""),
  checked: z.boolean().default(false),
});
export type BossKeyHint = z.infer<typeof BossKeyHintSchema>;

export const BossHintsSchema = z.object({
  name: z.string(),
  item: z.string().default(""),
  checked: z.boolean().default(false),
  keys: z.array(BossKeyHintSchema).default([]),
});
export type BossHints = z.infer<typeof BossHintsSchema>;

export const KeybearerHintSchema = z.object({
  item: z.string().default(""),
  checked: z.boolean().default(false),
});
export type KeybearerHint = z.infer<typeof KeybearerHintSchema>;

export const TranslatorHintSchema = z.object({
  id: z.number(),
  name: z.string(),
  firstValue: z.string().default(""),
  secondValue: z.string().default(""),
  proximity: z.string().default(""),
  checked: z.boolean().default(false),
});
export type TranslatorHint = z.infer<typeof TranslatorHintSchema>;

export const NewRegionKeybearerHintsSchema = z.record(
  z.string(),
  KeybearerHintSchema
);
export type NewRegionKeybearerHints = z.infer<
  typeof NewRegionKeybearerHintsSchema
>;

export const TempleKeybearerHintsSchema = z.object({
  industrialSite: KeybearerHintSchema,
  landingSite: KeybearerHintSchema,
  storageCavernA: KeybearerHintSchema,
});
export type TempleKeybearerHints = z.infer<typeof TempleKeybearerHintsSchema>;

export const AgonKeybearerHintsSchema = z.object({
  centralMiningStation: KeybearerHintSchema,
  mainReactor: KeybearerHintSchema,
});
export type AgonKeybearerHints = z.infer<typeof AgonKeybearerHintsSchema>;

export const KeybearerHintsWithNamesSchema = z.object({
  hints: NewRegionKeybearerHintsSchema,
  names: z.record(
    z.string(),
    z.object({
      lightWorld: z.string(),
      darkWorld: z.string(),
    })
  ),
});
export type KeybearerHintsWithNames = z.infer<
  typeof KeybearerHintsWithNamesSchema
>;

export const KeybearerHintsUpdateSchema = z.tuple([
  z.string(),
  KeybearerHintSchema,
]);
export type KeybearerHintsUpdate = z.infer<typeof KeybearerHintsUpdateSchema>;

export const NewRegionHintsSchema = z.object({
  "Temple Grounds": z.object({
    boss: z.object({
      name: z.literal("U-Mos Reward"),
      item: NewBossHintSchema.shape.item,
      checked: NewBossHintSchema.shape.checked,
      keys: z.literal(undefined),
    }),
    keybearerHints: z.object({
      industrialSite: z.object({
        lightWorldLocation: z.literal("Industrial Site"),
        darkWorldLocation: z.literal("Accursed Lake"),
        item: KeybearerHintSchema.shape.item,
        checked: KeybearerHintSchema.shape.checked,
      }),
      landingSite: z.object({
        lightWorldLocation: z.literal("Landing Site"),
        darkWorldLocation: z.literal("Defiled Shrine"),
        item: KeybearerHintSchema.shape.item,
        checked: KeybearerHintSchema.shape.checked,
      }),
      storageCavernA: z.object({
        lightWorldLocation: z.literal("Storage Cavern A"),
        darkWorldLocation: z.literal("Ing Reliquary"),
        item: KeybearerHintSchema.shape.item,
        checked: KeybearerHintSchema.shape.checked,
      }),
    }),
  }),
  // "Agon Wastes": z.object({
  //   boss: z.object({
  //     name: z.literal("Amorbis"),
  //     item: NewBossHintSchema.shape.item,
  //     checked: NewBossHintSchema.shape.checked,
  //     keys: BossKeyHintsSchema,
  //   }),
  //   keybearerHints: z.object({
  //     centralMiningStation: z.object({
  //       id: KeybearerHintSchema.shape.id,
  //       lightWorldLocation: z.literal("Central Mining Station"),
  //       darkWorldLocation: z.literal("Battleground"),
  //       item: KeybearerHintSchema.shape.item,
  //       checked: KeybearerHintSchema.shape.checked
  //     }),
  //     mainReactor: z.object({
  //       id: KeybearerHintSchema.shape.id,
  //       lightWorldLocation: z.literal("Main Reactor"),
  //       darkWorldLocation: z.literal("Dark Oasis"),
  //       item: KeybearerHintSchema.shape.item,
  //       checked: KeybearerHintSchema.shape.checked
  //     }),
  //   }),
  // }),
});
export type NewRegionHints = z.infer<typeof NewRegionHintsSchema>;

export const RegionHintsSchema = z.object({
  variant: z.enum(["temple", "agon", "torvus", "sanctuary"]),
  bossHints: BossHintsSchema,
  keybearerHints: z.array(KeybearerHintSchema),
  translatorHints: z.array(TranslatorHintSchema),
});
export type RegionHints = z.infer<typeof RegionHintsSchema>;

export const SkyTempleKeyHintSchema = EndgameHintSchema;
export type SkyTempleKeyHint = EndgameHint;
