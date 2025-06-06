import { BossKeyHintSchema } from "@/types/Prime2.types";
import {
  AgonBossHints,
  AgonBossHintsSchema,
  AgonKeybearerHints,
  AgonKeybearerHintsSchema,
  AgonTranslatorHints,
  AgonTranslatorHintsSchema,
} from "@/types/prime2/Agon.types";
import { atomWithReset } from "jotai/utils";

export const agonBossHintsState = atomWithReset<AgonBossHints>(
  AgonBossHintsSchema.parse({
    keys: {
      "Key 1": BossKeyHintSchema.parse({}),
      "Key 2": BossKeyHintSchema.parse({}),
      "Key 3": BossKeyHintSchema.parse({}),
    },
  })
);

export const agonKeybearerHintsState = atomWithReset<AgonKeybearerHints>(
  AgonKeybearerHintsSchema.parse({
    centralMiningStation: {},
    mainReactor: {},
  })
);

export const agonTranslatorHintsState = atomWithReset<AgonTranslatorHints>(
  AgonTranslatorHintsSchema.parse({
    agonEnergyController: {},
    miningPlaza: {},
    portalTerminal: {},
    miningStationA: {},
    miningStationB: {},
  })
);
