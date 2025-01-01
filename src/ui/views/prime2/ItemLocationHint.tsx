import Prime2Item from "@/components/prime2/Item"
import Prime2Location from "@/components/prime2/Location"
import { cn } from "@/lib/utils"
import { Prime2ItemLocationHint as HintType } from "@/types/Prime2.types"

type Props = {
  hint: HintType,
  onChange?: (update: HintType) => void
}

export default function Prime2ItemLocationHint({ hint }: Props) {
  return (
    <div className={cn('flex flex-col')}>
      {hint.label && <p className={cn('font-semibold text-sm')}>{hint.label}</p>}
      <Prime2Item item={hint.item} />
      <p>{hint.proximityType}</p>
      <Prime2Location location={hint.location} proximityType={"exactly"} />
    </div>
  )
}