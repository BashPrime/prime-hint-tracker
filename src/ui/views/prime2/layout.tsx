import { agonHintsState, skyTempleKeyHintsState, progressionItemsState, sanctuaryHintsState, templeGroundsHintsState, torvusHintsState } from "@/states/Prime2.states";
import { cn } from "../../lib/utils";
import Region from "./region";
import ItemLocationHintList from "./ItemLocationHintList";

export default function Prime2Layout() {
  return (
    <div className={cn("grid sm:grid-cols-2 md:grid-cols-5 h-full bg-[#1f1f1f]")}>
      <div className="flex flex-col">
        <ItemLocationHintList name="Progression" atom={progressionItemsState} className="md:flex-[1_0_0] md:overflow-y-auto" />
        <div className="md:flex-[0_0_initial]">
          <ItemLocationHintList name="Sky Temple Keys" atom={skyTempleKeyHintsState} />
        </div>
      </div>
      <Region name="Temple Grounds" hints={templeGroundsHintsState} className="border-l-2 border-violet-600" />
      <Region name="Agon Wastes" hints={agonHintsState} className="border-l-2 border-amber-600" />
      <Region name="Torvus Bog" hints={torvusHintsState} className="border-l-2 border-emerald-600" />
      <Region name="Sanctuary Fortress" hints={sanctuaryHintsState} className="border-l-2 border-sky-600" />
    </div>
  );
}
