import {
  appConfigSelector,
  appSessionLoadedState,
  legacyHintsEnabledState,
  selectedGameState,
} from "@/states/App.states";
import { useAtomValue, useSetAtom } from "jotai";
import { useTrackerState } from "./useTrackerState";
import { TrackerConfigSchema } from "../../shared/types";
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
      window.electronApi.saveAppSession(appConfig);
    }
  }, [appConfig, appSessionLoaded]);

  function load(config: object) {
    try {
      const parsed = TrackerConfigSchema.parse(config)
      setGame(parsed.game);
      setlegacyHintsEnabled(parsed.legacyHintsEnabled);
      trackerState.load(parsed.game, parsed.tracker);
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert("Error occurred while trying to load app session");
        console.error(err.issues);
      }
    }
  }

  return {
    load,
  };
}
