import { cn, createOptions } from "../../lib/utils";
import {
  prime2VioletHintsState,
  prime2AmberHintsState,
  prime2CobaltHintsState,
  prime2EmeraldHintsState,
  prime2ItemLocationHintsState,
  prime2KeybearerHintsState,
  prime2StkHintsState,
} from "@/states/Prime2.states";
import Prime2ItemLocationHintList from "./ItemLocationHintList";
import HintListWrapper from "../HintListWrapper";
import HintList from "../HintList";
import { PRIME_2_LOCATIONS_WITH_ITEMS, PRIME_2_RELATED_UPGRADES_HINTS } from "@/data/Prime2.data";
import { Prime2ItemHintSchema, Prime2LocationHintSchema } from "@/types/Prime2.types";
import Region from "./Region";

export default function Prime2Layout() {
  return (
    <div className={cn("grid grid-cols-2 gap-x-2 h-full bg-stone-950")}>
      <Region name="Agon Wastes" className={cn("bg-amber-950/50")} />
    </div>
  );
}
