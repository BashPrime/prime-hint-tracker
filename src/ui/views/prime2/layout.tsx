import {
  agonHintsState,
  sanctuaryHintsState,
  templeGroundsHintsState,
  torvusHintsState,
} from "@/states/Prime2.states";
import { cn } from "../../lib/utils";
import Region from "./region";
import UnhintedItems from "./UnhintedItems";
import SkyTempleKeyHints from "./SkyTempleKeyHints";

export default function Prime2Layout() {
  return (
    <div
      className={cn(
        "grid sm:grid-cols-2 md:grid-cols-[0.75fr_repeat(4,_1fr)] bg-[#1f1f1f] h-full"
      )}
      data-name="prime2-layout"
    >
      <div className="flex flex-col" data-name="core-hints">
        <SkyTempleKeyHints className="border-l-2 border-lime-600" />
        <UnhintedItems className="border-l-2 border-red-600" />
      </div>
      <Region
        name="Temple Grounds"
        atom={templeGroundsHintsState}
        className="border-l-2 border-violet-600"
      />
      <Region
        name="Agon Wastes"
        atom={agonHintsState}
        className="border-l-2 border-amber-600"
      />
      <Region
        name="Torvus Bog"
        atom={torvusHintsState}
        className="border-l-2 border-emerald-600"
      />
      <Region
        name="Sanctuary Fortress"
        atom={sanctuaryHintsState}
        className="border-l-2 border-sky-600"
      />
    </div>
  );
}
