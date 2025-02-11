import { atom } from "jotai";
import { AppConfig, Game } from "../../shared/types";
import { echoesTrackerSelector } from "./Prime2.states";

export const appSessionLoadedState = atom<boolean>(false);
export const selectedGameState = atom<Game>("echoes");
export const legacyHintsEnabledState = atom<boolean>(true);

export const currentGameTrackerSelector = atom((get) => {
  const game = get(selectedGameState);
  const echoesTracker = get(echoesTrackerSelector);

  switch (game) {
    case "echoes":
      return echoesTracker;
  }
});

export const appConfigSelector = atom<AppConfig>((get) => {
  const game = get(selectedGameState);
  const legacyHintsEnabled = get(legacyHintsEnabledState);
  const tracker = get(currentGameTrackerSelector);

  return {
    game,
    legacyHintsEnabled,
    tracker,
  };
});
