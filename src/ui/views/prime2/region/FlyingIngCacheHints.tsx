import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_RELATED_UPGRADES_HINTS } from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
  className?: string
}

export default function FlyingIngCacheHints({ regionHints, className }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints)
  return (
    <div className={cn("sm:grid sm:grid-cols-none md:grid-cols-2 bg-zinc-800 px-2 pt-1", className)} data-name="flying-ing-cache-hints">
      {hints.flyingCacheHints.map((cache, idx) => (
        <div key={`${hints.variant}-cache-${idx}`}>
          <p className="uppercase font-bold text-xs text-orange-500 tracking-wide">{cache.name}</p>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={createOptions([...PRIME_2_RELATED_UPGRADES_HINTS], true)} />
        </div>
      ))}
    </div>
  )
}