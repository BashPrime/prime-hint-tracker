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
    Truth: { id: 1 },
    Strength: { id: 2 },
    Elder: { id: 3 },
    Wild: { id: 4 },
    Lifegiver: { id: 5 },
    Warrior: { id: 6 },
    Chozo: { id: 7 },
    Nature: { id: 8 },
    Sun: { id: 9 },
    World: { id: 10 },
    Spirit: { id: 11 },
    Newborn: { id: 12 },
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
  const arr = [];
  const sortedEntries = Object.entries(artifactHints).sort(
    ([, valueA], [, valueB]) => valueA.id - valueB.id
  );

  for (const [key, artifact] of sortedEntries) {
    arr.push({ key, value: artifact });
  }

  return arr;
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
