import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { ReactNode, useState } from "react"

type Props = {
  label?: string
  children?: ReactNode
  canDelete?: boolean
  onDelete?: () => void
}

export default function Hint(props: Props) {
  const [checked, setChecked] = useState(false)
  return (
    <div
      className={cn(
        checked ? 'bg-green-900' : 'bg-zinc-700'
      )}
    >
      <div className={cn('flex flex-row gap-2 items-center px-2 py-1 hover:cursor-pointer')} onClick={() => setChecked(!checked)}>
        <Checkbox checked={checked} />
        {props.label && <p className={cn('font-semibold text-sm')}>{props.label}</p>}
      </div>
      {props.children}
    </div>
  )
}