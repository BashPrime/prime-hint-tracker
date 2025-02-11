import {
  appConfigSelector,
  appSessionLoadedState,
  legacyHintsEnabledState,
  selectedGameState,
} from "@/states/App.states";
import { useAtomValue, useSetAtom } from "jotai";
import { useTrackerState } from "./useTrackerState";
import { AppConfig, GameSchema } from "../../shared/types";
import { z } from "zod";
import { useEffect } from "react";

export default function useAppConfig() {
  // !STATE
  const appConfig = useAtomValue(appConfigSelector);
  const setGame = useSetAtom(selectedGameState);
  const setlegacyHintsEnabled = useSetAtom(legacyHintsEnabledState);
  const appSessionLoaded = useAtomValue(appSessionLoadedState);

  // !HOOKS
  const trackerState = useTrackerState();
  // Automatically save app config session when it changes
  useEffect(() => {
    if (appSessionLoaded) {
      const json = JSON.stringify(appConfig);
      window.electronApi.saveAppSession(json);
    }
  }, [appConfig, appSessionLoaded]);

  function save() {
    return JSON.stringify(appConfig);
  }

  function load(json: string) {
    const parsed = JSON.parse(json) as AppConfig;
    try {
      const game = GameSchema.parse(parsed.game);
      setGame(game);
      setlegacyHintsEnabled(parsed.legacyHintsEnabled);
      trackerState.load(game, parsed.tracker);
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert("Error occurred while trying to load app session");
        console.error(err.issues);
      }
    }
  }

  return {
    save,
    load,
  };
}
