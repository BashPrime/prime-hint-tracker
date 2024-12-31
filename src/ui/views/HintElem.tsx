import { useState } from 'react'
import { Input } from '../components/ui/input'
import { cn } from '../lib/utils'
import { Hint } from '../types/Hint.types'

type Props = {
  hint: Hint
}

export default function HintElem({hint}: Props) {
  const [label, setLabel] = useState<string>('')
  const [value, setValue] = useState<string>('')

  return (
    <>
      {hint.label && (
        <p className={cn('font-semibold')}>{hint.label}</p>
      )}
      {!hint.label && (
        <Input
          type="text"
          value={label}
          onChange={(event) => {
            setLabel(event.target.value)
          }}
          className={cn('font-semibold border-none')}
        />
      )}
      <Input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
    </>
  )
}
