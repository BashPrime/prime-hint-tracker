import { HINT_TYPES } from '@/data/Hint.data'
import z from 'zod'

export const ProximityTypeSchema = z.enum(HINT_TYPES)
export type ProximityType = z.infer<typeof ProximityTypeSchema>

export type Hint = {
  label?: string
  value?: string
  proximity?: ProximityType
  fixedLabel?: boolean
}
