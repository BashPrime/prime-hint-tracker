import {
  KeybearerHint,
  KeybearerHintsUpdate,
  NewRegionKeybearerHints,
  TorvusKeybearerHints,
  TorvusKeybearerHintsSchema,
} from "@/types/Prime2.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

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
