import { useState } from 'react'
import { Input } from '../components/ui/input'

export default function ItemLocationHintI() {
  const [item, setItem] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  return (
    <>
      <Input
        type="text"
        value={item}
        onChange={(event) => {
          setItem(event.target.value)
        }}
      />
      <Input
        type="text"
        value={location}
        onChange={(event) => {
          setLocation(event.target.value)
        }}
      />
    </>
  )
}
