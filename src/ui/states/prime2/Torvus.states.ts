import { BossKeyHintSchema } from "@/types/Prime2.types";
import {
  TorvusBossHints,
  TorvusBossHintsSchema,
  TorvusKeybearerHints,
  TorvusKeybearerHintsSchema,
  TorvusTranslatorHints,
  TorvusTranslatorHintsSchema,
} from "@/types/prime2/Torvus.types";
import { atomWithReset } from "jotai/utils";

export const torvusBossHintsState = atomWithReset<TorvusBossHints>(
  TorvusBossHintsSchema.parse({
    keys: {
      "Key 1": BossKeyHintSchema.parse({}),
      "Key 2": BossKeyHintSchema.parse({}),
      "Key 3": BossKeyHintSchema.parse({}),
    },
  })
);

export const torvusKeybearerHintsState = atomWithReset<TorvusKeybearerHints>(
  TorvusKeybearerHintsSchema.parse({
    torvusLagoon: {},
    catacombs: {},
  })
);

export const torvusTranslatorHintsState = atomWithReset<TorvusTranslatorHints>(
  TorvusTranslatorHintsSchema.parse({
    torvusEnergyController: {},
    pathOfRoots: {},
    undergroundTunnel: {},
    catacombs: {},
    gatheringHall: {},
    trainingChamber: {},
  })
);
