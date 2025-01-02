import {
  PRIME_2_SKY_TEMPLE_KEY_HINTS,
} from "@/data/Prime2.data";
import { Hint } from "@/types/Hint.types";
import { Prime2ItemLocationHint, RegionHints } from "@/types/Prime2.types";
import { atomWithReset } from "jotai/utils";

export const prime2ItemHintsState = atomWithReset<Hint[]>([]);
export const prime2ItemLocationHintsState = atomWithReset<Prime2ItemLocationHint[]>([]);
export const prime2StkHintsState = atomWithReset<Hint[]>([
  ...PRIME_2_SKY_TEMPLE_KEY_HINTS,
]);
export const templeGroundsHintsState = atomWithReset<RegionHints>({
  bossName: 'U-Mos Reward',
  bossItem: null,
  bossKeys: [],
  flyingCacheHints: [
    { name: 'Accursed Lake', value: null },
    { name: 'Defiled Shrine', value: null },
    { name: 'Ing Reliquary', value: null },
  ],
  translatorHints: [
    { name: "Main Energy Controller", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Transport to Agon Wastes", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Fortress Transport Access", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Meeting Grounds", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Path of Eyes", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
  ],
})
export const agonHintsState = atomWithReset<RegionHints>({
  bossName: 'Amorbis',
  bossItem: null,
  bossKeys: Array(3).fill(null),
  flyingCacheHints: [
    { name: 'Battleground', value: null },
    { name: 'Dark Oasis', value: null },
  ],
  translatorHints: [
    { name: "Agon Energy Controller", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Mining Plaza", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Portal Terminal", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Mining Station A", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Mining Station B", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
  ],
})
export const torvusHintsState = atomWithReset<RegionHints>({
  bossName: 'Chykka',
  bossItem: null,
  bossKeys: Array(3).fill(null),
  flyingCacheHints: [
    { name: 'Poisoned Bog', value: null },
    { name: 'Dungeon', value: null },
  ],
  translatorHints: [
    { name: "Torvus Energy Controller", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Path of Roots", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Underground Tunnel", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Catacombs", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Gathering Hall", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Training Chamber", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
  ],
})
export const sanctuaryHintsState = atomWithReset<RegionHints>({
  bossName: 'Quadraxis',
  bossItem: null,
  bossKeys: Array(3).fill(null),
  flyingCacheHints: [
    { name: 'Hive Dynamo Works', value: null },
    { name: 'Hive Entrance', value: null },
  ],
  translatorHints: [
    { name: "Sanctuary Energy Controller", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Sanctuary Entrance", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Hall of Combat Mastery", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Main Gyro Chamber", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Main Research", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
    { name: "Watch Station", firstValue: null, secondValue: null, proximityType: "in", numRooms: 0 },
  ],
})
