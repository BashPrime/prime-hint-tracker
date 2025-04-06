import {
  KeybearerHint,
  KeybearerHintsUpdate,
  NewBossKeyHintSchema,
  NewRegionKeybearerHints,
} from "@/types/Prime2.types";
import {
  TorvusBossHints,
  TorvusBossHintsSchema,
  TorvusKeybearerHints,
  TorvusKeybearerHintsSchema,
} from "@/types/prime2/Torvus.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const torvusBossHintsState = atomWithReset<TorvusBossHints>(
  TorvusBossHintsSchema.parse({
    keys: {
      "Key 1": NewBossKeyHintSchema.parse({}),
      "Key 2": NewBossKeyHintSchema.parse({}),
      "Key 3": NewBossKeyHintSchema.parse({}),
    },
  })
);

const _torvusKeybearerHintsState = atomWithReset<TorvusKeybearerHints>(
  TorvusKeybearerHintsSchema.parse({
    torvusLagoon: {},
    catacombs: {},
  })
);

export const torvusKeybearerHintsState = atom<
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
