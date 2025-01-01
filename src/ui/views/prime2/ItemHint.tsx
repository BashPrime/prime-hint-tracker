import { Prime2ItemInput, Prime2LocationInput } from "@/components/prime2/inputs"
import { useState } from "react"

export default function Prime2ItemHint() {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <Prime2ItemInput />
      <Prime2LocationInput />
    </>
  )
}