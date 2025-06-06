export const PRIME_2_MAJOR_UPGRADES = [
  "Missile Launcher",
  "Super Missile",
  "Darkburst",
  "Sunburst",
  "Sonic Boom",
  "Seeker Launcher",
  "Power Beam",
  "Dark Beam",
  "Light Beam",
  "Annihilator Beam",
  "Combat Visor",
  "Scan Visor",
  "Dark Visor",
  "Echo Visor",
  "Space Jump Boots",
  "Gravity Boost",
  "Grapple Beam",
  "Screw Attack",
  "Dark Suit",
  "Light Suit",
  "Morph Ball",
  "Morph Ball Bomb",
  "Power Bomb",
  "Boost Ball",
  "Spider Ball",
  "Violet Translator",
  "Amber Translator",
  "Emerald Translator",
  "Cobalt Translator",
  "Cannon Ball",
  "Massive Damage",
  "Unlimited Beam Ammo",
  "Unlimited Missile Ammo",
] as const;

export const PRIME_2_PROGRESSIVE_MAJORS = [
  "Progressive Suit",
  "Progressive Grapple",
] as const;

export const PRIME_2_EXPANSIONS = [
  "Energy Tank",
  "Missile Expansion",
  "Beam Ammo Expansion",
  "Light Ammo Expansion",
  "Dark Ammo Expansion",
  "Power Bomb Expansion",
] as const;

export const PRIME_2_TEMPLE_KEYS = [
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

export const PRIME_2_LEGACY_MAJORS_CATEGORIES = [
  "Visor",
  "Suit",
  "Beam",
  "Morph Ball system",
  "Movement system",
  "Missile system",
  "Charge Combo",
  "Translator",
  "Key",
  "Dark Temple Key",
  "Sky Temple Key",
  "Major Upgrade",
];

export const PRIME_2_LEGACY_KEYBEARER_CATEGORIES = [
  "Missile-related",
  "Morph Ball-related",
  "Beam-related",
  "Life Support system",
  "HUD system",
  "Movement system",
  "Key",
] as const;

export const PRIME_2_ALL_MAJOR_ITEMS = [
  ...PRIME_2_MAJOR_UPGRADES,
  ...PRIME_2_PROGRESSIVE_MAJORS,
  ...PRIME_2_EXPANSIONS,
  ...PRIME_2_TEMPLE_KEYS,
  ...PRIME_2_LEGACY_MAJORS_CATEGORIES,
] as const;

export const PRIME_2_ALL_REGIONS = [
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

export const PRIME_2_REGION_OPTIONS = [...PRIME_2_ALL_REGIONS].filter(
  (region) => region !== "Sky Temple"
);

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
  "Temple Access (Agon)",
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
  "Temple Access (Torvus)",
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
  "Temple Access (Sanctuary)",
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

export const PRIME_2_LOCATIONS_WITH_ITEMS = [
  "Agon Energy Controller",
  "Agon Temple",
  "Bioenergy Production",
  "Central Mining Station",
  "Command Center",
  "Main Reactor",
  "Mine Shaft",
  "Mining Plaza",
  "Mining Station A",
  "Mining Station Access",
  "Mining Station B",
  "Portal Access A",
  "Sand Cache",
  "Sand Processing",
  "Sandcanyon",
  "Storage A",
  "Storage B",
  "Storage C",
  "Storage D",
  "Transport Center",
  "Ventilation Area A",
  "Battleground",
  "Crossroads",
  "Dark Agon Temple",
  "Dark Oasis",
  "Doomed Entry",
  "Feeding Pit",
  "Ing Cache 1",
  "Ing Cache 2",
  "Ing Cache 4",
  "Judgment Pit",
  "Junction Site",
  "Trial Tunnel",
  "Warrior's Walk",
  "Cache A",
  "Cache B",
  "Dark Torvus Arena",
  "Dark Torvus Temple",
  "Dungeon",
  "Poisoned Bog",
  "Putrid Alcove",
  "Sacrificial Chamber",
  "Undertemple Access",
  "Undertemple",
  "Undertransit One",
  "Venomous Pond",
  "Main Energy Controller",
  "Temple Sanctuary",
  "Transport A Access",
  "Transport B Access",
  "Aerial Training Site",
  "Culling Chamber",
  "Hazing Cliff",
  "Hive Dynamo Works",
  "Hive Entrance",
  "Hive Gyro Chamber",
  "Hive Temple",
  "Aerie",
  "Central Area Transport West",
  "Dynamo Works",
  "Hall of Combat Mastery",
  "Main Gyro Chamber",
  "Main Research",
  "Reactor Core",
  "Sanctuary Energy Controller",
  "Sanctuary Entrance",
  "Sanctuary Map Station",
  "Sentinel's Path",
  "Temple Access (Sanctuary)",
  "Transit Station",
  "Vault",
  "Watch Station Access",
  "Watch Station",
  "Accursed Lake",
  "Defiled Shrine",
  "Ing Reliquary",
  "Phazon Grounds",
  "Plain of Dark Worship",
  "Profane Path",
  "War Ritual Grounds",
  "Communication Area",
  "Dynamo Chamber",
  "Fortress Transport Access",
  "GFMC Compound",
  "Grand Windchamber",
  "Hall of Honored Dead",
  "Hive Chamber A",
  "Hive Chamber B",
  "Storage Cavern B",
  "Temple Assembly Site",
  "Transport to Agon Wastes",
  "Windchamber Gateway",
  "Abandoned Worksite",
  "Forgotten Bridge",
  "Gathering Hall",
  "Great Bridge",
  "Hydrochamber Storage",
  "Hydrodynamo Station",
  "Meditation Vista",
  "Path of Roots",
  "Plaza Access",
  "Portal Chamber",
  "Temple Access (Torvus)",
  "Torvus Energy Controller",
  "Torvus Grove",
  "Torvus Lagoon",
  "Torvus Plaza",
  "Torvus Temple",
  "Training Chamber",
  "Transit Tunnel East",
  "Transit Tunnel South",
  "Underground Tunnel",
] as const;

export const PRIME_2_PICKUP_FEATURES = [
  "Chozo technology",
  "Luminoth technology",
  "Beam",
  "Charge combo",
  "Cheater's delight",
  "Dark-aligned upgrade",
  "Key",
  "Light-aligned upgrade",
  "Missile system",
  "Morph Ball system",
  "Movement system",
  "Suit",
  "Translator",
  "Visor"
] as const;

export const PRIME_2_LOCATION_FEATURES = [
  "guarded by a Boss",
  "in a Flying Ing Cache",
  "in a Morph Ball tunnel",
  "in a regional Temple",
  "near a Bomb Slot",
  "near a Boost Spinner",
  "near a Dark Visor Lock",
  "near a Grapple Point",
  "near a Half-Pipe",
  "near a Keybearer corpse",
  "near a Kinetic Orb Cannon",
  "near a Light Energy Transport",
  "near a Luminoth corpse",
  "near a Portal",
  "near a Screw Attack Wall",
  "near a Spider Track",
  "near a Translator Gate",
  "near an Echo Visor Lock",
  "near an Energy Controller",
  "near an elevator unit",
  "near exposed Phazon",
  "near some Luminoth lore",
  "overtop an Abyss",
  "submerged in water",
]

export const PROXIMITY_OPTIONS = ["in", "up to", "exactly"] as const;
