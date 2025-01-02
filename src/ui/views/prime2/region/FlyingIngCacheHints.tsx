import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_RELATED_UPGRADES_HINTS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";

export default function FlyingIngCacheHints() {
  return (
    <div className="flex flex-col gap-2 border border-orange-600" data-name="flying-ing-cache-hints">
      <AutoComplete placeholder="cache hint 1" emptyMessage="No item found." options={createOptions([...PRIME_2_RELATED_UPGRADES_HINTS], true)} />
      <AutoComplete placeholder="cache hint 2" emptyMessage="No item found." options={createOptions([...PRIME_2_RELATED_UPGRADES_HINTS], true)} />
    </div>
  )
}