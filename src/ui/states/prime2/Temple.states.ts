import {
  TempleBossHints,
  TempleBossHintsSchema,
  TempleKeybearerHints,
  TempleKeybearerHintsSchema,
  TempleTranslatorHints,
  TempleTranslatorHintsSchema,
} from "@/types/prime2/Temple.types";
import { atomWithReset } from "jotai/utils";

export const templeBossHintsState = atomWithReset<TempleBossHints>(
  TempleBossHintsSchema.parse({})
);

export const templeKeybearerHintsState = atomWithReset<TempleKeybearerHints>(
  TempleKeybearerHintsSchema.parse({
    industrialSite: {},
    landingSite: {},
    storageCavernA: {},
  })
);

export const templeTranslatorHintsState = atomWithReset<TempleTranslatorHints>(
  TempleTranslatorHintsSchema.parse({
    mainEnergyController: {},
    transportToAgonWastes: {},
    fortressTransportAccess: {},
    meetingGrounds: {},
    pathOfEyes: {},
  })
);
