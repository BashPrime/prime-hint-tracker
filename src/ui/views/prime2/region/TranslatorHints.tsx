import { AutoComplete } from "@/components/ui/autocomplete";
import { Input } from "@/components/ui/input";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PROXIMITY_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>;
  className?: string;
};

export default function TranslatorHints({ regionHints, className }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints);

  // !LOCAL
  const itemOptions = createOptions([...PRIME_2_ALL_ITEMS_VALUES], true);
  const proximityOptions = createOptions([...PROXIMITY_OPTIONS]);
  const locationOptions = createOptions(
    [...PRIME_2_LOCATIONS_WITH_ITEMS],
    true
  );
  const secondValueOptions = [...itemOptions, ...locationOptions];
  let headerColor: string | undefined;

  switch (hints.variant) {
    case "temple":
      headerColor = "text-violet-400"
      break
    case "agon":
      headerColor = "text-amber-400"
      break
    case "torvus":
      headerColor = "text-emerald-400"
      break
    case "sanctuary":
      headerColor = "text-sky-400"
      break
    default:
  }

  return (
    <div
      className={cn("grid sm:grid-cols-none md:grid-cols-2 gap-2 bg-zinc-800 px-2 pt-1", className)}
      data-name="translator-hints"
    >
      {hints.translatorHints.map((translatorHint, idx) => (
        <div key={`trans-hint-${idx}`}>
          <p className={cn("uppercase font-bold text-xs tracking-wide", headerColor)}>
            {translatorHint.name}
          </p>
          <div className="flex flex-col">
            <AutoComplete
              placeholder="Item..."
              emptyMessage="No item found."
              options={itemOptions}
              className="text-sm h-6"
            />
            <div className="flex flex-row">
              <AutoComplete
                placeholder="Proximity"
                emptyMessage="No matching option found."
                options={proximityOptions}
                className="bg-zinc-700 w-16 h-6"
              />
              {translatorHint.proximityType !== "in" && (
                <Input
                  placeholder="# rooms"
                  type="number"
                  value={translatorHint.numRooms}
                  className="bg-slate-700 w-14 h-6"
                />
              )}
            </div>
            {translatorHint.proximityType === "in" && (
              <AutoComplete
                placeholder="Location..."
                emptyMessage="No location found."
                options={locationOptions}
                className="text-sm h-6"
              />
            )}
            {translatorHint.proximityType !== "in" && (
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-zinc-400">from</p>
                <AutoComplete
                  placeholder="????"
                  emptyMessage="No location found."
                  options={secondValueOptions}
                  className="text-sm h-6"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
