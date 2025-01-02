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
    <div className={cn("flex flex-col gap-4", className)}>
      <h2 className="font-semibold text-lg">{name}</h2>
      <BossHintContainer regionHints={hints} variant={name.toLowerCase()} />
      <FlyingIngCacheHints regionHints={hints} />
      <TranslatorHints regionHints={hints} variant={name.toLowerCase()} />
    </div>
  )
}