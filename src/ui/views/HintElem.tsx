import { useState } from 'react'
import { Input } from '../components/ui/input'
import { cn } from '../lib/utils'
import { Hint } from '../types/Hint.types'

type Props = {
  hint: Hint
}

export default function HintElem({ hint }: Props) {
  const [label, setLabel] = useState<string>(hint.label ?? '')
  const [value, setValue] = useState<string>(hint.value ?? '')

  return (
    <div className={cn('bg-zinc-700 border-2 border-zinc-800')}>
      <Input
        type="text"
        value={label}
        disabled={hint.fixedLabel}
        onChange={(event) => {
          setLabel(event.target.value)
        }}
        className={cn('font-medium border-0 disabled:opacity-100 shadow-none')}
      />
      <Input
        type="text"
        value={value}
        placeholder="?"
        onChange={(event) => {
          setValue(event.target.value)
        }}
        className={cn('font-light border-0 shadow-none')}
      />
    </div>
  )
}
