import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_FLYING_CACHE_REGION_OPTIONS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
}

export function BossHintContainer({ regionHints }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints)

  return (
    <div className="flex flex-row gap-2 px-2 pt-2 bg-zinc-800" data-name="boss-container">
      <div className="flex flex-col gap-2 w-3/5" data-name="boss-img-item">
        <div className="w-24" data-name="boss-img">
          <img src="https://picsum.photos/200" title={hints.bossName} alt={hints.bossName} />
        </div>
        <div data-name="boss-item">
          <p className="uppercase font-bold text-sm text-red-500">
            {hints.bossName}
          </p>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} className="h-6" />
        </div>
      </div>
      {hints.bossKeys.length > 0 && (
        <div className="flex flex-col w-2/5" data-name="boss-keys">
          {hints.bossKeys.map((_, idx) => (
            <div>
              <p className="uppercase font-bold text-[13px] text-orange-500">Key {idx + 1}</p>
              <AutoComplete placeholder="Region..." emptyMessage="No region found." options={createOptions([...PRIME_2_FLYING_CACHE_REGION_OPTIONS], true)} className="text-[13px]"/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}