import { AutoComplete } from "@/components/ui/autocomplete";
import { Input } from "@/components/ui/input";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_LOCATIONS_WITH_ITEMS,
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
  const locationOptions = createOptions(
    [...PRIME_2_LOCATIONS_WITH_ITEMS],
    true
  );
  const secondValueOptions = [...itemOptions, ...locationOptions];
  let headerColor: string | undefined;

  switch (hints.variant) {
    case "temple":
      headerColor = "text-violet-400";
      break;
    case "agon":
      headerColor = "text-amber-400";
      break;
    case "torvus":
      headerColor = "text-emerald-400";
      break;
    case "sanctuary":
      headerColor = "text-sky-400";
      break;
    default:
  }

  return (
    <div
      className={cn(
        "grid sm:grid-cols-none md:grid-cols-2 gap-2 bg-zinc-800 px-2 pt-1",
        className
      )}
      data-name="translator-hints"
    >
      {hints.translatorHints.map((translatorHint, idx) => (
        <div key={`trans-hint-${idx}`}>
          <p
            className={cn(
              "uppercase font-bold text-xs tracking-wide",
              headerColor
            )}
          >
            {translatorHint.name}
          </p>
          <div className="flex flex-col">
            <AutoComplete
              placeholder="Item..."
              emptyMessage="No item found."
              options={itemOptions}
              className="text-sm h-6"
            />
            <Input type="text" placeholder="in..." className="text-sm h-6" data-name="proximity" />
            <AutoComplete
              placeholder="Location or Item..."
              emptyMessage="No location found."
              options={secondValueOptions}
              className="text-sm h-6"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
