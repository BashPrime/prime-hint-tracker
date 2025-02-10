import {
  agonHintsState,
  echoesTrackerSelector,
  sanctuaryHintsState,
  skyTempleKeyHintsState,
  templeGroundsHintsState,
  torvusHintsState,
  unhintedItemsState,
} from "@/states/Prime2.states";
import { RegionHintsSchema } from "@/types/Prime2.types";
import { useAtomValue, useSetAtom } from "jotai";
import { z } from "zod";

export default function useEchoesTracker() {
  // !STATE
  const echoesTracker = useAtomValue(echoesTrackerSelector);
  const setTempleHints = useSetAtom(templeGroundsHintsState);
  const setAgonHints = useSetAtom(agonHintsState);
  const setTorvusHints = useSetAtom(torvusHintsState);
  const setSancHints = useSetAtom(sanctuaryHintsState);
  const setUnhintedItems = useSetAtom(unhintedItemsState);
  const setStkHints = useSetAtom(skyTempleKeyHintsState);

  // !FUNCTION
  function loadFromJson(data: typeof echoesTracker) {
    try {
      // Load regional hints
      setTempleHints(RegionHintsSchema.parse(data.regions.temple));
      setAgonHints(RegionHintsSchema.parse(data.regions.agon));
      setTorvusHints(RegionHintsSchema.parse(data.regions.torvus));
      setSancHints(RegionHintsSchema.parse(data.regions.sanctuary));
      // setUnhintedItems(z.array(UnhintedItemSchema).parse(data.unhintedItems));
      setUnhintedItems(data.unhintedItems);
      // setStkHints(z.array(SkyTempleKeyHintSchema).parse(data.skyTempleKeys));
      setStkHints(data.skyTempleKeys);
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert("Error trying to load Echoes tracker session");
        console.error(err.issues);
      }
    }
  }

  function saveToJson() {
    return echoesTracker;
  }

  return {
    load: loadFromJson,
    save: saveToJson,
  };
}
