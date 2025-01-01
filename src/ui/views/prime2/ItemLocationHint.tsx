import { AutoComplete } from "@/components/ui/autocomplete"
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
      {hint.label && <p className={cn('font-semibold text-sm')}>{hint.label}</p>}
      {/* Items */}
      <AutoComplete placeholder="Item..." emptyMessage="No matching items." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES])} />
      <p>{hint.proximityType}</p>
      <AutoComplete placeholder="Location..." emptyMessage="No matching locations." options={createOptions(locations)} />
    </div>
  )
}