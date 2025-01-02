import z from 'zod'

export const GameSchema = z.enum([
    'prime',
    'echoes',
    'corruption',
])
export type Game = z.infer<typeof GameSchema>
