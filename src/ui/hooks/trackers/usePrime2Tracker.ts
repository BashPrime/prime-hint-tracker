import { unhintedItemsState } from "@/states/App.states";
import {
  agonHintsSelector,
  newSkyTempleKeyHintsState,
  regionHintsAtomsSelector,
  sanctuaryHintsSelector,
  skyTempleKeyHintsState,
  templeHintsSelector,
  torvusHintsSelector,
} from "@/states/Prime2.states";
import { NewRegionHintsSchema, NewSkyTempleKeyHintsSchema } from "@/types/Prime2.types";
import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { z } from "zod";

export default function usePrime2Tracker() {
  // !STATE
  const { templeGrounds, agonWastes, torvusBog, sanctuaryFortress } =
    useAtomValue(regionHintsAtomsSelector);
  // Setters
  const setTempleHints = useSetAtom(templeHintsSelector);
  const setAgonHints = useSetAtom(agonHintsSelector);
  const setTorvusHints = useSetAtom(torvusHintsSelector);
  const setSancHints = useSetAtom(sanctuaryHintsSelector);
  const setUnhintedItems = useSetAtom(unhintedItemsState);
  const setStkHints = useSetAtom(newSkyTempleKeyHintsState);
  // Resetters
  const resetUnhinted = useResetAtom(unhintedItemsState);
  const resetStkHints = useResetAtom(newSkyTempleKeyHintsState);
  const resetTempleBossHints = useResetAtom(templeGrounds.bossHints);
  const resetTempleKeybearerHints = useResetAtom(templeGrounds.keybearerHints);
  const resetTempleTranslatorHints = useResetAtom(
    templeGrounds.translatorHints
  );
  const resetAgonBossHints = useResetAtom(agonWastes.bossHints);
  const resetAgonKeybearerHints = useResetAtom(agonWastes.keybearerHints);
  const resetAgonTranslatorHints = useResetAtom(agonWastes.translatorHints);
  const resetTorvusBossHints = useResetAtom(torvusBog.bossHints);
  const resetTorvusKeybearerHints = useResetAtom(torvusBog.keybearerHints);
  const resetTorvusTranslatorHints = useResetAtom(torvusBog.translatorHints);
  const resetSanctuaryBossHints = useResetAtom(sanctuaryFortress.bossHints);
  const resetSanctuaryKeybearerHints = useResetAtom(
    sanctuaryFortress.keybearerHints
  );
  const resetSanctuaryTranslatorHints = useResetAtom(
    sanctuaryFortress.translatorHints
  );

  // !FUNCTIONS
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  function set(data: any) {
    try {
      // Load regional hints
      setTempleHints(NewRegionHintsSchema.parse(data.regions.temple));
      setAgonHints(NewRegionHintsSchema.parse(data.regions.agon));
      setTorvusHints(NewRegionHintsSchema.parse(data.regions.torvus));
      setSancHints(NewRegionHintsSchema.parse(data.regions.sanctuary));
      setUnhintedItems(data.unhintedItems);
      setStkHints(NewSkyTempleKeyHintsSchema.parse(data.skyTempleKeys));
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error(
          "Error trying to load Echoes tracker session:",
          err.issues
        );
      } else console.error(String(err));
    }
  }

  function reset() {
    resetUnhinted();
    resetStkHints();
    resetTempleBossHints();
    resetTempleKeybearerHints();
    resetTempleTranslatorHints();
    resetAgonBossHints();
    resetAgonKeybearerHints();
    resetAgonTranslatorHints();
    resetTorvusBossHints();
    resetTorvusKeybearerHints();
    resetTorvusTranslatorHints();
    resetSanctuaryBossHints();
    resetSanctuaryKeybearerHints();
    resetSanctuaryTranslatorHints();
  }

  return {
    set,
    reset,
  };
}
