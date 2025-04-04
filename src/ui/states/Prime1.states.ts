import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { unhintedItemsState } from "./App.states";
import { ArtifactHint, ArtifactHintSchema } from "@/types/Prime1.types";
import { HintOption } from "@/types/common.types";
import { createOptions } from "@/lib/utils";
import {
  PRIME_1_LOCATIONS_WITH_ITEMS,
  PRIME_1_MAJOR_UPGRADES,
} from "@/data/Prime1.data";

export const artifactHintsState = atomWithReset<ArtifactHint[]>([
  ArtifactHintSchema.parse({ id: 1, name: "Truth" }),
  ArtifactHintSchema.parse({ id: 2, name: "Strength" }),
  ArtifactHintSchema.parse({ id: 3, name: "Elder" }),
  ArtifactHintSchema.parse({ id: 4, name: "Wild" }),
  ArtifactHintSchema.parse({ id: 5, name: "Lifegiver" }),
  ArtifactHintSchema.parse({ id: 6, name: "Warrior" }),
  ArtifactHintSchema.parse({ id: 7, name: "Chozo" }),
  ArtifactHintSchema.parse({ id: 8, name: "Nature" }),
  ArtifactHintSchema.parse({ id: 9, name: "Sun" }),
  ArtifactHintSchema.parse({ id: 10, name: "World" }),
  ArtifactHintSchema.parse({ id: 11, name: "Spirit" }),
  ArtifactHintSchema.parse({ id: 12, name: "Newborn" }),
]);

export const phazonSuitHintState = atomWithReset<{
  location: string;
  checked: boolean;
}>({
  location: "",
  checked: false,
});

export const prime1TrackerSelector = atom((get) => {
  const unhintedItems = get(unhintedItemsState);
  const artifacts = get(artifactHintsState);

  return {
    unhintedItems,
    artifacts,
  };
});

export const prime1UnhintedItemOptionsSelector = atom<HintOption[]>(
  createOptions([...PRIME_1_MAJOR_UPGRADES], true)
);

export const prime1UnhintedLocationOptionsSelector = atom<HintOption[]>(
  createOptions([...PRIME_1_LOCATIONS_WITH_ITEMS], true)
);
