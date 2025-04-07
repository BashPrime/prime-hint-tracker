import { BossKeyHintSchema } from "@/types/Prime2.types";
import {
  SanctuaryBossHints,
  SanctuaryBossHintsSchema,
  SanctuaryKeybearerHints,
  SanctuaryKeybearerHintsSchema,
  SanctuaryTranslatorHints,
  SanctuaryTranslatorHintsSchema,
} from "@/types/prime2/Sanctuary.types";
import { atomWithReset } from "jotai/utils";

export const sanctuaryBossHintsState = atomWithReset<SanctuaryBossHints>(
  SanctuaryBossHintsSchema.parse({
    keys: {
      "Key 1": BossKeyHintSchema.parse({}),
      "Key 2": BossKeyHintSchema.parse({}),
      "Key 3": BossKeyHintSchema.parse({}),
    },
  })
);

export const sanctuaryKeybearerHintsState =
  atomWithReset<SanctuaryKeybearerHints>(
    SanctuaryKeybearerHintsSchema.parse({
      sanctuaryEntrance: {},
      dynamoWorks: {},
    })
  );

export const sanctuaryTranslatorHintsState =
  atomWithReset<SanctuaryTranslatorHints>(
    SanctuaryTranslatorHintsSchema.parse({
      sanctuaryEnergyController: {},
      sanctuaryEntrance: {},
      hallOfCombatMastery: {},
      mainGyroChamber: {},
      mainResearch: {},
      watchStation: {},
    })
  );
