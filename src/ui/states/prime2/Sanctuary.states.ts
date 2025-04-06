import {
  BossHints,
  BossHintsSchema,
  KeybearerHint,
  KeybearerHintsUpdate,
  NewBossKeyHintSchema,
  NewRegionKeybearerHints,
} from "@/types/Prime2.types";
import {
  SanctuaryKeybearerHints,
  SanctuaryKeybearerHintsSchema,
} from "@/types/prime2/Sanctuary.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const sanctuaryBossHintsState = atomWithReset<BossHints>(
  BossHintsSchema.parse({
    keys: {
      "Key 1": NewBossKeyHintSchema.parse({}),
      "Key 2": NewBossKeyHintSchema.parse({}),
      "Key 3": NewBossKeyHintSchema.parse({}),
    },
  })
);

const _sanctuaryKeybearerHintsState = atomWithReset<SanctuaryKeybearerHints>(
  SanctuaryKeybearerHintsSchema.parse({
    sancEntrance: {},
    dynamoWorks: {},
  })
);

export const sanctuaryKeybearerHintsState = atom<
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
