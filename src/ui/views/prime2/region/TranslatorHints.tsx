import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_LOCATIONS_WITH_ITEMS, REGION_VARIANT } from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>
  variant?: string
}

export default function TranslatorHints({ regionHints, variant }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints)
  const itemOptions = createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)
  const locationOptions = createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)
  const headerColor = variant && `text-${REGION_VARIANT[variant as keyof typeof REGION_VARIANT]}`

  return (
    <div className="grid grid-cols-2" data-name="translator-hints">
      {hints.translatorHints.map((translatorHint, idx) => (
        <div key={`trans-hint-${idx}`}>
          <p
            className={cn(
              "uppercase font-bold text-xs",
              headerColor,
            )}
          >
            {translatorHint.name}
          </p>
          <AutoComplete placeholder="Item..." emptyMessage="No item found." options={itemOptions} className="text-xs" />
          <AutoComplete placeholder="Location..." emptyMessage="No location found." options={locationOptions} className="text-xs" />
        </div>
      ))}
    </div>
  )
}