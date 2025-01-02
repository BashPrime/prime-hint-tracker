import { AutoComplete } from "@/components/ui/autocomplete"
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data"
import { createOptions } from "@/lib/utils"

export default function Prime2LocationHint() {
  return (
    <AutoComplete placeholder="Location..." emptyMessage="No matching locations." options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)} />
  )
}