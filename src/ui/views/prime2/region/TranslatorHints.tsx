import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
}

export default function TranslatorHints({ regionHints }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints)
  const itemOptions = createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)
  const locationOptions = createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)

  return (
    <div className="grid grid-cols-2 gap-2 bg-zinc-800 px-2 pt-1" data-name="translator-hints">
      {hints.translatorHints.map((translatorHint, idx) => (
        <div key={`trans-hint-${idx}`}>
          <p className="uppercase font-bold text-xs border-b border-zinc-600/50 pb-2">
            {translatorHint.name}
          </p>
          <div>
            <AutoComplete placeholder="Item..." emptyMessage="No item found." options={itemOptions} className="text-sm h-6" />
            <AutoComplete placeholder="Location..." emptyMessage="No location found." options={locationOptions} className="text-sm h-6" />
          </div>
        </div>
      ))}
    </div>
  )
}