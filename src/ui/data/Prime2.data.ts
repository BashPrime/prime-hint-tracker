import { Hint } from "../types/Hint.types";

export const PRIME_2_ITEMS_VALUES = [
  "Super Missile",
  "Seeker Launcher",
  "Dark Beam",
  "Light Beam",
  "Annihilator Beam",
  "Dark Visor",
  "Echo Visor",
  "Space Jump Boots",
  "Gravity Boost",
  "Grapple Beam",
  "Screw Atack",
  "Dark Suit",
  "Light Suit",
  "Morph Ball Bomb",
  "Power Bomb",
  "Boost Ball",
  "Spider Ball",
  "Violet Translator",
  "Amber Translator",
  "Emerald Translator",
  "Cobalt Translator",
] as const;

export const PRIME_2_PROGRESSIVE_ITEMS_VALUES = [
  "Progressive Suit",
  "Progressive Grapple",
] as const;

export const PRIME_2_EXPANSIONS_VALUES = [
  "Energy Tank",
  "Missile Expansion",
  "Beam Ammo Expansion",
  "Power Bomb Expansion",
] as const;

export const PRIME_2_TEMPLE_KEYS_VALUES = [
  "Dark Agon Key 1",
  "Dark Agon Key 2",
  "Dark Agon Key 3",
  "Dark Torvus Key 1",
  "Dark Torvus Key 2",
  "Dark Torvus Key 3",
  "Ing Hive Key 1",
  "Ing Hive Key 2",
  "Ing Hive Key 3",
  "Sky Temple Key 1",
  "Sky Temple Key 2",
  "Sky Temple Key 3",
  "Sky Temple Key 4",
  "Sky Temple Key 5",
  "Sky Temple Key 6",
  "Sky Temple Key 7",
  "Sky Temple Key 8",
  "Sky Temple Key 9",
] as const;

export const PRIME_2_VIOLET_HINTS: Hint[] = [
  { label: "Main Energy Controller", value: "", fixedLabel: true },
  { label: "Transport to Agon Wastes", value: "", fixedLabel: true },
  { label: "Fortress Transport Access", value: "", fixedLabel: true },
  { label: "Meeting Grounds", value: "", fixedLabel: true },
  { label: "Path of Eyes", value: "", fixedLabel: true },
] as const;

export const PRIME_2_AMBER_HINTS: Hint[] = [
  { label: "Agon Energy Controller", value: "", fixedLabel: true },
  { label: "Mining Plaza", value: "", fixedLabel: true },
  { label: "Portal Terminal", value: "", fixedLabel: true },
  { label: "Mining Station A", value: "", fixedLabel: true },
  { label: "Mining Station B", value: "", fixedLabel: true },
] as const;

export const PRIME_2_EMERALD_HINTS: Hint[] = [
  { label: "Torvus Energy Controller", value: "", fixedLabel: true },
  { label: "Path of Roots", value: "", fixedLabel: true },
  { label: "Underground Tunnel", value: "", fixedLabel: true },
  { label: "Catacombs", value: "", fixedLabel: true },
  { label: "Gathering Hall", value: "", fixedLabel: true },
  { label: "Training Chamber", value: "", fixedLabel: true },
] as const;

export const PRIME_2_COBALT_HINTS: Hint[] = [
  { label: "Sanctuary Energy Controller", value: "", fixedLabel: true },
  { label: "Sanctuary Entrance", value: "", fixedLabel: true },
  { label: "Hall of Combat Mastery", value: "", fixedLabel: true },
  { label: "Main Gyro Chamber", value: "", fixedLabel: true },
  { label: "Main Research", value: "", fixedLabel: true },
  { label: "Watch Station", value: "", fixedLabel: true },
] as const;

export const PRIME_2_KEYBEARER_HINTS: Hint[] = [
  { label: "Accursed Lake", value: "", fixedLabel: true },
  { label: "Ing Reliquary", value: "", fixedLabel: true },
  { label: "Defiled Shrine", value: "", fixedLabel: true },
  { label: "Battleground", value: "", fixedLabel: true },
  { label: "Dark Oasis", value: "", fixedLabel: true },
  { label: "Poisoned Bog", value: "", fixedLabel: true },
  { label: "Dungeon", value: "", fixedLabel: true },
  { label: "Hive Dynamo Works", value: "", fixedLabel: true },
  { label: "Hive Entrance", value: "", fixedLabel: true },
] as const;

export const PRIME_2_SKY_TEMPLE_KEY_HINTS: Hint[] =
  PRIME_2_TEMPLE_KEYS_VALUES.filter((key) =>
    key.toLowerCase().includes("sky")
  ).map((key) => ({ label: key as string, value: "", fixedLabel: true }));

export const PRIME_2_REGIONS = [
  "Temple Grounds",
  "Sky Temple Grounds",
  "Great Temple",
  "Sky Temple",
  "Agon Wastes",
  "Dark Agon Wastes",
  "Torvus Bog",
  "Dark Torvus Bog",
  "Sanctuary Fortress",
  "Ing Hive",
] as const;

export const PRIME_2_ALL_LOCATIONS = [
  "Landing Site",
  "Service Access",
  "Hive Access Tunnel",
  "Path of Honor",
  "Meeting Grounds",
  "Hive Transport Area",
  "Hive Chamber A",
  "Hall of Honored Dead",
  "Hall of Eyes",
  "Temple Transport C",
  "Industrial Site",
  "Hive Chamber C",
  "Hive Tunnel",
  "Base Access",
  "Path of Eyes",
  "Agon Transport Access",
  "Collapsed Tunnel",
  "Hive Chamber B",
  "Hive Save Station",
  "Command Chamber",
  "War Ritual Grounds",
  "Abandoned Base",
  "Windchamber Gateway",
  "Torvus Transport Access",
  "Transport to Agon Wastes",
  "Temple Assembly Site",
  "Hive Storage",
  "Shrine Access",
  "Grand Windchamber",
  "Transport to Torvus Bog",
  "Dynamo Chamber",
  "Temple Transport B",
  "Storage Cavern B",
  "Plain of Dark Worship",
  "Defiled Shrine",
  "Gateway Access",
  "Windchamber Tunnel",
  "Ing Windchamber",
  "Communication Area",
  "Lake Access",
  "Sky Temple Gateway",
  "GFMC Compound",
  "Storage Cavern A",
  "Trooper Security Station",
  "Accursed Lake",
  "Fortress Transport Access",
  "Sacred Bridge",
  "Transport to Sanctuary Fortress",
  "Sacred Path",
  "Temple Transport A",
  "Profane Path",
  "Phazon Pit",
  "Phazon Grounds",
  "Reliquary Access",
  "Reliquary Grounds",
  "Ing Reliquary",
  "Credits",
  "Temple Transport A",
  "Transport A Access",
  "Temple Sanctuary",
  "Transport C Access",
  "Controller Transport",
  "Transport B Access",
  "Temple Transport C",
  "Main Energy Controller",
  "Temple Transport B",
  "Sky Temple Energy Controller",
  "Sanctum Access",
  "Sanctum",
  "Transport to Temple Grounds",
  "Plaza Access",
  "Mining Plaza",
  "Agon Map Station",
  "Transit Station",
  "Save Station A",
  "Mining Station Access",
  "Duelling Range",
  "Mining Station B",
  "Transport Center",
  "Mining Station A",
  "Dark Transit Station",
  "Save Station 2",
  "Ing Cache 4",
  "Junction Site",
  "Storage A",
  "Mine Shaft",
  "Trial Grounds",
  "Portal Terminal",
  "Transport to Torvus Bog",
  "Crossroads",
  "Temple Access",
  "Central Station Access",
  "Sand Cache",
  "Portal Access A",
  "Judgment Pit",
  "Agon Temple",
  "Trial Tunnel",
  "Portal Site",
  "Central Mining Station",
  "Dark Agon Temple Access",
  "Warrior's Walk",
  "Save Station 1",
  "Portal Access",
  "Controller Access",
  "Sandcanyon",
  "Dark Agon Temple",
  "Command Center Access",
  "Battleground",
  "Agon Energy Controller",
  "Ventilation Area A",
  "Dark Controller Access",
  "Command Center",
  "Double Path",
  "Transport to Sanctuary Fortress",
  "Main Reactor",
  "Dark Agon Energy Controller",
  "Biostorage Access",
  "Security Station B",
  "Doomed Entry",
  "Sand Processing",
  "Storage D",
  "Dark Oasis",
  "Biostorage Station",
  "Feeding Pit Access",
  "Oasis Access",
  "Save Station C",
  "Hall of Stairs",
  "Ing Cache 3",
  "Security Station A",
  "Storage B",
  "Feeding Pit",
  "Ventilation Area B",
  "Save Station 3",
  "Bioenergy Production",
  "Watering Hole",
  "Ing Cache 1",
  "Bitter Well",
  "Storage C",
  "Phazon Site",
  "Ing Cache 2",
  "Transport to Temple Grounds",
  "Temple Transport Access",
  "Torvus Lagoon",
  "Ruined Alcove",
  "Portal Chamber (Light)",
  "Path of Roots",
  "Save Station A",
  "Forgotten Bridge",
  "Portal Chamber (Dark)",
  "Great Bridge",
  "Cache A",
  "Plaza Access",
  "Abandoned Worksite",
  "Dark Forgotten Bridge",
  "Grove Access",
  "Poisoned Bog",
  "Venomous Pond",
  "Temple Access",
  "Torvus Map Station",
  "Torvus Plaza",
  "Dark Arena Tunnel",
  "Putrid Alcove",
  "Brooding Ground",
  "Dark Falls",
  "Torvus Grove",
  "Dark Torvus Temple Access",
  "Save Station 1",
  "Torvus Temple",
  "Dark Torvus Arena",
  "Polluted Mire",
  "Underground Tunnel",
  "Meditation Vista",
  "Dark Torvus Temple",
  "Transport to Agon Wastes",
  "Underground Transport",
  "Controller Access",
  "Gloom Vista",
  "Ammo Station",
  "Cache B",
  "Dark Controller Access",
  "Hydrodynamo Station",
  "Torvus Energy Controller",
  "Undertemple Shaft",
  "Dark Torvus Energy Controller",
  "Gathering Access",
  "Training Access",
  "Catacombs Access",
  "Save Station B",
  "Hydrodynamo Shaft",
  "Crypt Tunnel",
  "Sacrificial Chamber Tunnel",
  "Save Station 2",
  "Undertemple Access",
  "Gathering Hall",
  "Training Chamber",
  "Catacombs",
  "Main Hydrochamber",
  "Crypt",
  "Sacrificial Chamber",
  "Undertemple",
  "Transit Tunnel South",
  "Transit Tunnel West",
  "Transit Tunnel East",
  "Fortress Transport Access",
  "Dungeon",
  "Hydrochamber Storage",
  "Undertransit One",
  "Undertransit Two",
  "Transport to Sanctuary Fortress",
  "Transport to Temple Grounds",
  "Temple Transport Access",
  "Sanctuary Entrance",
  "Power Junction",
  "Reactor Access",
  "Reactor Core",
  "Save Station A",
  "Minigyro Chamber",
  "Transit Station",
  "Sanctuary Map Station",
  "Hall of Combat Mastery",
  "Main Research",
  "Hive Portal Chamber",
  "Agon Transport Access",
  "Central Area Transport East",
  "Culling Chamber",
  "Central Area Transport West",
  "Torvus Transport Access",
  "Staging Area",
  "Transport to Agon Wastes",
  "Dynamo Works",
  "Hazing Cliff",
  "Central Hive East Transport",
  "Unseen Way",
  "Watch Station",
  "Transport to Torvus Bog",
  "Central Hive West Transport",
  "Dynamo Access",
  "Workers Path",
  "Dynamo Storage",
  "Hive Dynamo Works",
  "Hive Reactor",
  "Sentinel's Path",
  "Watch Station Access",
  "Grand Abyss",
  "Aerial Training Site",
  "Main Gyro Chamber",
  "Sanctuary Temple",
  "Hive Cache 3",
  "Hive Dynamo Access",
  "Hive Save Station 1",
  "Hive Reactor Access",
  "Hive Cache 1",
  "Judgment Drop",
  "Vault",
  "Temple Security Access",
  "Temple Access",
  "Checkpoint Station",
  "Save Station B",
  "Controller Access",
  "Hive Gyro Chamber",
  "Entrance Defense Hall",
  "Vault Attack Portal",
  "Hive Temple",
  "Aerie Transport Station",
  "Sanctuary Energy Controller",
  "Hive Temple Access",
  "Hive Gyro Access",
  "Hive Save Station 2",
  "Hive Entrance",
  "Hive Controller Access",
  "Aerie Access",
  "Hive Ammo Station",
  "Hive Energy Controller",
  "Aerie", // hi krar
  "Hive Summit",
] as const;
