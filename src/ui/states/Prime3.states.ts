import {
  PRIME_3_MAJOR_UPGRADES,
  PRIME_3_PROGRESSIVE_MAJORS,
} from "@/data/Prime3.data";
import { createOptions } from "@/lib/utils";
import { HintOption } from "@/types/common.types";
import { atom } from "jotai";

export const prime3UnhintedItemOptionsSelector = atom<HintOption[]>(
  createOptions(
    [...PRIME_3_MAJOR_UPGRADES, ...PRIME_3_PROGRESSIVE_MAJORS],
    true
  )
);

export const prime3UnhintedLocationOptionsSelector = atom<HintOption[]>(
  createOptions([], true)
);
