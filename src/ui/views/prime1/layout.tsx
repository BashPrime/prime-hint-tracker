import { useAtomValue } from "jotai";
import { cn } from "../../lib/utils";
import UnhintedItems from "../UnhintedItems";
import ArtifactHints from "./ArtifactHints";
import {
  prime1UnhintedItemOptionsSelector,
  prime1UnhintedLocationOptionsSelector,
} from "@/states/Prime1.states";

export default function Prime1Layout() {
  // !STATE
  const unhintedItemOptions = useAtomValue(prime1UnhintedItemOptionsSelector);
  const unhintedLocationOptions = useAtomValue(
    prime1UnhintedLocationOptionsSelector
  );

  return (
    <div
      className={cn("grid grid-cols-1 bg-[#1f1f1f] h-full")}
      data-name="prime2-layout"
    >
      <div className="flex flex-col" data-name="core-hints">
        <ArtifactHints className="border-l-2 border-[#52CDF7]" />
        <UnhintedItems
          itemOptions={unhintedItemOptions}
          locationOptions={unhintedLocationOptions}
          className="border-l-2 border-red-600"
        />
      </div>
    </div>
  );
}
