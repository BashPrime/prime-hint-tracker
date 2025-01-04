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
  bossItem: atom(""),
  bossKeys: [],
  flyingCacheHints: [
    { name: "Accursed Lake", value: atom("") },
    { name: "Defiled Shrine", value: atom("") },
    { name: "Ing Reliquary", value: atom("") },
  ],
  translatorHints: [
    {
      name: "Main Energy Controller",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Transport to Agon Wastes",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Fortress Transport Access",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Meeting Grounds",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Path of Eyes",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
  ],
});
export const agonHintsState = atomWithReset<RegionHints>({
  variant: "agon",
  bossName: "Amorbis",
  bossItem: atom(""),
  bossKeys: Array(3).fill(atom("")),
  flyingCacheHints: [
    { name: "Battleground", value: atom("") },
    { name: "Dark Oasis", value: atom("") },
  ],
  translatorHints: [
    {
      name: "Agon Energy Controller",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Mining Plaza",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Portal Terminal",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Mining Station A",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Mining Station B",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
  ],
});
export const torvusHintsState = atomWithReset<RegionHints>({
  variant: "torvus",
  bossName: "Chykka",
  bossItem: atom(""),
  bossKeys: Array(3).fill(atom("")),
  flyingCacheHints: [
    { name: "Poisoned Bog", value: atom("") },
    { name: "Dungeon", value: atom("") },
  ],
  translatorHints: [
    {
      name: "Torvus Energy Controller",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Path of Roots",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Underground Tunnel",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Catacombs",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Gathering Hall",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Training Chamber",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
  ],
});
export const sanctuaryHintsState = atomWithReset<RegionHints>({
  variant: "sanctuary",
  bossName: "Quadraxis",
  bossItem: atom(""),
  bossKeys: Array(3).fill(atom("")),
  flyingCacheHints: [
    { name: "Hive Dynamo Works", value: atom("") },
    { name: "Hive Entrance", value: atom("") },
  ],
  translatorHints: [
    {
      name: "Sanctuary Energy Controller",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Sanctuary Entrance",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Hall of Combat Mastery",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Main Gyro Chamber",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Main Research",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
    },
    {
      name: "Watch Station",
      firstValue: atom(""),
      secondValue: atom(""),
      proximity: atom(""),
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
