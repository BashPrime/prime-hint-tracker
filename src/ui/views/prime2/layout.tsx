import {
  templeGroundsHintsState,
  prime2UnhintedItemOptionsSelector,
  prime2UnhintedLocationOptionsSelector,
  regionHintsAtomsSelector,
  agonHintsState,
  torvusHintsState,
  sanctuaryHintsState,
} from "@/states/Prime2.states";
import { cn } from "../../lib/utils";
import Region from "./region";
import UnhintedItems from "../UnhintedItems";
import SkyTempleKeyHints from "./SkyTempleKeyHints";
import { useAtomValue } from "jotai";

export default function Prime2Layout() {
  // !STATE
  const { templeGrounds, agonWastes, torvusBog, sanctuaryFortress } =
    useAtomValue(regionHintsAtomsSelector);
  const unhintedItemOptions = useAtomValue(prime2UnhintedItemOptionsSelector);
  const unhintedLocationOptions = useAtomValue(
    prime2UnhintedLocationOptionsSelector
  );

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
        name={templeGrounds.name}
        variant={templeGrounds.variant}
        bossHintsAtom={templeGrounds.bossHints}
        keybearerHintsAtom={templeGrounds.keybearerHints}
        className="border-l-2 border-violet-600"
      />
      <Region
        name={agonWastes.name}
        variant={agonWastes.variant}
        bossHintsAtom={agonWastes.bossHints}
        keybearerHintsAtom={agonWastes.keybearerHints}
        className="border-l-2 border-amber-600"
      />
      <Region
        name={torvusBog.name}
        variant={torvusBog.variant}
        bossHintsAtom={torvusBog.bossHints}
        keybearerHintsAtom={torvusBog.keybearerHints}
        className="border-l-2 border-emerald-600"
      />
      <Region
        name={sanctuaryFortress.name}
        variant={sanctuaryFortress.variant}
        bossHintsAtom={sanctuaryFortress.bossHints}
        keybearerHintsAtom={sanctuaryFortress.keybearerHints}
        className="border-l-2 border-sky-600"
      />
    </div>
  );
}
