import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { ReactNode, useState } from "react"

type Props = {
  children?: ReactNode
  canDelete?: boolean
  onDelete?: () => void
}

export default function Hint(props: Props) {
  const [checked, setChecked] = useState(false)
  return (
    <div
      className={cn(
        'flex flex-row gap-2 p-2',
        checked ? 'bg-green-900' : 'bg-zinc-700'
      )}
    >
      <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
      {props.children}
    </div>
  )
}