import {
  PRIME_3_LOCATIONS_WITH_ITEMS,
  PRIME_3_MAJOR_UPGRADES,
  PRIME_3_PROGRESSIVE_MAJORS,
} from "@/data/Prime3.data";
import { createOptions } from "@/lib/utils";
import { HintOption, ItemHint, ItemHintSchema } from "@/types/common.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { unhintedItemsState } from "./App.states";

export const hyperMissileHintState = atomWithReset<ItemHint>(
  ItemHintSchema.parse({})
);
export const hyperGrappleHintState = atomWithReset<ItemHint>(
  ItemHintSchema.parse({})
);

export const prime3TrackerSelector = atom((get) => {
  const hyperMissile = get(hyperMissileHintState);
  const hyperGrapple = get(hyperGrappleHintState);
  const unhintedItems = get(unhintedItemsState);

  return {
    hyperMissile,
    hyperGrapple,
    unhintedItems,
  };
});

export const prime3UnhintedItemOptionsSelector = atom<HintOption[]>(
  createOptions(
    [...PRIME_3_MAJOR_UPGRADES, ...PRIME_3_PROGRESSIVE_MAJORS],
    true
  )
);

export const prime3UnhintedLocationOptionsSelector = atom<HintOption[]>(
  createOptions([...PRIME_3_LOCATIONS_WITH_ITEMS], true)
);
