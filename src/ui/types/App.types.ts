import z from 'zod'

export const GameSchema = z.enum([
    'echoes'
])
export type Game = z.infer<typeof GameSchema>
