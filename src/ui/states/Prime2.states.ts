import {
  PRIME_2_AMBER_HINTS,
  PRIME_2_COBALT_HINTS,
  PRIME_2_EMERALD_HINTS,
  PRIME_2_KEYBEARER_HINTS,
  PRIME_2_SKY_TEMPLE_KEY_HINTS,
  PRIME_2_VIOLET_HINTS,
} from "@/data/Prime2.data";
import { Hint } from "@/types/Hint.types";
import { Prime2ItemHint, Prime2ItemLocationHint } from "@/types/Prime2.types";
import { atomWithReset } from "jotai/utils";

export const prime2ItemHintsState = atomWithReset<Hint[]>([]);
export const prime2ItemLocationHintsState = atomWithReset<Prime2ItemLocationHint[]>([]);
export const prime2VioletHintsState = atomWithReset<Prime2ItemLocationHint[]>([
  ...PRIME_2_VIOLET_HINTS,
]);
export const prime2AmberHintsState = atomWithReset<Prime2ItemLocationHint[]>([
  ...PRIME_2_AMBER_HINTS,
]);
export const prime2EmeraldHintsState = atomWithReset<Prime2ItemLocationHint[]>([
  ...PRIME_2_EMERALD_HINTS,
]);
export const prime2CobaltHintsState = atomWithReset<Prime2ItemLocationHint[]>([
  ...PRIME_2_COBALT_HINTS,
]);
export const prime2KeybearerHintsState = atomWithReset<Prime2ItemHint[]>([
  ...PRIME_2_KEYBEARER_HINTS,
]);
export const prime2StkHintsState = atomWithReset<Hint[]>([
  ...PRIME_2_SKY_TEMPLE_KEY_HINTS,
]);
