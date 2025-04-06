import {
  AgonKeybearerHints,
  AgonKeybearerHintsSchema,
  BossHintsSchema,
  BossKeyHintsSchema,
  KeybearerHint,
  KeybearerHintSchema,
  KeybearerHintsUpdate,
  KeybearerHintsUpdateSchema,
  KeybearerHintsWithNames,
  NewRegionHints,
  NewRegionHintsSchema,
  NewRegionKeybearerHints,
  RegionHints,
  SanctuaryKeybearerHints,
  SanctuaryKeybearerHintsSchema,
  SkyTempleKeyHint,
  SkyTempleKeyHintSchema,
  TempleKeybearerHints,
  TempleKeybearerHintsSchema,
  TorvusKeybearerHints,
  TorvusKeybearerHintsSchema,
  TranslatorHintSchema,
} from "@/types/Prime2.types";
import { atom, WritableAtom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { KeybearerRooms } from "src/shared/types";
import { legacyHintsEnabledState, unhintedItemsState } from "./App.states";
import { HintOption } from "@/types/common.types";
import { createOptions } from "@/lib/utils";
import {
  PRIME_2_LEGACY_MAJORS_CATEGORIES,
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_MAJOR_UPGRADES,
  PRIME_2_PICKUP_FEATURES,
  PRIME_2_PROGRESSIVE_MAJORS,
} from "@/data/Prime2.data";

export const keybearerHintsNamesAtom = atom({
  industrialSite: {
    lightWorld: "Industrial Site",
    darkWorld: "Accursed Lake",
  },
  landingSite: {
    lightWorld: "Landing Site",
    darkWorld: "Defiled Shrine",
  },
  storageCavernA: {
    lightWorld: "Storage Cavern A",
    darkWorld: "Ing Reliquary",
  },
  centralMiningStation: {
    lightWorld: "Central Mining Station",
    darkWorld: "Battleground",
  },
  mainReactor: {
    lightWorld: "Main Reactor",
    darkWorld: "Dark Oasis",
  },
  catacombs: {
    lightWorld: "Catacombs",
    darkWorld: "Dungeon",
  },
  torvusLagoon: {
    lightWorld: "Torvus Lagoon",
    darkWorld: "Poisoned Bog",
  },
  dynamoWorks: {
    lightWorld: "Dynamo Works",
    darkWorld: "Hive Dynamo Works",
  },
  sancEntrance: {
    lightWorld: "Sanctuary Entrance",
    darkWorld: "Hive Entrance",
  },
});

export const _templeKeybearerHintsState = atomWithReset<TempleKeybearerHints>(
  TempleKeybearerHintsSchema.parse({
    industrialSite: {},
    landingSite: {},
    storageCavernA: {},
  })
);

export const templeKeybearerHintsAtom = atom<
  NewRegionKeybearerHints,
  [update: KeybearerHintsUpdate],
  void
>(
  (get) => get(_templeKeybearerHintsState),
  (get, set, update: [string, KeybearerHint]) => {
    const updated = { ...get(_templeKeybearerHintsState) };
    const [key, value] = update;
    updated[key as keyof TempleKeybearerHints] = value;
    set(_templeKeybearerHintsState, updated);
  }
);

export const _agonKeybearerHintsState = atomWithReset<AgonKeybearerHints>(
  AgonKeybearerHintsSchema.parse({
    centralMiningStation: {},
    mainReactor: {},
  })
);

export const agonKeybearerHintsAtom = atom<
  NewRegionKeybearerHints,
  [update: KeybearerHintsUpdate],
  void
>(
  (get) => get(_agonKeybearerHintsState),
  (get, set, update: [string, KeybearerHint]) => {
    const updated = { ...get(_agonKeybearerHintsState) };
    const [key, value] = update;
    updated[key as keyof AgonKeybearerHints] = value;
    set(_agonKeybearerHintsState, updated);
  }
);

export const _torvusKeybearerHintsState = atomWithReset<TorvusKeybearerHints>(
  TorvusKeybearerHintsSchema.parse({
    torvusLagoon: {},
    catacombs: {},
  })
);

export const torvusKeybearerHintsAtom = atom<
  NewRegionKeybearerHints,
  [update: KeybearerHintsUpdate],
  void
>(
  (get) => get(_torvusKeybearerHintsState),
  (get, set, update: [string, KeybearerHint]) => {
    const updated = { ...get(_torvusKeybearerHintsState) };
    const [key, value] = update;
    updated[key as keyof TorvusKeybearerHints] = value;
    set(_torvusKeybearerHintsState, updated);
  }
);

export const _sanctuaryKeybearerHintsState = atomWithReset<SanctuaryKeybearerHints>(
  SanctuaryKeybearerHintsSchema.parse({
    sancEntrance: {},
    dynamoWorks: {},
  })
);

export const sanctuaryKeybearerHintsAtom = atom<
  NewRegionKeybearerHints,
  [update: KeybearerHintsUpdate],
  void
>(
  (get) => get(_sanctuaryKeybearerHintsState),
  (get, set, update: [string, KeybearerHint]) => {
    const updated = { ...get(_sanctuaryKeybearerHintsState) };
    const [key, value] = update;
    updated[key as keyof SanctuaryKeybearerHints] = value;
    set(_sanctuaryKeybearerHintsState, updated);
  }
);

export const regionHintsAtomsSelector = atom({
  templeGrounds: {
    keybearerHints: templeKeybearerHintsAtom,
  },
  agonWastes: {
    keybearerHints: agonKeybearerHintsAtom,
  },
  torvusBog: {
    keybearerHints: torvusKeybearerHintsAtom,
  },
  sanctuaryFortress: {
    keybearerHints: sanctuaryKeybearerHintsAtom,
  },
});

export const templeGroundsHintsState = atomWithReset<RegionHints>({
  variant: "temple",
  bossHints: BossHintsSchema.parse({
    name: "U-Mos Reward",
  }),
  keybearerHints: [
    KeybearerHintSchema.parse({
      lightWorldLocation: "Industrial Site",
      darkWorldLocation: "Accursed Lake",
    }),
    KeybearerHintSchema.parse({
      lightWorldLocation: "Landing Site",
      darkWorldLocation: "Defiled Shrine",
    }),
    KeybearerHintSchema.parse({
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

export const prime2TrackerSelector = atom((get) => {
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
      sanctuary: sanctuaryHints,
    },
    unhintedItems,
    skyTempleKeys,
  };
});

export const keybearerRoomsState = atom<KeybearerRooms>("both");

export const prime2UnhintedItemOptionsSelector = atom<HintOption[]>((get) => {
  const legacyHintsEnabled = get(legacyHintsEnabledState);
  const itemFeaturalOptions = createOptions(
    [
      ...PRIME_2_MAJOR_UPGRADES,
      ...PRIME_2_PROGRESSIVE_MAJORS,
      ...PRIME_2_PICKUP_FEATURES,
    ],
    true
  );
  const itemLegacyOptions = createOptions(
    [
      ...PRIME_2_MAJOR_UPGRADES,
      ...PRIME_2_PROGRESSIVE_MAJORS,
      ...PRIME_2_LEGACY_MAJORS_CATEGORIES,
    ],
    true
  );
  return legacyHintsEnabled ? itemLegacyOptions : itemFeaturalOptions;
});

export const prime2UnhintedLocationOptionsSelector = atom<HintOption[]>(
  createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)
);
