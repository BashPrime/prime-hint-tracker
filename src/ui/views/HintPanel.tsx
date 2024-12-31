import { Hint } from "../types/Hint.types"
import HintElem from "./HintElem"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import { PrimitiveAtom, useAtom } from "jotai"

type Props = {
  name: string
  hints: PrimitiveAtom<Hint[]>
  allowNew?: boolean
  className?: string
}

export default function HintPanel(props: Props) {
  // !STATE
  const [hints, setHints] = useAtom(props.hints)

  // !FUNCTION
  function createNewHint() {
    const newHint: Hint = {
      label: '',
      value: ''
    }

    setHints([...hints, newHint])
  }

  return (
    <div className={cn('bg-zinc-800 flex-auto', props.className)}>
      <h2 className={cn('font-bold bg-zinc-900 p-2 uppercase text-sm')}>{props.name}</h2>
      <div>
        {hints.map((hint, idx) => (
          <HintElem key={`hint-${idx}`} hint={hint} />
        ))}
        {props.allowNew && (
          <Button onClick={createNewHint}>+ Add New Hint</Button>
        )}
      </div>

    </div>
  )
}
