import { unhintedItemsState } from "@/states/App.states";
import {
  newArtifactHintsState,
  phazonSuitHintState,
} from "@/states/Prime1.states";
import { ArtifactHintsSchema, PhazonSuitHintSchema } from "@/types/Prime1.types";
import { useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { z } from "zod";

export default function usePrime1Tracker() {
  // !STATE
  const setArtifactHints = useSetAtom(newArtifactHintsState);
  const setUnhintedItems = useSetAtom(unhintedItemsState);
  const setPhazonSuitHint = useSetAtom(phazonSuitHintState);
  const resetArtifactHints = useResetAtom(newArtifactHintsState);
  const resetUnhinted = useResetAtom(unhintedItemsState);
  const resetPhazonSuitHint = useResetAtom(phazonSuitHintState);

  // !FUNCTIONS
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  function set(data: any) {
    try {
      // Load regional hints
      setArtifactHints(ArtifactHintsSchema.parse(data.artifacts));
      setPhazonSuitHint(PhazonSuitHintSchema.parse(data.phazonSuit));
      setUnhintedItems(data.unhintedItems);
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error(
          "Error trying to load Prime tracker session:",
          err.issues
        );
      } else console.error(String(err));
    }
  }

  function reset() {
    resetUnhinted();
    resetArtifactHints();
    resetPhazonSuitHint();
  }

  return {
    set,
    reset,
  };
}
