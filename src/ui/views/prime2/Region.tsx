import { AutoComplete } from "@/components/ui/autocomplete"
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_LOCATIONS_WITH_ITEMS, PRIME_2_REGIONS } from "@/data/Prime2.data"
import { createOptions } from "@/lib/utils"

type Props = {
  name: string
  className?: string
}

export default function Region(props: Props) {
  return (
    <div className={props.className}>
      <h2 className="font-semibold text-lg">{props.name}</h2>
      <div id="boss-and-keys" className="flex flex-row gap-2">
        <div id="boss-img-item" className="flex flex-col gap-2">
          <div id="boss-img" className="w-24">
            <img src="https://picsum.photos/200" />
          </div>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} className="bg-zinc-900/50" />
        </div>
        <div id="boss-keys" className="flex flex-col gap-2">
          <AutoComplete placeholder="key 1" emptyMessage="No item found." options={createOptions([...PRIME_2_REGIONS], true)} />
          <AutoComplete placeholder="key 2" emptyMessage="No item found." options={createOptions([...PRIME_2_REGIONS], true)} />
          <AutoComplete placeholder="key 3" emptyMessage="No item found." options={createOptions([...PRIME_2_REGIONS], true)} />
        </div>
      </div>
      <div>
        <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
        <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      </div>
      <div>
        <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
        <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
        <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
        <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
        <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      </div>
    </div>
  )
}