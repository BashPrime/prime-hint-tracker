import { PrimitiveAtom } from "jotai"
import { BossHintContainer } from "./BossHintContainer"
import FlyingIngCacheHints from "./FlyingIngCacheHints"
import TranslatorHints from "./TranslatorHints"
import { RegionHints } from "@/types/Prime2.types"

type Props = {
  name: string
  hints: PrimitiveAtom<RegionHints>
  headerColor?: string
  className?: string
}

export default function Region({name, hints, headerColor, className}: Props) {
  return (
    <div className={className}>
      <h2 className="font-semibold text-lg">{name}</h2>
      <BossHintContainer regionHints={hints} headerColor={headerColor} />
      <FlyingIngCacheHints regionHints={hints} />
      <TranslatorHints regionHints={hints} headerColor={headerColor} />
    </div>
  )
}