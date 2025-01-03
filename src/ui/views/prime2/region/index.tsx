import { PrimitiveAtom } from "jotai"
import { BossHintContainer } from "./BossHintContainer"
import FlyingIngCacheHints from "./FlyingIngCacheHints"
import TranslatorHints from "./TranslatorHints"
import { RegionHints } from "@/types/Prime2.types"
import { cn } from "@/lib/utils"

type Props = {
  name: string
  hints: PrimitiveAtom<RegionHints>
  className?: string
}

export default function Region({ name, hints, className }: Props) {
  return (
    <div className={cn("flex flex-col", className)} data-name="region">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">{name}</h2>
      <div className="flex flex-col gap-2 h-full flex-1">
        <BossHintContainer regionHints={hints} className="flex-initial" />
        <FlyingIngCacheHints regionHints={hints} className="flex-initial" />
        <TranslatorHints regionHints={hints} className="flex-1" />
      </div>
    </div>
  )
}