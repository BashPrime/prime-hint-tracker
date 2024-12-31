import z from 'zod'

export const ProximityTypeSchema = z.enum([
  'up-to',
  'exactly'
])
export type ProximityType = z.infer<typeof ProximityTypeSchema>

export type Hint<Label, Value> = {
  label?: Label
  value?: Value
  proximity?: ProximityType
}