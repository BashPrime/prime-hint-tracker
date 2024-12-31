import { useState } from 'react'
import { Input } from '../components/ui/input'
import { cn } from '../lib/utils'

type Props = {
  label?: string
}

export default function ItemLocationHint(props: Props) {
  const [label, setLabel] = useState<string>('')
  const [value, setValue] = useState<string>('')

  return (
    <>
      {props.label && (
        <p className={cn('font-semibold')}>{props.label}</p>
      )}
      {!props.label && (
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
