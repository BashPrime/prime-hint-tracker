import {
  KeybearerHint,
  KeybearerHintsUpdate,
  NewRegionKeybearerHints,
  NewTranslatorHintSchema,
} from "@/types/Prime2.types";
import {
  TempleBossHints,
  TempleBossHintsSchema,
  TempleKeybearerHints,
  TempleKeybearerHintsSchema,
  TempleTranslatorHintsSchema,
} from "@/types/prime2/Temple.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const templeBossHintsState = atomWithReset<TempleBossHints>(
  TempleBossHintsSchema.parse({})
);

const _templeKeybearerHintsState = atomWithReset<TempleKeybearerHints>(
  TempleKeybearerHintsSchema.parse({
    industrialSite: {},
    landingSite: {},
    storageCavernA: {},
  })
);

export const templeKeybearerHintsState = atom<
  NewRegionKeybearerHints,
  [update: KeybearerHintsUpdate],
  void
>(
  (get) => get(_templeKeybearerHintsState),
  (get, set, update: [string, KeybearerHint]) => {
    const updated = { ...get(_templeKeybearerHintsState) };
    const [key, value] = update;
    updated[key as keyof TempleKeybearerHints] = value;
    set(_templeKeybearerHintsState, updated);
  }
);

export const templeTranslatorHintsState = atomWithReset(
  TempleTranslatorHintsSchema.parse({
    mainEnergyController: {},
    transportToAgonWastes: {},
    fortressTransportAccess: {},
    meetingGrounds: {},
    pathOfEyes: {},
  })
);
