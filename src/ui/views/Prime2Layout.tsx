import { useState } from "react"
import HintPanel from "./HintPanel"
import { Hint } from "../types/Hint.types"

export default function Prime2Layout() {
  // !STATE
  const [itemHints, setItemHints] = useState<Hint[]>([])

  return (
    <>
      {/* <HintElem label="Dark Beam" /> */}
      <HintPanel
        name="Items"
        hints={itemHints}
        onCreateNewHint={() => {
          setItemHints([...itemHints, { label: undefined, value: undefined }])
        }}
      />
      {/* <p>Items</p>
      <p>STKs</p>
      <p>Violet hints</p>
      <p>Amber hints</p>
      <p>Emerald hints</p>
      <p>Cobalt hints</p>
      <p>Keybearer hints</p>
      <p>Bosses and Temple Keys</p> */}
    </>
  )
}