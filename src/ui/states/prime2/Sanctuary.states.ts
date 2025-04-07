import { NewBossKeyHintSchema } from "@/types/Prime2.types";
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
      "Key 1": NewBossKeyHintSchema.parse({}),
      "Key 2": NewBossKeyHintSchema.parse({}),
      "Key 3": NewBossKeyHintSchema.parse({}),
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
