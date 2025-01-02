import { AutoComplete } from "@/components/ui/autocomplete"
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_ALL_LOCATIONS, PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data"
import { cn, createOptions } from "@/lib/utils"
import { Prime2ItemLocationHint as HintType } from "@/types/Prime2.types"

type Props = {
  hint: HintType
}

export default function Prime2ItemLocationHint({ hint }: Props) {
  const locations = hint.proximityType === "in" ? [...PRIME_2_LOCATIONS_WITH_ITEMS] : [...PRIME_2_ALL_LOCATIONS]

  return (
    <div className={cn('flex flex-row bg-zinc-800/50 px-2')}>
      <AutoComplete placeholder="Item..." emptyMessage="No matching items." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      <AutoComplete placeholder="Location..." emptyMessage="No matching locations." options={createOptions(locations, true)} />
    </div>
  )
}