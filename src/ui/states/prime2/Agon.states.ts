import {
  KeybearerHint,
  KeybearerHintsUpdate,
  NewBossKeyHintSchema,
  NewRegionKeybearerHints,
} from "@/types/Prime2.types";
import {
  AgonBossHints,
  AgonBossHintsSchema,
  AgonKeybearerHints,
  AgonKeybearerHintsSchema,
  AgonTranslatorHintsSchema,
} from "@/types/prime2/Agon.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const agonBossHintsState = atomWithReset<AgonBossHints>(
  AgonBossHintsSchema.parse({
    keys: {
      "Key 1": NewBossKeyHintSchema.parse({}),
      "Key 2": NewBossKeyHintSchema.parse({}),
      "Key 3": NewBossKeyHintSchema.parse({}),
    },
  })
);

const _agonKeybearerHintsState = atomWithReset<AgonKeybearerHints>(
  AgonKeybearerHintsSchema.parse({
    centralMiningStation: {},
    mainReactor: {},
  })
);

export const agonKeybearerHintsState = atom<
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

export const agonTranslatorHintsState = atomWithReset(
  AgonTranslatorHintsSchema.parse({
    agonEnergyController: {},
    miningPlaza: {},
    portalTerminal: {},
    miningStationA: {},
    miningStationB: {},
  })
);
