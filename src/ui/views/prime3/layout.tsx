import { useAtomValue } from "jotai";
import { cn } from "../../lib/utils";
import UnhintedItems from "../UnhintedItems";
import {
  prime3UnhintedItemOptionsSelector,
  prime3UnhintedLocationOptionsSelector,
} from "@/states/Prime3.states";
import Prime3Hints from "./Prime3Hints";

export default function Prime3Layout() {
  // !STATE
  const unhintedItemOptions = useAtomValue(prime3UnhintedItemOptionsSelector);
  const unhintedLocationOptions = useAtomValue(
    prime3UnhintedLocationOptionsSelector
  );

  return (
    <div
      className={cn("grid bg-[#1f1f1f] w-full h-full")}
      data-name="prime1-layout"
    >
      <div className="flex flex-col grid-cols-1" data-name="core-hints">
        <Prime3Hints />
        <UnhintedItems
          itemOptions={unhintedItemOptions}
          locationOptions={unhintedLocationOptions}
          className="border-l-2 border-red-600"
        />
      </div>
    </div>
  );
}
