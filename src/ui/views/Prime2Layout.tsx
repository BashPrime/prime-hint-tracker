import HintPanel from "./HintPanel"
import { Hint } from "../types/Hint.types"
import { atom } from "jotai"
import {
  PRIME_2_AMBER_HINTS,
  PRIME_2_COBALT_HINTS,
  PRIME_2_EMERALD_HINTS,
  PRIME_2_KEYBEARER_HINTS,
  PRIME_2_SKY_TEMPLE_KEY_HINTS,
  PRIME_2_VIOLET_HINTS
} from "../data/Prime2.data"
import { cn } from "../lib/utils"

export default function Prime2Layout() {
  // !STATE
  const itemHints = atom<Hint[]>([])
  const violetHints = atom<Hint[]>([...PRIME_2_VIOLET_HINTS])
  const amberHints = atom<Hint[]>([...PRIME_2_AMBER_HINTS])
  const emeraldHints = atom<Hint[]>([...PRIME_2_EMERALD_HINTS])
  const cobaltHints = atom<Hint[]>([...PRIME_2_COBALT_HINTS])
  const keybearerHints = atom<Hint[]>([...PRIME_2_KEYBEARER_HINTS])
  const stkHints = atom<Hint[]>([...PRIME_2_SKY_TEMPLE_KEY_HINTS])

  return (
    <div className={cn('flex flex-row gap-2')}>
      <HintPanel
        name="Items"
        hints={itemHints}
        allowNew
      />
      <div className={cn('flex flex-col gap-2')}>
        <HintPanel
          name="Violet Hints"
          hints={violetHints}
          className={cn('border-l-2 border-fuchsia-500')}
        />
        <HintPanel
          name="Amber Hints"
          hints={amberHints}
          className={cn('border-l-2 border-orange-500')}
        />
      </div>
      <div className={cn('flex flex-col gap-2')}>
        <HintPanel
          name="Emerald Hints"
          hints={emeraldHints}
          className={cn('border-l-2 border-green-500')}
        />
        <HintPanel
          name="Cobalt Hints"
          hints={cobaltHints}
          className={cn('border-l-2 border-blue-500')}
        />
      </div>
      <HintPanel
        name="Keybearer Hints"
        hints={keybearerHints}
      />
      <HintPanel
        name="Sky Temple Keys"
        hints={stkHints}
        className={cn('border-l-2 border-lime-500')}
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