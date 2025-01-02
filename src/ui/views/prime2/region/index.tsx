import { PrimitiveAtom } from "jotai"
import { BossHintContainer } from "./BossHintContainer"
import FlyingIngCacheHints from "./FlyingIngCacheHints"
import TranslatorHints from "./TranslatorHints"
import { RegionHints } from "@/types/Prime2.types"

type Props = {
  name: string
  hints: PrimitiveAtom<RegionHints>
  className?: string
}

export default function Region(props: Props) {
  return (
    <div className={props.className}>
      <h2 className="font-semibold text-lg">{props.name}</h2>
      <BossHintContainer regionHints={props.hints} />
      <FlyingIngCacheHints />
      <TranslatorHints />
    </div>
  )
}