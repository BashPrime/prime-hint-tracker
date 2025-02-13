import {
  agonHintsState,
  prime2TrackerSelector,
  sanctuaryHintsState,
  skyTempleKeyHintsState,
  templeGroundsHintsState,
  torvusHintsState,
  unhintedItemsState,
} from "@/states/Prime2.states";
import { RegionHintsSchema } from "@/types/Prime2.types";
import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { z } from "zod";

export default function usePrime2Tracker() {
  // !STATE
  const prime2Tracker = useAtomValue(prime2TrackerSelector);
  const setTempleHints = useSetAtom(templeGroundsHintsState);
  const setAgonHints = useSetAtom(agonHintsState);
  const setTorvusHints = useSetAtom(torvusHintsState);
  const setSancHints = useSetAtom(sanctuaryHintsState);
  const setUnhintedItems = useSetAtom(unhintedItemsState);
  const setStkHints = useSetAtom(skyTempleKeyHintsState);
  const resetUnhinted = useResetAtom(unhintedItemsState);
  const resetStkHints = useResetAtom(skyTempleKeyHintsState);
  const resetTempleGroundsHints = useResetAtom(templeGroundsHintsState);
  const resetAgonHints = useResetAtom(agonHintsState);
  const resetTorvusHints = useResetAtom(torvusHintsState);
  const resetSanctuaryHints = useResetAtom(sanctuaryHintsState);

  // !FUNCTIONS
  function get() {
    return prime2Tracker;
  }

  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  function set(data: any) {
    try {
      // Load regional hints
      setTempleHints(RegionHintsSchema.parse(data.regions.temple));
      setAgonHints(RegionHintsSchema.parse(data.regions.agon));
      setTorvusHints(RegionHintsSchema.parse(data.regions.torvus));
      setSancHints(RegionHintsSchema.parse(data.regions.sanctuary));
      setUnhintedItems(data.unhintedItems);
      setStkHints(data.skyTempleKeys);
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
    resetTempleGroundsHints();
    resetAgonHints();
    resetTorvusHints();
    resetSanctuaryHints();
  }

  return {
    get,
    set,
    reset,
  };
}
