import { AutoComplete } from "@/components/ui/autocomplete"
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data"
import { createOptions } from "@/lib/utils"
import { Prime2ItemLocationHint as HintType } from "@/types/Prime2.types"

type Props = {
  hint: HintType,
  onChange?: (update: HintType) => void
}

export default function Prime2LocationHint({ hint }: Props) {
  return (
    <AutoComplete placeholder="Location..." emptyMessage="No matching locations." options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)} />
  )
}