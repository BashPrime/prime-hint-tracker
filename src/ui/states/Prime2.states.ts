import {
  Prime2ItemLocationHint,
  RegionHints,
  SkyTempleKeyHint,
  UnhintedItem,
} from "@/types/Prime2.types";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const templeGroundsHintsState = atomWithReset<RegionHints>({
  variant: "temple",
  bossHints: {
    name: "U-Mos Reward",
    item: atom(""),
    keys: [],
  },
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
  bossHints: {
    name: "Amorbis",
    item: atom(""),
    keys: Array(3).fill(atom("")),
  },
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
  bossHints: {
    name: "Chykka",
    item: atom(""),
    keys: Array(3).fill(""),
  },
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
  bossHints: {
    name: "Quadraxis",
    item: atom(""),
    keys: Array(3).fill(""),
  },
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

export const unhintedItemsState = atomWithReset<UnhintedItem[]>([]);

export const skyTempleKeyHintsState = atomWithReset<SkyTempleKeyHint[]>([
  { id: 1, name: "Key 1", location: "" },
  { id: 2, name: "Key 2", location: "" },
  { id: 3, name: "Key 3", location: "" },
  { id: 4, name: "Key 4", location: "" },
  { id: 5, name: "Key 5", location: "" },
  { id: 6, name: "Key 6", location: "" },
  { id: 7, name: "Key 7", location: "" },
  { id: 8, name: "Key 8", location: "" },
  { id: 9, name: "Key 9", location: "" },
]);
