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
    <div className={cn('flex flex-row gap-2 h-full')}>
      <HintPanel
        name="Items"
        hints={itemHints}
        allowNew
        className={cn('flex-auto')}
      />
      <div className={cn('flex flex-col flex-auto gap-2')}>
        <HintPanel
          name="Violet Hints"
          hints={violetHints}
          className={cn('border-l-2 border-violet-600 h-full')}
        />
        <HintPanel
          name="Emerald Hints"
          hints={emeraldHints}
          className={cn('border-l-2 border-emerald-600 h-full')}
        />
      </div>
      <div className={cn('flex flex-col flex-auto gap-2')}>
        <HintPanel
          name="Amber Hints"
          hints={amberHints}
          className={cn('border-l-2 border-amber-600 h-full')}
        />
        <HintPanel
          name="Cobalt Hints"
          hints={cobaltHints}
          className={cn('border-l-2 border-sky-600 h-full')}
        />
      </div>
      <HintPanel
        name="Keybearers"
        hints={keybearerHints}
        className={cn('flex-auto border-l-2 border-rose-600')}
      />
      <HintPanel
        name="Sky Temple Keys"
        hints={stkHints}
        className={cn('flex-auto border-l-2 border-lime-600')}
      />
      {/* <p>Bosses and Temple Keys</p> */}
    </div>
  )
}