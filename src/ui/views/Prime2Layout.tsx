import HintPanel from "./HintPanel"
import { Hint } from "../types/Hint.types"
import { atom } from "jotai"
import { PRIME_2_KEYBEARER_HINTS, PRIME_2_SKY_TEMPLE_KEY_HINTS } from "../data/Prime2.data"
import { cn } from "../lib/utils"

export default function Prime2Layout() {
  // !STATE
  const itemHints = atom<Hint[]>([])
  const violetHints = atom<Hint[]>([])
  const amberHints = atom<Hint[]>([])
  const emeraldHints = atom<Hint[]>([])
  const cobaltHints = atom<Hint[]>([])
  const keybearerHints = atom<Hint[]>([...PRIME_2_KEYBEARER_HINTS])
  const stkHints = atom<Hint[]>([...PRIME_2_SKY_TEMPLE_KEY_HINTS])

  return (
    <div className={cn('flex flex-row')}>
      <HintPanel
        name="Items"
        hints={itemHints}
        allowNew
      />
      <div className={cn('flex flex-col')}>
        <HintPanel
          name="Violet Hints"
          hints={violetHints}
        />
        <HintPanel
          name="Amber Hints"
          hints={amberHints}
        />
      </div>
      <div className={cn('flex flex-col')}>
        <HintPanel
          name="Emerald Hints"
          hints={emeraldHints}
        />
        <HintPanel
          name="Cobalt Hints"
          hints={cobaltHints}
        />
      </div>
      <HintPanel
        name="Keybearer Hints"
        hints={keybearerHints}
      />
      <HintPanel
        name="Sky Temple Keys"
        hints={stkHints}
      />
      {/* <p>Items</p>
      <p>STKs</p>
      <p>Violet hints</p>
      <p>Amber hints</p>
      <p>Emerald hints</p>
      <p>Cobalt hints</p>
      <p>Keybearer hints</p>
      <p>Bosses and Temple Keys</p> */}
    </div>
  )
}