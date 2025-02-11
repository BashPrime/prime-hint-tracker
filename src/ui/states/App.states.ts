import { atom } from "jotai";
import { Game } from "../types/App.types";
import { echoesTrackerSelector } from "./Prime2.states";

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

export const appConfigSelector = atom((get) => {
  const game = get(selectedGameState);
  const legacyHintsEnabled = get(legacyHintsEnabledState);
  const tracker = get(currentGameTrackerSelector);

  return {
    game,
    legacyHintsEnabled,
    tracker,
  };
});
