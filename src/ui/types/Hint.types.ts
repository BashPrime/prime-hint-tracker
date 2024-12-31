import z from 'zod'

export const ProximityTypeSchema = z.enum([
  'up-to',
  'exactly'
])
export type ProximityType = z.infer<typeof ProximityTypeSchema>

export type Hint = {
  label?: string
  value?: string
  proximity?: ProximityType
  fixedLabel?: boolean
}