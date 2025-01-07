import { selectedGameState } from "@/states/App.states";
import {
  agonHintsState,
  sanctuaryHintsState,
  skyTempleKeyHintsState,
  templeGroundsHintsState,
  torvusHintsState,
  unhintedItemsState,
} from "@/states/Prime2.states";
import { useAtomValue } from "jotai";
import { useResetAtom } from "jotai/utils";

export default function useResetTracker() {
  const game = useAtomValue(selectedGameState);
  const resetUnhinted = useResetAtom(unhintedItemsState);
  const resetStkHints = useResetAtom(skyTempleKeyHintsState);
  const resetTempleGroundsHints = useResetAtom(templeGroundsHintsState);
  const resetAgonHints = useResetAtom(agonHintsState);
  const resetTorvusHints = useResetAtom(torvusHintsState);
  const resetSanctuaryHints = useResetAtom(sanctuaryHintsState);

  function resetEchoesState() {
    resetUnhinted();
    resetStkHints();
    resetTempleGroundsHints();
    resetAgonHints();
    resetTorvusHints();
    resetSanctuaryHints();
  }

  function resetTracker() {
    switch (game) {
      case "echoes":
        resetEchoesState();
        break;
      default:
        break;
    }
  }

  return resetTracker;
}
