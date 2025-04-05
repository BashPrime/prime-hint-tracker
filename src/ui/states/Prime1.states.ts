import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { unhintedItemsState } from "./App.states";
import {
  ArtifactHint,
  ArtifactHints,
  ArtifactHintsSchema,
  NewArtifactHint,
  NewArtifactHints,
  NewArtifactHintSchema,
  NewArtifactHintsSchema,
  PhazonSuitHint,
} from "@/types/Prime1.types";
import { HintOption } from "@/types/common.types";
import { createOptions } from "@/lib/utils";
import {
  PRIME_1_LOCATIONS_WITH_ITEMS,
  PRIME_1_MAJOR_UPGRADES,
} from "@/data/Prime1.data";

export const newArtifactHintsState = atomWithReset<NewArtifactHints>(
  NewArtifactHintsSchema.parse({
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
  (get, set, update: [keyof NewArtifactHints, NewArtifactHint]) => {
    const [key, value] = update;
    const updated = { ...get(newArtifactHintsState) };
    updated[key] = value;
    set(newArtifactHintsState, updated);
  }
);

export const artifactHintsState = atomWithReset<ArtifactHints>(
  ArtifactHintsSchema.parse([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ])
);

export const artifactHintsArraySelector = atom<ArtifactHint[]>((get) => {
  const artifactHints = get(newArtifactHintsState);
  const arr = [];
  const sortedEntries = Object.entries(artifactHints).sort(
    ([, valueA], [, valueB]) => {
      if (valueA.id < valueB.id) {
        return -1;
      } else if (valueA.id > valueB.id) {
        return 1;
      }
      return 0;
    }
  );

  for (const [key, artifact] of sortedEntries) {
    arr.push({
      ...artifact,
      name: key,
    });
  }

  return arr;
});

export const phazonSuitHintState = atomWithReset<PhazonSuitHint>({
  location: "",
  checked: false,
});

export const prime1TrackerSelector = atom((get) => {
  const unhintedItems = get(unhintedItemsState);
  const artifacts = get(artifactHintsState);
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
