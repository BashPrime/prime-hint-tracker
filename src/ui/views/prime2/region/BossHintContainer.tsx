import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_REGIONS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";

export function BossHintContainer() {
  return (
    <div className="flex flex-row gap-2 border border-red-600" data-name="boss-container">
      <div className="flex flex-col gap-2" data-name="boss-img-item">
        <div className="w-24" data-name="boss-img">
          <img src="https://picsum.photos/200" />
        </div>
        <AutoComplete placeholder="Item..." emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} className="bg-zinc-900/50" />
      </div>
      <div className="flex flex-col gap-2" data-name="boss-keys">
        <AutoComplete placeholder="key 1" emptyMessage="No item found." options={createOptions([...PRIME_2_REGIONS], true)} />
        <AutoComplete placeholder="key 2" emptyMessage="No item found." options={createOptions([...PRIME_2_REGIONS], true)} />
        <AutoComplete placeholder="key 3" emptyMessage="No item found." options={createOptions([...PRIME_2_REGIONS], true)} />
      </div>
    </div>
  )
}