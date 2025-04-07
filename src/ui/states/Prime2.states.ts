import {
  NewRegionHints,
  RegionHints,
  SkyTempleKeyHint,
  SkyTempleKeyHintSchema,
  TranslatorHintSchema,
} from "@/types/Prime2.types";
import { atom } from "jotai";
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
import {
  templeBossHintsState,
  templeKeybearerHintsState,
  templeTranslatorHintsState,
} from "./prime2/Temple.states";
import {
  agonBossHintsState,
  agonKeybearerHintsState,
  agonTranslatorHintsState,
} from "./prime2/Agon.states";
import {
  torvusBossHintsState,
  torvusKeybearerHintsState,
  torvusTranslatorHintsState,
} from "./prime2/Torvus.states";
import {
  sanctuaryBossHintsState,
  sanctuaryKeybearerHintsState,
  sanctuaryTranslatorHintsState,
} from "./prime2/Sanctuary.states";
import {
  TempleBossHints,
  TempleBossHintsSchema,
  TempleKeybearerHintsSchema,
  TempleTranslatorHintsSchema,
} from "@/types/prime2/Temple.types";
import {
  AgonBossHintsSchema,
  AgonKeybearerHintsSchema,
  AgonTranslatorHintsSchema,
} from "@/types/prime2/Agon.types";
import {
  TorvusBossHintsSchema,
  TorvusKeybearerHintsSchema,
  TorvusTranslatorHintsSchema,
} from "@/types/prime2/Torvus.types";
import {
  SanctuaryBossHintsSchema,
  SanctuaryKeybearerHintsSchema,
  SanctuaryTranslatorHintsSchema,
} from "@/types/prime2/Sanctuary.types";

export const keybearerRoomsState = atom<KeybearerRooms>("both");

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
  sanctuaryEntrance: {
    lightWorld: "Sanctuary Entrance",
    darkWorld: "Hive Entrance",
  },
});

export const translatorHintsNamesAtom = atom({
  mainEnergyController: "Main Energy Controller",
  transportToAgonWastes: "Transport to Agon Wastes",
  fortressTransportAccess: "Fortress Transport Access",
  meetingGrounds: "Meeting Grounds",
  pathOfEyes: "Path of Eyes",
  agonEnergyController: "Agon Energy Controller",
  miningPlaza: "Mining Plaza",
  portalTerminal: "Portal Terminal",
  miningStationA: "Mining Station A",
  miningStationB: "Mining Station B",
  torvusEnergyController: "Torvus Energy Controller",
  pathOfRoots: "Path of Roots",
  undergroundTunnel: "Underground Tunnel",
  catacombs: "Catacombs",
  gatheringHall: "Gathering Hall",
  trainingChamber: "Training Chamber",
  sanctuaryEnergyController: "Sanctuary Energy Controller",
  sanctuaryEntrance: "Sanctuary Entrance",
  hallOfCombatMastery: "Hall of Combat Mastery",
  mainGyroChamber: "Main Gyro Chamber",
  mainResearch: "Main Research",
  watchStation: "Watch Station",
});

export const regionHintsAtomsSelector = atom({
  templeGrounds: {
    name: "Temple Grounds",
    variant: "temple",
    bossHints: templeBossHintsState,
    keybearerHints: templeKeybearerHintsState,
    translatorHints: templeTranslatorHintsState,
  },
  agonWastes: {
    name: "Agon Wastes",
    variant: "agon",
    bossHints: agonBossHintsState,
    keybearerHints: agonKeybearerHintsState,
    translatorHints: agonTranslatorHintsState,
  },
  torvusBog: {
    name: "Torvus Bog",
    variant: "torvus",
    bossHints: torvusBossHintsState,
    keybearerHints: torvusKeybearerHintsState,
    translatorHints: torvusTranslatorHintsState,
  },
  sanctuaryFortress: {
    name: "Sanctuary Fortress",
    variant: "sanctuary",
    bossHints: sanctuaryBossHintsState,
    keybearerHints: sanctuaryKeybearerHintsState,
    translatorHints: sanctuaryTranslatorHintsState,
  },
});

export const templeHintsSelector = atom<
  NewRegionHints,
  [update: NewRegionHints],
  void
>(
  (get) => {
    const bossHints = get(templeBossHintsState);
    const keybearerHints = get(templeKeybearerHintsState);
    const translatorHints = get(templeTranslatorHintsState);

    return {
      bossHints: bossHints,
      keybearerHints: keybearerHints,
      translatorHints: translatorHints,
    };
  },
  (_, set, update: NewRegionHints) => {
    set(templeBossHintsState, TempleBossHintsSchema.parse(update.bossHints));
    set(
      templeKeybearerHintsState,
      TempleKeybearerHintsSchema.parse(update.keybearerHints)
    );
    set(
      templeTranslatorHintsState,
      TempleTranslatorHintsSchema.parse(update.translatorHints)
    );
  }
);

export const agonHintsSelector = atom<
  NewRegionHints,
  [update: NewRegionHints],
  void
>(
  (get) => {
    const bossHints = get(agonBossHintsState);
    const keybearerHints = get(agonKeybearerHintsState);
    const translatorHints = get(agonTranslatorHintsState);

    return {
      bossHints: bossHints,
      keybearerHints: keybearerHints,
      translatorHints: translatorHints,
    };
  },
  (_, set, update: NewRegionHints) => {
    set(agonBossHintsState, AgonBossHintsSchema.parse(update.bossHints));
    set(
      agonKeybearerHintsState,
      AgonKeybearerHintsSchema.parse(update.keybearerHints)
    );
    set(
      agonTranslatorHintsState,
      AgonTranslatorHintsSchema.parse(update.translatorHints)
    );
  }
);

export const torvusHintsSelector = atom<
  NewRegionHints,
  [update: NewRegionHints],
  void
>(
  (get) => {
    const bossHints = get(torvusBossHintsState);
    const keybearerHints = get(torvusKeybearerHintsState);
    const translatorHints = get(torvusTranslatorHintsState);

    return {
      bossHints: bossHints,
      keybearerHints: keybearerHints,
      translatorHints: translatorHints,
    };
  },
  (_, set, update: NewRegionHints) => {
    set(torvusBossHintsState, TorvusBossHintsSchema.parse(update.bossHints));
    set(
      torvusKeybearerHintsState,
      TorvusKeybearerHintsSchema.parse(update.keybearerHints)
    );
    set(
      torvusTranslatorHintsState,
      TorvusTranslatorHintsSchema.parse(update.translatorHints)
    );
  }
);

export const sanctuaryHintsSelector = atom<
  NewRegionHints,
  [update: NewRegionHints],
  void
>(
  (get) => {
    const bossHints = get(sanctuaryBossHintsState);
    const keybearerHints = get(sanctuaryKeybearerHintsState);
    const translatorHints = get(sanctuaryTranslatorHintsState);

    return {
      bossHints: bossHints,
      keybearerHints: keybearerHints,
      translatorHints: translatorHints,
    };
  },
  (_, set, update: NewRegionHints) => {
    set(
      sanctuaryBossHintsState,
      SanctuaryBossHintsSchema.parse(update.bossHints)
    );
    set(
      sanctuaryKeybearerHintsState,
      SanctuaryKeybearerHintsSchema.parse(update.keybearerHints)
    );
    set(
      sanctuaryTranslatorHintsState,
      SanctuaryTranslatorHintsSchema.parse(update.translatorHints)
    );
  }
);

export const templeGroundsHintsState = atomWithReset<RegionHints>({
  variant: "temple",
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
  const templeHints = get(templeHintsSelector);
  const agonHints = get(agonHintsSelector);
  const torvusHints = get(torvusHintsSelector);
  const sanctuaryHints = get(sanctuaryHintsSelector);
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
