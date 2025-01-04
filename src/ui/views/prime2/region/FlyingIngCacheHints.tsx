import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_RELATED_UPGRADES_HINTS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { FlyingIngCacheHint, RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";

type HintProps = {
  cacheHint: FlyingIngCacheHint
}

function Hint({cacheHint}: HintProps) {
  // !JOTAI
  const [hint, setHint] = useAtom(cacheHint.value)

  return (
    <div>
      <p className="uppercase font-bold text-xs text-orange-500 tracking-wide">
        {cacheHint.name}
      </p>
      <AutoComplete
        placeholder="Item..."
        emptyMessage="No item found."
        value={{ label: hint, value: hint }}
        onValueChange={(o) => setHint(o.value)}
        options={createOptions(
          [...PRIME_2_ALL_ITEMS_VALUES, ...PRIME_2_RELATED_UPGRADES_HINTS],
          true
        )}
        tabIndex={1}
      />
    </div>
  );
}

type Props = {
  regionHints: PrimitiveAtom<RegionHints>;
  className?: string;
};

export default function FlyingIngCacheHints({ regionHints, className }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints);

  return (
    <div
      className={cn(
        "sm:grid sm:grid-cols-none md:grid-cols-2 bg-zinc-800 px-2 pt-1",
        className
      )}
      data-name="flying-ing-cache-hints"
    >
      {hints.flyingCacheHints.map((hint, idx) => (
        <Hint cacheHint={hint} key={`${hints.variant}-cache-${idx}`}/>
      ))}
    </div>
  );
}
