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
    item: "",
    keys: [],
  },
  flyingCacheHints: [
    { name: "Accursed Lake", value: "" },
    { name: "Defiled Shrine", value: "" },
    { name: "Ing Reliquary", value: "" },
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
    keys: Array(3).fill(""),
  },
  flyingCacheHints: [
    { name: "Battleground", value: "" },
    { name: "Dark Oasis", value: "" },
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
    keys: Array(3).fill(""),
  },
  flyingCacheHints: [
    { name: "Poisoned Bog", value: "" },
    { name: "Dungeon", value: "" },
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
    keys: Array(3).fill(""),
  },
  flyingCacheHints: [
    { name: "Hive Dynamo Works", value: "" },
    { name: "Hive Entrance", value: "" },
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
  { name: "Key 1", location: "" },
  { name: "Key 2", location: "" },
  { name: "Key 3", location: "" },
  { name: "Key 4", location: "" },
  { name: "Key 5", location: "" },
  { name: "Key 6", location: "" },
  { name: "Key 7", location: "" },
  { name: "Key 8", location: "" },
  { name: "Key 9", location: "" },
]);
