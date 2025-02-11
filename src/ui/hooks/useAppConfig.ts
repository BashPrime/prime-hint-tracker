import {
  appConfigSelector,
  legacyHintsEnabledState,
  selectedGameState,
} from "@/states/App.states";
import { useAtomValue, useSetAtom } from "jotai";
import { useTrackerState } from "./useTrackerState";
import { GameSchema } from "@/types/App.types";
import { z } from "zod";

export default function useAppConfig() {
  // !STATE
  const appConfig = useAtomValue(appConfigSelector);
  const setGame = useSetAtom(selectedGameState);
  const setlegacyHintsEnabled = useSetAtom(legacyHintsEnabledState);

  // !HOOKS
  const trackerState = useTrackerState();

  function saveAppConfig() {
    return JSON.stringify(appConfig);
  }

  function loadAppConfig(json: string) {
    const rawConfig = JSON.parse(json);
    try {
      const game = GameSchema.parse(rawConfig.game);
      setGame(game);
      setlegacyHintsEnabled(rawConfig.legacyHintsEnabled);
      trackerState.load(game, rawConfig.tracker);
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert("Error occurred while trying to load app session");
        console.error(err.issues);
      }
    }
  }

  return {
    save: saveAppConfig,
    load: loadAppConfig,
  };
}
