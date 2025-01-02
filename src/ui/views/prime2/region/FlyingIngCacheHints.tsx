import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_RELATED_UPGRADES_HINTS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
}

export default function FlyingIngCacheHints({ regionHints }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints)
  return (
    <div className="grid grid-cols-2 bg-zinc-800 px-2 pt-1" data-name="flying-ing-cache-hints">
      {hints.flyingCacheHints.map((cache) => (
        <div>
          <p className="uppercase font-bold text-xs text-red-200">{cache.name}</p>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={createOptions([...PRIME_2_RELATED_UPGRADES_HINTS], true)} />
        </div>
      ))}
    </div>
  )
}