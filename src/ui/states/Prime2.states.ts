import { Hint } from "@/types/Hint.types";
import { Prime2ItemLocationHint, RegionHints } from "@/types/Prime2.types";
import { atomWithReset } from "jotai/utils";

export const prime2ItemHintsState = atomWithReset<Hint[]>([]);
export const prime2ItemLocationHintsState = atomWithReset<
  Prime2ItemLocationHint[]
>([]);
export const templeGroundsHintsState = atomWithReset<RegionHints>({
  variant: "temple",
  bossName: "U-Mos Reward",
  bossItem: null,
  bossKeys: [],
  flyingCacheHints: [
    { name: "Accursed Lake", value: null },
    { name: "Defiled Shrine", value: null },
    { name: "Ing Reliquary", value: null },
  ],
  translatorHints: [
    {
      name: "Main Energy Controller",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Transport to Agon Wastes",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Fortress Transport Access",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Meeting Grounds",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Path of Eyes",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
  ],
});
export const agonHintsState = atomWithReset<RegionHints>({
  variant: "agon",
  bossName: "Amorbis",
  bossItem: null,
  bossKeys: Array(3).fill(null),
  flyingCacheHints: [
    { name: "Battleground", value: null },
    { name: "Dark Oasis", value: null },
  ],
  translatorHints: [
    {
      name: "Agon Energy Controller",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Mining Plaza",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Portal Terminal",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Mining Station A",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Mining Station B",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
  ],
});
export const torvusHintsState = atomWithReset<RegionHints>({
  variant: "torvus",
  bossName: "Chykka",
  bossItem: null,
  bossKeys: Array(3).fill(null),
  flyingCacheHints: [
    { name: "Poisoned Bog", value: null },
    { name: "Dungeon", value: null },
  ],
  translatorHints: [
    {
      name: "Torvus Energy Controller",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Path of Roots",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Underground Tunnel",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Catacombs",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Gathering Hall",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Training Chamber",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
  ],
});
export const sanctuaryHintsState = atomWithReset<RegionHints>({
  variant: "sanctuary",
  bossName: "Quadraxis",
  bossItem: null,
  bossKeys: Array(3).fill(null),
  flyingCacheHints: [
    { name: "Hive Dynamo Works", value: null },
    { name: "Hive Entrance", value: null },
  ],
  translatorHints: [
    {
      name: "Sanctuary Energy Controller",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Sanctuary Entrance",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Hall of Combat Mastery",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Main Gyro Chamber",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Main Research",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
    {
      name: "Watch Station",
      firstValue: null,
      secondValue: null,
      proximityType: "in",
      numRooms: 0,
    },
  ],
});

export const progressionItemsState = atomWithReset<Prime2ItemLocationHint[]>([
  { item: "Missile Launcher", location: null },
  { item: "Seeker Launcher", location: null },
  { item: "Super Missile", location: null },
  { item: "Dark Beam", location: null },
  { item: "Light Beam", location: null },
  { item: "Annihilator Beam", location: null },
  { item: "Space Jump Boots", location: null },
  { item: "Gravity Boost", location: null },
  { item: "Grapple Beam", location: null },
  { item: "Screw Attack", location: null },
  { item: "Morph Ball", location: null },
  { item: "Morph Ball Bomb", location: null },
  { item: "Boost Ball", location: null },
  { item: "Spider Ball", location: null },
  { item: "Power Bomb", location: null },
  { item: "Dark Suit", location: null },
  { item: "Light Suit", location: null },
  { item: "Dark Visor", location: null },
  { item: "Echo Visor", location: null },
  { item: "Violet Translator", location: null },
  { item: "Amber Translator", location: null },
  { item: "Emerald Translator", location: null },
  { item: "Cobalt Translator", location: null },
])

export const skyTempleKeyHintsState = atomWithReset<Prime2ItemLocationHint[]>([
  { item: "Key 1", location: null },
  { item: "Key 2", location: null },
  { item: "Key 3", location: null },
  { item: "Key 4", location: null },
  { item: "Key 5", location: null },
  { item: "Key 6", location: null },
  { item: "Key 7", location: null },
  { item: "Key 8", location: null },
  { item: "Key 9", location: null },
]);