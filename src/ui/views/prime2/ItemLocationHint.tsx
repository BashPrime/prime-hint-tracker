import { AutoComplete } from "@/components/ui/autocomplete"
import { HINT_TYPES } from "@/data/Hint.data"
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_ALL_LOCATIONS, PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data"
import { cn, createOptions } from "@/lib/utils"
import { Prime2ItemLocationHint as HintType } from "@/types/Prime2.types"

type Props = {
  hint: HintType,
  onChange?: (update: HintType) => void
}

export default function Prime2ItemLocationHint({ hint }: Props) {
  const locations = hint.proximityType === "in" ? [...PRIME_2_LOCATIONS_WITH_ITEMS] : [...PRIME_2_ALL_LOCATIONS]

  return (
    <div className={cn('flex flex-col')}>
      <AutoComplete placeholder="Item..." emptyMessage="No matching items." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      <div className={cn('flex flex-row')}>
        <div className={cn("w-1/3")}><AutoComplete emptyMessage="" options={createOptions([...HINT_TYPES])} /></div>
        <AutoComplete placeholder="Location..." emptyMessage="No matching locations." options={createOptions(locations, true)} />
      </div>
    </div>
  )
}