import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_RELATED_UPGRADES_HINTS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
}

export default function FlyingIngCacheHints({ regionHints }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(regionHints)
  return (
    <div className="flex flex-col gap-2 border border-orange-600" data-name="flying-ing-cache-hints">
      {hints.flyingCacheHints.map((cache) => (
        <AutoComplete placeholder={cache.name ?? ''} emptyMessage="No item found." options={createOptions([...PRIME_2_RELATED_UPGRADES_HINTS], true)} />
      ))}
    </div>
  )
}