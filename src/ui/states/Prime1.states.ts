import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { unhintedItemsState } from "./App.states";
import {
  ArtifactHint,
  ArtifactHints,
  ArtifactHintsSchema,
  PhazonSuitHint,
} from "@/types/Prime1.types";
import { HintOption } from "@/types/common.types";
import { createOptions } from "@/lib/utils";
import {
  PRIME_1_LOCATIONS_WITH_ITEMS,
  PRIME_1_MAJOR_UPGRADES,
} from "@/data/Prime1.data";

export const newArtifactHintsState = atomWithReset<ArtifactHints>(
  ArtifactHintsSchema.parse({
    Truth: {},
    Strength: {},
    Elder: {},
    Wild: {},
    Lifegiver: {},
    Warrior: {},
    Chozo: {},
    Nature: {},
    Sun: {},
    World: {},
    Spirit: {},
    Newborn: {},
  })
);

export const updateArtifactHintAtom = atom(
  (get) => get(newArtifactHintsState),
  (get, set, update: [keyof ArtifactHints, ArtifactHint]) => {
    const [key, value] = update;
    const updated = { ...get(newArtifactHintsState) };
    updated[key] = value;
    set(newArtifactHintsState, updated);
  }
);

export const artifactHintsArraySelector = atom((get) => {
  const artifactHints = get(newArtifactHintsState);
  return Object.entries(artifactHints)
    .map(([key, value], idx) => ({
      key,
      value,
      id: idx + 1,
    }))
    .sort((a, b) => a.id - b.id);
});

export const phazonSuitHintState = atomWithReset<PhazonSuitHint>({
  location: "",
  checked: false,
});

export const prime1TrackerSelector = atom((get) => {
  const unhintedItems = get(unhintedItemsState);
  const artifacts = get(newArtifactHintsState);
  const phazonSuit = get(phazonSuitHintState);

  return {
    unhintedItems,
    artifacts,
    phazonSuit,
  };
});

export const prime1UnhintedItemOptionsSelector = atom<HintOption[]>(
  createOptions([...PRIME_1_MAJOR_UPGRADES], true)
);

export const prime1UnhintedLocationOptionsSelector = atom<HintOption[]>(
  createOptions([...PRIME_1_LOCATIONS_WITH_ITEMS], true)
);
