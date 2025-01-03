import { AutoComplete } from "@/components/ui/autocomplete"
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data"
import { cn, createOptions } from "@/lib/utils"
import { Prime2ItemLocationHint } from "@/types/Prime2.types"
import { PrimitiveAtom, useAtomValue } from "jotai"

type Props = {
  name: string
  atom: PrimitiveAtom<Prime2ItemLocationHint[]>
  className?: string
}

export default function ItemLocationHintList({ name, atom, className }: Props) {
  // !JOTAI
  const hints = useAtomValue(atom)

  return (
    <>
      <h2 className="flex-none font-bold px-2 bg-zinc-900 uppercase">{name}</h2>
      <div className={cn(
        "[&>*:nth-child(odd)]:bg-zinc-800",
        className
      )}>
        {hints.map((hint, idx) => (
          <div className="flex flex-row justify-between px-1" key={`progression-item-${idx}`}>
            <p className="md:text-sm">{hint.item}</p>
            <AutoComplete
              placeholder="?????"
              emptyMessage="No location found."
              options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS, "Starting"], true)}
              className="md:text-sm h-6 text-right"
            />
          </div>
        ))}
      </div>
    </>
  )
}