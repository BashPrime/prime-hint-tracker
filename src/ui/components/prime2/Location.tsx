import { useState } from 'react'
import ComboBox from '../ui/combo-box'
import { createOptions } from '@/lib/utils'
import { ProximityType } from '@/types/Hint.types'
import { PRIME_2_ALL_LOCATIONS, PRIME_2_LOCATIONS_WITH_ITEMS } from '@/data/Prime2.data'

type Props = {
  location: string | null
  proximityType: ProximityType
  setLocation?: (location: string | null) => void
}

export default function Prime2Location({ location, proximityType }: Props) {
  const [editMode, setEditMode] = useState(false);
  const locationPool = proximityType === "in" ? [...PRIME_2_LOCATIONS_WITH_ITEMS] : [...PRIME_2_ALL_LOCATIONS]

  return (
    <>
      {!editMode && <p onClick={() => setEditMode(true)}>{location ?? '?'}</p>}
      {editMode && <ComboBox options={createOptions(locationPool)} />}
    </>
  )
}
