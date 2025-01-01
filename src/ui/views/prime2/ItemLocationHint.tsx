import { Prime2ItemInput, Prime2ItemLocationInput } from "@/components/prime2/inputs"
import { useState } from "react"

export default function Prime2ItemLocationHint() {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <Prime2ItemInput />
      <Prime2ItemLocationInput />
    </>
  )
}