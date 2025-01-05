import {
  RegionHints,
  SkyTempleKeyHint,
  UnhintedItem,
} from "@/types/Prime2.types";
import { atomWithReset } from "jotai/utils";

export const templeGroundsHintsState = atomWithReset<RegionHints>({
  variant: "temple",
  bossHints: {
    name: "U-Mos Reward",
    item: "",
    keys: [],
  },
  flyingCacheHints: [
    { id: 1, name: "Accursed Lake", value: "" },
    { id: 2, name: "Defiled Shrine", value: "" },
    { id: 3, name: "Ing Reliquary", value: "" },
  ],
  translatorHints: [
    {
      name: "Main Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Transport to Agon Wastes",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Fortress Transport Access",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Meeting Grounds",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Path of Eyes",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
  ],
});
export const agonHintsState = atomWithReset<RegionHints>({
  variant: "agon",
  bossHints: {
    name: "Amorbis",
    item: "",
    keys: [
      { id: 1, name: "Key 1", location: "" },
      { id: 2, name: "Key 2", location: "" },
      { id: 3, name: "Key 3", location: "" },
    ],
  },
  flyingCacheHints: [
    { id: 1, name: "Battleground", value: "" },
    { id: 2, name: "Dark Oasis", value: "" },
  ],
  translatorHints: [
    {
      name: "Agon Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Mining Plaza",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Portal Terminal",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Mining Station A",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Mining Station B",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
  ],
});
export const torvusHintsState = atomWithReset<RegionHints>({
  variant: "torvus",
  bossHints: {
    name: "Chykka",
    item: "",
    keys: [
      { id: 1, name: "Key 1", location: "" },
      { id: 2, name: "Key 2", location: "" },
      { id: 3, name: "Key 3", location: "" },
    ],
  },
  flyingCacheHints: [
    { id: 1, name: "Poisoned Bog", value: "" },
    { id: 2, name: "Dungeon", value: "" },
  ],
  translatorHints: [
    {
      name: "Torvus Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Path of Roots",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Underground Tunnel",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Catacombs",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Gathering Hall",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Training Chamber",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
  ],
});
export const sanctuaryHintsState = atomWithReset<RegionHints>({
  variant: "sanctuary",
  bossHints: {
    name: "Quadraxis",
    item: "",
    keys: [
      { id: 1, name: "Key 1", location: "" },
      { id: 2, name: "Key 2", location: "" },
      { id: 3, name: "Key 3", location: "" },
    ],
  },
  flyingCacheHints: [
    { id: 1, name: "Hive Dynamo Works", value: "" },
    { id: 2, name: "Hive Entrance", value: "" },
  ],
  translatorHints: [
    {
      name: "Sanctuary Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Sanctuary Entrance",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Hall of Combat Mastery",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Main Gyro Chamber",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Main Research",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      name: "Watch Station",
      firstValue: "",
      secondValue: "",
      proximity: "",
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
