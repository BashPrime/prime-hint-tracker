import { atom } from "jotai";
import { TrackerConfig, Game } from "../../shared/types";
import { prime2TrackerSelector } from "./Prime2.states";
import { atomWithReset } from "jotai/utils";
import { UnhintedItem } from "@/types/common.types";

export const appSessionLoadedState = atom<boolean>(false);
export const selectedGameState = atom<Game>("echoes");
export const legacyHintsEnabledState = atom<boolean>(true);

export const currentGameTrackerSelector = atom((get) => {
  const game = get(selectedGameState);
  const prime2TrackerState = get(prime2TrackerSelector);

  switch (game) {
    case "echoes":
      return prime2TrackerState;
  }
});

export const trackerStateSelector = atom<TrackerConfig>((get) => {
  const game = get(selectedGameState);
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
