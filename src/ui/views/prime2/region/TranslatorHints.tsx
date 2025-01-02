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
    <div className="inline grid grid-cols-2" data-name="translator-hints">
      {hints.translatorHints.map((translatorHint, idx) => (
        <div key={`trans-hint-${idx}`}>
          <p className="uppercase font-bold text-xs">
            {translatorHint.name}
          </p>
          <div className="bg-zinc-900">
            <AutoComplete placeholder="Item..." emptyMessage="No item found." options={itemOptions} className="text-xs" />
            <AutoComplete placeholder="Location..." emptyMessage="No location found." options={locationOptions} className="text-xs" />
          </div>
        </div>
      ))}
    </div>
  )
}