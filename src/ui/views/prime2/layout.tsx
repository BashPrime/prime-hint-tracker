import {
  agonHintsState,
  sanctuaryHintsState,
  templeGroundsHintsState,
  torvusHintsState,
  prime2UnhintedItemOptionsSelector,
  prime2UnhintedLocationOptionsSelector,
  regionHintsState,
  templeKeybearerHintsState,
  readWriteTempleKeybearerHintsAtom,
} from "@/states/Prime2.states";
import { cn } from "../../lib/utils";
import Region from "./region";
import UnhintedItems from "../UnhintedItems";
import SkyTempleKeyHints from "./SkyTempleKeyHints";
import { useAtomValue } from "jotai";

export default function Prime2Layout() {
  // !STATE
  const regionHints = useAtomValue(regionHintsState)
  const unhintedItemOptions = useAtomValue(prime2UnhintedItemOptionsSelector);
  const unhintedLocationOptions = useAtomValue(prime2UnhintedLocationOptionsSelector);

  return (
    <div
      className={cn(
        "grid sm:grid-cols-2 md:grid-cols-[0.85fr_repeat(4,_1fr)] bg-[#1f1f1f] md:h-full"
      )}
      data-name="prime2-layout"
    >
      <div className="flex flex-col" data-name="core-hints">
        <SkyTempleKeyHints className="border-l-2 border-lime-600" />
        <UnhintedItems
          itemOptions={unhintedItemOptions}
          locationOptions={unhintedLocationOptions}
          className="border-l-2 border-red-600"
        />
      </div>
      <Region
        name="Temple Grounds"
        keybearerHintsAtom={readWriteTempleKeybearerHintsAtom}
        atom={templeGroundsHintsState}
        className="border-l-2 border-violet-600"
      />
      {/* <Region
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
      /> */}
    </div>
  );
}
