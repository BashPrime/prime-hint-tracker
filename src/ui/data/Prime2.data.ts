import { Hint } from "../types/Hint.types"

export const PRIME_2_ITEMS_VALUES = [
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
] as const

export const PRIME_2_PROGRESSIVE_ITEMS_VALUES = [
  'Progressive Suit',
  'Progressive Grapple',
] as const

export const PRIME_2_EXPANSIONS_VALUES = [
  'Energy Tank',
  'Missile Expansion',
  'Beam Ammo Expansion',
  'Power Bomb Expansion',
] as const

export const PRIME_2_TEMPLE_KEYS_VALUES = [
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
] as const

export const PRIME_2_KEYBEARER_HINTS: Hint[] = [
  { label: 'Industrial Site', value: '' },
  { label: 'Storage Cavern B', value: '' },
  { label: 'Landing Site', value: '' },
  { label: 'Central Mining Station', value: '' },
  { label: 'Main Reactor', value: '' },
  { label: 'Torvus Lagoon', value: '' },
  { label: 'Catacombs', value: '' },
  { label: 'Dynamo Works', value: '' },
  { label: 'Sanctuary Entrance', value: '' },
] as const

export const PRIME_2_SKY_TEMPLE_KEY_HINTS: Hint[] = PRIME_2_TEMPLE_KEYS_VALUES
  .filter((key) => key.toLowerCase().includes('sky'))
  .map((key) => ({ label: key as string, value: '' }))
