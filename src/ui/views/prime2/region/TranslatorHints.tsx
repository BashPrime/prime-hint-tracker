import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
}

export default function TranslatorHints({ regionHints }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(regionHints)
  const itemOptions = createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)
  const locationOptions = createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)

  return (
    <div className="flex flex-col gap-2 border border-white " data-name="translator-hints">
      {hints.translatorHints.map((translatorHint, idx) => (
        <div key={`trans-hint-${idx}`}>
          <p className="text-xs">{translatorHint.name}</p>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={itemOptions} />
          <AutoComplete placeholder="Location..." emptyMessage="No location found." options={locationOptions} />
        </div>
      ))}
    </div>
  )
}