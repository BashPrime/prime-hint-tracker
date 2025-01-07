import {
  BossHintsSchema,
  KeybearerHintSchema,
  RegionHints,
  SkyTempleKeyHint,
  SkyTempleKeyHintSchema,
  UnhintedItem,
} from "@/types/Prime2.types";
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
    {
      id: 1,
      name: "Main Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Transport to Agon Wastes",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Fortress Transport Access",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Meeting Grounds",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
      name: "Path of Eyes",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
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
    {
      id: 1,
      name: "Agon Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Mining Plaza",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Portal Terminal",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Mining Station A",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
      name: "Mining Station B",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
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
    {
      id: 1,
      name: "Torvus Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Path of Roots",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Underground Tunnel",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Catacombs",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
      name: "Gathering Hall",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 6,
      name: "Training Chamber",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
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
    {
      id: 1,
      name: "Sanctuary Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Sanctuary Entrance",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Hall of Combat Mastery",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Main Gyro Chamber",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
      name: "Main Research",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 6,
      name: "Watch Station",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
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
