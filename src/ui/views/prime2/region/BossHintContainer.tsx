import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_FLYING_CACHE_REGION_OPTIONS } from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
  headerColor?: string
}

export function BossHintContainer({ regionHints, headerColor }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints)

  return (
    <div className="flex flex-row gap-2 border border-red-600" data-name="boss-container">
      <div className="flex flex-col gap-2" data-name="boss-img-item">
        <div className="w-24" data-name="boss-img">
          <img src="https://picsum.photos/200" title={hints.bossName} alt={hints.bossName} />
        </div>
        <div data-name="boss-item">
          <p
            className={cn(
              "uppercase font-bold text-xs",
              headerColor && `text-${headerColor}`
            )}
          >
            {hints.bossName}
          </p>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} className="bg-zinc-900/50" />
        </div>
      </div>
      {hints.bossKeys.length > 0 && (
        <div className="flex flex-col gap-2" data-name="boss-keys">
          {hints.bossKeys.map((_, idx) => (
            <div>
              <p className="uppercase font-light text-xs text-red-300">Key {idx + 1}</p>
              <AutoComplete placeholder="Region..." emptyMessage="No region found." options={createOptions([...PRIME_2_FLYING_CACHE_REGION_OPTIONS], true)} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}