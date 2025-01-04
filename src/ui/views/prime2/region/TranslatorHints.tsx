import { AutoComplete } from "@/components/ui/autocomplete";
import { Input } from "@/components/ui/input";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_ALL_LOCATIONS,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue, useSetAtom } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>;
  className?: string;
};

export default function TranslatorHints({ regionHints, className }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints);
  const translatorHints = hints.translatorHints.map((hint) => ({
    name: hint.name,
    firstValue: useAtomValue(hint.firstValue),
    setFirstValue: useSetAtom(hint.firstValue),
    secondValue: useAtomValue(hint.secondValue),
    setSecondValue: useSetAtom(hint.secondValue),
    proximity: useAtomValue(hint.proximity),
    setProximity: useSetAtom(hint.proximity),
  }))

  // !LOCAL
  const itemOptions = createOptions(
    [...PRIME_2_ALL_ITEMS_VALUES, "Joke Hint"],
    true
  );
  const locationOptions = createOptions(
    [...PRIME_2_ALL_LOCATIONS, ...PRIME_2_REGION_OPTIONS],
    true
  );
  const secondValueOptions = [...itemOptions, ...locationOptions];
  let headerColor: string | undefined;

  switch (hints.variant) {
    case "temple":
      headerColor = "text-purple-400";
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
        "grid sm:grid-cols-none md:grid-rows-3 md:grid-flow-col gap-2 bg-zinc-800 px-2 pt-1",
        className
      )}
      data-name="translator-hints"
    >
      {translatorHints.map((hint, idx) => (
        <div key={`trans-hint-${idx}`}>
          <p
            className={cn(
              "uppercase font-bold text-xs tracking-wide",
              headerColor
            )}
          >
            {hint.name}
          </p>
          <div className="flex flex-col">
            <AutoComplete
              placeholder="Item..."
              emptyMessage="No item found."
              value={{ label: hint.firstValue, value: hint.firstValue }}
              onValueChange={(o) => hint.setFirstValue(o.value)}
              options={itemOptions}
              tabIndex={1}
              className="text-sm h-6"
              data-name="first-value"
            />
            <Input
              type="text"
              placeholder="in..."
              value={hint.proximity}
              onChange={(e) => hint.setProximity(e.target.value)}
              className="text-sm h-6"
              data-name="proximity"
              tabIndex={-1}
            />
            <AutoComplete
              placeholder="Location or Item..."
              emptyMessage="No location found."
              value={{ label: hint.secondValue, value: hint.secondValue }}
              onValueChange={(o) => hint.setSecondValue(o.value)}
              options={secondValueOptions}
              tabIndex={1}
              className="text-sm h-6"
              data-name="second-value"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
