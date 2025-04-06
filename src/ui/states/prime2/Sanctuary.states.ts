import {
  KeybearerHint,
  KeybearerHintsUpdate,
  NewRegionKeybearerHints,
  SanctuaryKeybearerHints,
  SanctuaryKeybearerHintsSchema,
} from "@/types/Prime2.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

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
