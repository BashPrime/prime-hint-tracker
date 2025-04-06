import {
  BossHints,
  BossHintsSchema,
  KeybearerHint,
  KeybearerHintsUpdate,
  NewRegionKeybearerHints,
} from "@/types/Prime2.types";
import {
  AgonKeybearerHints,
  AgonKeybearerHintsSchema,
} from "@/types/prime2/Agon.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const agonBossHintsState = atomWithReset<BossHints>(
  BossHintsSchema.parse({})
);

const _agonKeybearerHintsState = atomWithReset<AgonKeybearerHints>(
  AgonKeybearerHintsSchema.parse({
    centralMiningStation: {},
    mainReactor: {},
  })
);

export const agonKeybearerHintsState = atom<
  NewRegionKeybearerHints,
  [update: KeybearerHintsUpdate],
  void
>(
  (get) => get(_agonKeybearerHintsState),
  (get, set, update: [string, KeybearerHint]) => {
    const updated = { ...get(_agonKeybearerHintsState) };
    const [key, value] = update;
    updated[key as keyof AgonKeybearerHints] = value;
    set(_agonKeybearerHintsState, updated);
  }
);
