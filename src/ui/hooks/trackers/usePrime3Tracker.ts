import { unhintedItemsState } from "@/states/App.states";
import {
  hyperGrappleHintState,
  hyperMissileHintState,
} from "@/states/Prime3.states";
import { ItemHintSchema } from "@/types/common.types";
import { useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { z } from "zod";

export default function usePrime3Tracker() {
  // !STATE
  const setHyperMissileHint = useSetAtom(hyperMissileHintState);
  const setHyperGrappleHint = useSetAtom(hyperGrappleHintState);
  const setUnhintedItems = useSetAtom(unhintedItemsState);
  const resetHyperMissileHint = useResetAtom(hyperMissileHintState);
  const resetHyperGrappleHint = useResetAtom(hyperGrappleHintState);
  const resetUnhinted = useResetAtom(unhintedItemsState);

  // !FUNCTIONS
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  function set(data: any) {
    try {
      // Load regional hints
      setHyperMissileHint(ItemHintSchema.parse(data.hyperMissile));
      setHyperGrappleHint(ItemHintSchema.parse(data.hyperGrapple));
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
    resetHyperMissileHint();
    resetHyperGrappleHint();
  }

  return {
    set,
    reset,
  };
}
