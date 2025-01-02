import { BossHintContainer } from "./BossHintContainer"
import FlyingIngCacheHints from "./FlyingIngCacheHints"
import TranslatorHints from "./TranslatorHints"

type Props = {
  name: string
  className?: string
}

export default function Region(props: Props) {
  return (
    <div className={props.className}>
      <h2 className="font-semibold text-lg">{props.name}</h2>
      <BossHintContainer />
      <FlyingIngCacheHints />
      <TranslatorHints />
    </div>
  )
}