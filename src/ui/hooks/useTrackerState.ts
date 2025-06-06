import { appSessionLoadedState, currentGameState, trackerStateSelector } from "@/states/App.states";
import { useAtomValue, useSetAtom } from "jotai";
import { useGameTrackerHandler } from "./useGameTrackerHandler";
import { TrackerConfigSchema } from "../../shared/types";
import { z } from "zod";
import { useEffect } from "react";

export default function useTrackerState() {
  // !STATE
  const trackerState = useAtomValue(trackerStateSelector);
  const appSessionLoaded = useAtomValue(appSessionLoadedState);
  const setCurrentGame = useSetAtom(currentGameState);

  // !HOOKS
  // Keep tracker state in sync with main process
  useEffect(() => {
    if (appSessionLoaded) {
      window.electronApi.rendererTrackerState(trackerState);
    }
  }, [trackerState, appSessionLoaded]);

  // !TRACKER HOOKS
  const gameTrackerHandler = useGameTrackerHandler();

  // !FUNCTIONS
  function get() {
    return trackerState;
  }

  function set(config: object) {
    try {
      const parsed = TrackerConfigSchema.parse(config);
      setCurrentGame(parsed.game);
      gameTrackerHandler.setTracker(parsed.tracker);
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error("Error occurred while trying to set tracker", err.issues);
      } else console.error(String(err));
    }
  }

  function reset() {
    gameTrackerHandler.resetTracker();
  }

  return {
    get,
    set,
    reset,
  };
}
