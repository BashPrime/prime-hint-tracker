import { Hint } from "../types/Hint.types"
import HintElem from "./HintElem"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

type Props = {
  name: string
  hints: Hint[]
  color?: string,
  onCreateNewHint?: () => void
}

export default function HintPanel(props: Props) {
  // !FUNCTION
  function createNewHint() {
    if (props.onCreateNewHint) {
      props.onCreateNewHint()
    }
  }

  return (
    <>
      <h2 className={cn('font-bold bg-zinc-900 w-full')}>{props.name}</h2>
      {props.hints.map((hint, idx) => (
        <HintElem key={`hint-${idx}`} hint={hint} />
      ))}
      {props.onCreateNewHint && (
        <Button onClick={createNewHint}>+</Button>
      )}
    </>
  )
}
