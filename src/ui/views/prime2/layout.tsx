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

export default function Prime2Layout() {
  return (
    <div className={cn("grid grid-cols-5 gap-x-2 h-full bg-stone-950")}>
      <HintListWrapper name="Items" className={cn("flex-auto")}>
        <Prime2ItemLocationHintList
          hints={prime2ItemLocationHintsState}
          allowNew
        />
      </HintListWrapper>
      <div className={cn("flex flex-col flex-auto gap-2")}>
        <HintListWrapper name="Violet Hints" className={cn("border-l-2 border-violet-600 h-full")}>
          <Prime2ItemLocationHintList
            hints={prime2VioletHintsState}
          />
        </HintListWrapper>
        <HintListWrapper name="Emerald Hints" className={cn("border-l-2 border-emerald-600 h-full")}>
          <Prime2ItemLocationHintList
            hints={prime2EmeraldHintsState}
          />
        </HintListWrapper>
      </div>
      <div className={cn("flex flex-col flex-auto gap-2")}>
        <HintListWrapper name="Amber Hints" className={cn("border-l-2 border-amber-600 h-full")}>
          <Prime2ItemLocationHintList
            hints={prime2AmberHintsState}
          />
        </HintListWrapper>
        <HintListWrapper name="Cobalt Hints" className={cn("border-l-2 border-sky-600 h-full")}>
          <Prime2ItemLocationHintList
            hints={prime2CobaltHintsState}
          />
        </HintListWrapper>
      </div>
      <HintListWrapper name="Keybearer Hints" className={cn("flex-auto border-l-2 border-rose-600")}>
        <HintList
          hints={prime2KeybearerHintsState}
          hintType={Prime2ItemHintSchema}
          options={createOptions([...PRIME_2_RELATED_UPGRADES_HINTS], true)}
          placeholder="Item..."
          emptyMessage="No items found."
        />
      </HintListWrapper>
      <HintListWrapper name="Sky Temple Keys" className={cn("flex-auto border-l-2 border-rose-600")}>
        <HintList
          hints={prime2StkHintsState}
          hintType={Prime2LocationHintSchema}
          options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)}
          placeholder="Location..."
          emptyMessage="No locations found."
        />
      </HintListWrapper>
    </div>
  );
}
