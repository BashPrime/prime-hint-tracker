import { Hint } from "../types/Hint.types"
import HintElem from "./HintElem"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

type Props<Label, Value> = {
  name: string
  hints: Hint<Label, Value>[]
  color?: string,
  onCreateNewHint?: () => void
}

export default function HintPanel<Label extends string, Value extends string>(props: Props<Label, Value>) {
  // !FUNCTION
  function createNewHint() {
    if (props.onCreateNewHint) {
      props.onCreateNewHint()
    }
  }

  return (
    <>
      <h2 className={cn('font-bold')}>{props.name}</h2>
      {props.hints.map((hint, idx) => (
        <HintElem<Label, Value> key={`hint-${idx}`} hint={hint} />
      ))}
      {props.onCreateNewHint && (
        <Button onClick={createNewHint}>+</Button>
      )}
    </>
  )
}
