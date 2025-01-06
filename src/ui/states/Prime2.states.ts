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
    { id: 1, lightWorldLocation: "Industrial Site", darkWorldLocation: "Accursed Lake", value: "" },
    { id: 2, lightWorldLocation: "Landing Site", darkWorldLocation: "Defiled Shrine", value: "" },
    { id: 3, lightWorldLocation: "Storage Cavern A", darkWorldLocation: "Ing Reliquary", value: "" },
  ],
  translatorHints: [
    {
      id: 1,
      name: "Main Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Transport to Agon Wastes",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Fortress Transport Access",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Meeting Grounds",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
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
    { id: 1, lightWorldLocation: "Central Mining Station", darkWorldLocation: "Battleground", value: "" },
    { id: 2, lightWorldLocation: "Main Reactor", darkWorldLocation: "Dark Oasis", value: "" },
  ],
  translatorHints: [
    {
      id: 1,
      name: "Agon Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Mining Plaza",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Portal Terminal",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Mining Station A",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
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
    { id: 1, lightWorldLocation: "Torvus Lagoon", darkWorldLocation: "Poisoned Bog", value: "" },
    { id: 2, lightWorldLocation: "Catacombs", darkWorldLocation: "Dungeon", value: "" },
  ],
  translatorHints: [
    {
      id: 1,
      name: "Torvus Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Path of Roots",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Underground Tunnel",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Catacombs",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
      name: "Gathering Hall",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 6,
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
    { id: 1, lightWorldLocation: "Dynamo Works", darkWorldLocation: "Hive Dynamo Works", value: "" },
    { id: 2, lightWorldLocation: "Sanctuary Entrance", darkWorldLocation: "Hive Entrance", value: "" },
  ],
  translatorHints: [
    {
      id: 1,
      name: "Sanctuary Energy Controller",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 2,
      name: "Sanctuary Entrance",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 3,
      name: "Hall of Combat Mastery",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 4,
      name: "Main Gyro Chamber",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 5,
      name: "Main Research",
      firstValue: "",
      secondValue: "",
      proximity: "",
    },
    {
      id: 6,
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
