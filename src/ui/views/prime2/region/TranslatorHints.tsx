import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";

export default function TranslatorHints() {
  return (
    <div className="flex flex-col gap-2 border border-white " data-name="translator-hints">
      <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
      <AutoComplete placeholder="trans hint" emptyMessage="No item found." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
    </div>
  )
}