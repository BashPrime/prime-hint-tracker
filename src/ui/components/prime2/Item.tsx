import { useState } from 'react'
import ComboBox from '../ui/combo-box'
import { createOptions } from '@/lib/utils'
import { PRIME_2_ALL_ITEMS_VALUES } from '@/data/Prime2.data'

type Props = {
  item: string | null,
  setItem?: (item: string | null) => void
}

export default function Prime2Item({ item }: Props) {
  const [editMode, setEditMode] = useState(false)
  return (
    <>
      {!editMode && <p onClick={() => setEditMode(true)}>{item ?? '?'}</p>}
      {editMode && <ComboBox options={createOptions([...PRIME_2_ALL_ITEMS_VALUES])} />}
    </>
  )
}
