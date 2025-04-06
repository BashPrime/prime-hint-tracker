import {
  KeybearerHint,
  KeybearerHintsUpdate,
  NewRegionKeybearerHints,
  TempleKeybearerHints,
  TempleKeybearerHintsSchema,
} from "@/types/Prime2.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

const _templeKeybearerHintsState = atomWithReset<TempleKeybearerHints>(
  TempleKeybearerHintsSchema.parse({
    industrialSite: {},
    landingSite: {},
    storageCavernA: {},
  })
);

export const templeKeybearerHintsState = atom<
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
