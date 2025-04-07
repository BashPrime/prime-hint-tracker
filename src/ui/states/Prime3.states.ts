import {
  PRIME_3_LOCATIONS_WITH_ITEMS,
  PRIME_3_MAJOR_UPGRADES,
  PRIME_3_PROGRESSIVE_MAJORS,
} from "@/data/Prime3.data";
import { createOptions } from "@/lib/utils";
import { HintOption, ItemHint, ItemHintSchema } from "@/types/common.types";
import { atom } from "jotai";

export const hyperMissileHintState = atom<ItemHint>(ItemHintSchema.parse({}));
export const hyperGrappleHintState = atom<ItemHint>(ItemHintSchema.parse({}));

export const prime3UnhintedItemOptionsSelector = atom<HintOption[]>(
  createOptions(
    [...PRIME_3_MAJOR_UPGRADES, ...PRIME_3_PROGRESSIVE_MAJORS],
    true
  )
);

export const prime3UnhintedLocationOptionsSelector = atom<HintOption[]>(
  createOptions([...PRIME_3_LOCATIONS_WITH_ITEMS], true)
);
