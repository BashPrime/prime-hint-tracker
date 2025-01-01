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

export const PRIME_2_VIOLET_HINTS: Hint[] = [
  { label: 'Main Energy Controller', value: '', fixedLabel: true },
  { label: 'Transport to Agon Wastes', value: '', fixedLabel: true },
  { label: 'Fortress Transport Access', value: '', fixedLabel: true },
  { label: 'Meeting Grounds', value: '', fixedLabel: true },
  { label: 'Path of Eyes', value: '', fixedLabel: true },
] as const

export const PRIME_2_AMBER_HINTS: Hint[] = [
  { label: 'Agon Energy Controller', value: '', fixedLabel: true },
  { label: 'Mining Plaza', value: '', fixedLabel: true },
  { label: 'Portal Terminal', value: '', fixedLabel: true },
  { label: 'Mining Station A', value: '', fixedLabel: true },
  { label: 'Mining Station B', value: '', fixedLabel: true },
] as const

export const PRIME_2_EMERALD_HINTS: Hint[] = [
  { label: 'Torvus Energy Controller', value: '', fixedLabel: true },
  { label: 'Path of Roots', value: '', fixedLabel: true },
  { label: 'Underground Tunnel', value: '', fixedLabel: true },
  { label: 'Catacombs', value: '', fixedLabel: true },
  { label: 'Gathering Hall', value: '', fixedLabel: true },
  { label: 'Training Chamber', value: '', fixedLabel: true },
] as const

export const PRIME_2_COBALT_HINTS: Hint[] = [
  { label: 'Sanctuary Energy Controller', value: '', fixedLabel: true },
  { label: 'Sanctuary Entrance', value: '', fixedLabel: true },
  { label: 'Hall of Combat Mastery', value: '', fixedLabel: true },
  { label: 'Main Gyro Chamber', value: '', fixedLabel: true },
  { label: 'Main Research', value: '', fixedLabel: true },
  { label: 'Watch Station', value: '', fixedLabel: true },
] as const

export const PRIME_2_KEYBEARER_HINTS: Hint[] = [
  { label: 'Industrial Site', value: '', fixedLabel: true },
  { label: 'Storage Cavern A', value: '', fixedLabel: true },
  { label: 'Landing Site', value: '', fixedLabel: true },
  { label: 'Central Mining Station', value: '', fixedLabel: true },
  { label: 'Main Reactor', value: '', fixedLabel: true },
  { label: 'Torvus Lagoon', value: '', fixedLabel: true },
  { label: 'Catacombs', value: '', fixedLabel: true },
  { label: 'Dynamo Works', value: '', fixedLabel: true },
  { label: 'Sanctuary Entrance', value: '', fixedLabel: true },
] as const

export const PRIME_2_SKY_TEMPLE_KEY_HINTS: Hint[] = PRIME_2_TEMPLE_KEYS_VALUES
  .filter((key) => key.toLowerCase().includes('sky'))
  .map((key) => ({ label: key as string, value: '', fixedLabel: true }))
