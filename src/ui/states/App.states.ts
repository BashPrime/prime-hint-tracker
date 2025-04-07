import { atom } from "jotai";
import { TrackerConfig, Game } from "../../shared/types";
import { prime2TrackerSelector } from "./Prime2.states";
import { atomWithReset } from "jotai/utils";
import { UnhintedItem } from "@/types/common.types";
import { prime1TrackerSelector } from "./Prime1.states";
import { prime3TrackerSelector } from "./Prime3.states";

export const appSessionLoadedState = atom<boolean>(false);
export const currentGameState = atom<Game>("prime");
export const legacyHintsEnabledState = atom<boolean>(true);

export const currentGameTrackerSelector = atom((get) => {
  const game = get(currentGameState);
  const prime1TrackerState = get(prime1TrackerSelector);
  const prime2TrackerState = get(prime2TrackerSelector);
  const prime3TrackerState = get(prime3TrackerSelector);

  switch (game) {
    case "prime":
      return prime1TrackerState;
    case "echoes":
      return prime2TrackerState;
    case "corruption":
      return prime3TrackerState;
  }
});

export const trackerStateSelector = atom<TrackerConfig>((get) => {
  const game = get(currentGameState);
  const legacyHintsEnabled = get(legacyHintsEnabledState);
  const tracker = get(currentGameTrackerSelector);

  return {
    game,
    legacyHintsEnabled,
    tracker,
  };
});

export const appLoadingMsgAtom = atomWithReset<string>("Getting Ready...");

export const unhintedItemsState = atomWithReset<UnhintedItem[]>([]);
