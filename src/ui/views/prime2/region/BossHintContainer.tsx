import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_REGIONS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
}

export function BossHintContainer({ regionHints }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(regionHints)

  return (
    <div className="flex flex-row gap-2 border border-red-600" data-name="boss-container">
      <div className="flex flex-col gap-2" data-name="boss-img-item">
        <div className="w-24" data-name="boss-img">
          <img src="https://picsum.photos/200" title={hints.bossName} alt={hints.bossName} />
        </div>
        <div data-name="boss-item">
          <p className="text-xs">{hints.bossName}</p>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} className="bg-zinc-900/50 font-semibold" />
        </div>
      </div>
      {hints.bossKeys.length > 0 && (
        <div className="flex flex-col gap-2" data-name="boss-keys">
          {hints.bossKeys.map((keyHint, idx) => (
            <AutoComplete placeholder={`Key ${idx + 1}`} emptyMessage="No region found." options={createOptions([...PRIME_2_REGIONS], true)} />
          ))}
        </div>
      )}
    </div>
  )
}