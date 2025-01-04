import {
  Prime2ItemLocationHint,
  Prime2ItemLocationHintSchema,
  RegionHints,
  UnhintedItem,
} from "@/types/Prime2.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const templeGroundsHintsState = atomWithReset<RegionHints>({
  variant: "temple",
  bossName: "U-Mos Reward",
  bossItem: atom<string>(""),
  bossKeys: [],
  flyingCacheHints: [
    { name: "Accursed Lake", value: atom<string>("") },
    { name: "Defiled Shrine", value: atom<string>("") },
    { name: "Ing Reliquary", value: atom<string>("") },
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
  bossItem: atom<string>(""),
  bossKeys: Array(3).fill(atom<string>("")),
  flyingCacheHints: [
    { name: "Battleground", value: atom<string>("") },
    { name: "Dark Oasis", value: atom<string>("") },
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
  bossItem: atom<string>(""),
  bossKeys: Array(3).fill(atom<string>("")),
  flyingCacheHints: [
    { name: "Poisoned Bog", value: atom<string>("") },
    { name: "Dungeon", value: atom<string>("") },
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
  bossItem: atom<string>(""),
  bossKeys: Array(3).fill(atom<string>("")),
  flyingCacheHints: [
    { name: "Hive Dynamo Works", value: atom<string>("") },
    { name: "Hive Entrance", value: atom<string>("") },
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
]);

export const unhintedItemsState = atomWithReset<UnhintedItem[]>([]);

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
