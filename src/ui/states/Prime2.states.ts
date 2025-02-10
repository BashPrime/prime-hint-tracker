import {
  BossHintsSchema,
  KeybearerHintSchema,
  RegionHints,
  SkyTempleKeyHint,
  SkyTempleKeyHintSchema,
  TranslatorHintSchema,
  UnhintedItem,
} from "@/types/Prime2.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const templeGroundsHintsState = atomWithReset<RegionHints>({
  variant: "temple",
  bossHints: BossHintsSchema.parse({
    name: "U-Mos Reward",
  }),
  keybearerHints: [
    KeybearerHintSchema.parse({
      id: 1,
      lightWorldLocation: "Industrial Site",
      darkWorldLocation: "Accursed Lake",
    }),
    KeybearerHintSchema.parse({
      id: 2,
      lightWorldLocation: "Landing Site",
      darkWorldLocation: "Defiled Shrine",
    }),
    KeybearerHintSchema.parse({
      id: 3,
      lightWorldLocation: "Storage Cavern A",
      darkWorldLocation: "Ing Reliquary",
    }),
  ],
  translatorHints: [
    TranslatorHintSchema.parse({
      id: 1,
      name: "Main Energy Controller",
    }),
    TranslatorHintSchema.parse({
      id: 2,
      name: "Transport to Agon Wastes",
    }),
    TranslatorHintSchema.parse({
      id: 3,
      name: "Meeting Grounds",
    }),
    TranslatorHintSchema.parse({
      id: 4,
      name: "Fortress Transport Access",
    }),
    TranslatorHintSchema.parse({
      id: 5,
      name: "Path of Eyes",
    }),
  ],
});
export const agonHintsState = atomWithReset<RegionHints>({
  variant: "agon",
  bossHints: BossHintsSchema.parse({
    name: "Amorbis",
    keys: [
      { id: 1, name: "Key 1" },
      { id: 2, name: "Key 2" },
      { id: 3, name: "Key 3" },
    ],
  }),
  keybearerHints: [
    KeybearerHintSchema.parse({
      id: 1,
      lightWorldLocation: "Central Mining Station",
      darkWorldLocation: "Battleground",
    }),
    KeybearerHintSchema.parse({
      id: 2,
      lightWorldLocation: "Main Reactor",
      darkWorldLocation: "Dark Oasis",
    }),
  ],
  translatorHints: [
    TranslatorHintSchema.parse({
      id: 1,
      name: "Agon Energy Controller",
    }),
    TranslatorHintSchema.parse({
      id: 2,
      name: "Mining Plaza",
    }),
    TranslatorHintSchema.parse({
      id: 3,
      name: "Portal Terminal",
    }),
    TranslatorHintSchema.parse({
      id: 4,
      name: "Mining Station A",
    }),
    TranslatorHintSchema.parse({
      id: 5,
      name: "Mining Station B",
    }),
  ],
});
export const torvusHintsState = atomWithReset<RegionHints>({
  variant: "torvus",
  bossHints: BossHintsSchema.parse({
    name: "Chykka",
    keys: [
      { id: 1, name: "Key 1" },
      { id: 2, name: "Key 2" },
      { id: 3, name: "Key 3" },
    ],
  }),
  keybearerHints: [
    KeybearerHintSchema.parse({
      id: 1,
      lightWorldLocation: "Torvus Lagoon",
      darkWorldLocation: "Poisoned Bog",
    }),
    KeybearerHintSchema.parse({
      id: 2,
      lightWorldLocation: "Catacombs",
      darkWorldLocation: "Dungeon",
    }),
  ],
  translatorHints: [
    TranslatorHintSchema.parse({
      id: 1,
      name: "Torvus Energy Controller",
    }),
    TranslatorHintSchema.parse({
      id: 2,
      name: "Path of Roots",
    }),
    TranslatorHintSchema.parse({
      id: 3,
      name: "Underground Tunnel",
    }),
    TranslatorHintSchema.parse({
      id: 4,
      name: "Catacombs",
    }),
    TranslatorHintSchema.parse({
      id: 5,
      name: "Gathering Hall",
    }),
    TranslatorHintSchema.parse({
      id: 6,
      name: "Training Chamber",
    }),
  ],
});
export const sanctuaryHintsState = atomWithReset<RegionHints>({
  variant: "sanctuary",
  bossHints: BossHintsSchema.parse({
    name: "Quadraxis",
    keys: [
      { id: 1, name: "Key 1" },
      { id: 2, name: "Key 2" },
      { id: 3, name: "Key 3" },
    ],
  }),
  keybearerHints: [
    KeybearerHintSchema.parse({
      id: 1,
      lightWorldLocation: "Dynamo Works",
      darkWorldLocation: "Hive Dynamo Works",
    }),
    KeybearerHintSchema.parse({
      id: 2,
      lightWorldLocation: "Sanctuary Entrance",
      darkWorldLocation: "Hive Entrance",
    }),
  ],
  translatorHints: [
    TranslatorHintSchema.parse({
      id: 1,
      name: "Sanctuary Energy Controller",
    }),
    TranslatorHintSchema.parse({
      id: 2,
      name: "Sanctuary Entrance",
    }),
    TranslatorHintSchema.parse({
      id: 3,
      name: "Hall of Combat Mastery",
    }),
    TranslatorHintSchema.parse({
      id: 4,
      name: "Main Gyro Chamber",
    }),
    TranslatorHintSchema.parse({
      id: 5,
      name: "Main Research",
    }),
    TranslatorHintSchema.parse({
      id: 6,
      name: "Watch Station",
    }),
  ],
});

export const unhintedItemsState = atomWithReset<UnhintedItem[]>([]);

export const skyTempleKeyHintsState = atomWithReset<SkyTempleKeyHint[]>([
  SkyTempleKeyHintSchema.parse({ id: 1, name: "Key 1" }),
  SkyTempleKeyHintSchema.parse({ id: 2, name: "Key 2" }),
  SkyTempleKeyHintSchema.parse({ id: 3, name: "Key 3" }),
  SkyTempleKeyHintSchema.parse({ id: 4, name: "Key 4" }),
  SkyTempleKeyHintSchema.parse({ id: 5, name: "Key 5" }),
  SkyTempleKeyHintSchema.parse({ id: 6, name: "Key 6" }),
  SkyTempleKeyHintSchema.parse({ id: 7, name: "Key 7" }),
  SkyTempleKeyHintSchema.parse({ id: 8, name: "Key 8" }),
  SkyTempleKeyHintSchema.parse({ id: 9, name: "Key 9" }),
]);

export const echoesTrackerSelector = atom((get) => {
  const templeHints = get(templeGroundsHintsState);
  const agonHints = get(agonHintsState);
  const torvusHints = get(torvusHintsState);
  const sanctuaryHints = get(sanctuaryHintsState);
  const unhintedItems = get(unhintedItemsState);
  const skyTempleKeys = get(skyTempleKeyHintsState);

  return {
    regions: {
      temple: templeHints,
      agon: agonHints,
      torvus: torvusHints,
      sanctuary: sanctuaryHints
    },
    unhintedItems,
    skyTempleKeys
  }  
});
