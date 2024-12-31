import z from 'zod'
import { PRIME_2_EXPANSIONS_VALUES, PRIME_2_ITEMS_VALUES, PRIME_2_PROGRESSIVE_ITEMS_VALUES, PRIME_2_TEMPLE_KEYS_VALUES } from '../data/Prime2.data'

export const Prime2ItemsSchema = z.enum(PRIME_2_ITEMS_VALUES)
export type Prime2Items = z.infer<typeof Prime2ItemsSchema>

export const Prime2ProgressiveItemsScema = z.enum(PRIME_2_PROGRESSIVE_ITEMS_VALUES)
export type Prime2ProgressiveItems = z.infer<typeof Prime2ProgressiveItemsScema>

export const Prime2ExpansionsSchema = z.enum(PRIME_2_EXPANSIONS_VALUES)
export type Prime2Expansions = z.infer<typeof Prime2ExpansionsSchema>

export const Prime2TempleKeysSchema = z.enum(PRIME_2_TEMPLE_KEYS_VALUES)
export type Prime2TempleKeys = z.infer<typeof Prime2TempleKeysSchema>
