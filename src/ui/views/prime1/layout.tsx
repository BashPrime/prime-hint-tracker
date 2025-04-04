import { useAtomValue } from "jotai";
import { cn } from "../../lib/utils";
import UnhintedItems from "../UnhintedItems";
import ArtifactHints from "./ArtifactHints";
import {
  prime1UnhintedItemOptionsSelector,
  prime1UnhintedLocationOptionsSelector,
} from "@/states/Prime1.states";
import PhazonSuitHint from "./PhazonSuitHint";

export default function Prime1Layout() {
  // !STATE
  const unhintedItemOptions = useAtomValue(prime1UnhintedItemOptionsSelector);
  const unhintedLocationOptions = useAtomValue(
    prime1UnhintedLocationOptionsSelector
  );

  return (
    <div
      className={cn("grid bg-[#1f1f1f] w-full h-full")}
      data-name="prime1-layout"
    >
      <div className="flex flex-row grid-cols-2" data-name="core-hints">
        <ArtifactHints className="flex flex-col border-l-2 border-[#52CDF7] w-1/2" />
        <div className="flex flex-col w-1/2">
          <PhazonSuitHint className="border-l-2 border-red-400" />
          <UnhintedItems
            itemOptions={unhintedItemOptions}
            locationOptions={unhintedLocationOptions}
            className="border-l-2 border-red-600"
          />
        </div>
      </div>
    </div>
  );
}
