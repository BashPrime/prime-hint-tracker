import z from 'zod'

export const Prime2ItemsSchema = z.enum([
    'Super Missile',
    'Seeker Launcher',
    'Dark Beam',
    'Light Beam',
    'Annihilator Beam',
    'Dark Visor',
    'Echo Visor',
    'Space Jump Boots',
    'Gravity Boost',
    'Grapple Beam',
    'Screw Atack',
    'Dark Suit',
    'Light Suit',
    'Morph Ball Bomb',
    'Power Bomb',
    'Boost Ball',
    'Spider Ball',
    'Violet Translator',
    'Amber Translator',
    'Emerald Translator',
    'Cobalt Translator',
])
export type Prime2Items = z.infer<typeof Prime2ItemsSchema>

export const Prime2ProgressiveItemsScema = z.enum([
    'Progressive Suit',
    'Progressive Grapple',
])
export type Prime2ProgressiveItems = z.infer<typeof Prime2ProgressiveItemsScema>

export const Prime2ExpansionsSchema = z.enum([
    'Energy Tank',
    'Missile Expansion',
    'Beam Ammo Expansion',
    'Power Bomb Expansion',
])
export type Prime2Expansions = z.infer<typeof Prime2ExpansionsSchema>

const Prime2TempleKeysSchema = z.enum([
    'Dark Agon Key 1',
    'Dark Agon Key 2',
    'Dark Agon Key 3',
    'Dark Torvus Key 1',
    'Dark Torvus Key 2',
    'Dark Torvus Key 3',
    'Ing Hive Key 1',
    'Ing Hive Key 2',
    'Ing Hive Key 3',
    'Sky Temple Key 1',
    'Sky Temple Key 2',
    'Sky Temple Key 3',
    'Sky Temple Key 4',
    'Sky Temple Key 5',
    'Sky Temple Key 6',
    'Sky Temple Key 7',
    'Sky Temple Key 8',
    'Sky Temple Key 9'
])
export type Prime2TempleKeys = z.infer<typeof Prime2TempleKeysSchema>
