import { selectedGameState } from "@/states/App.states";
import { useSetAtom } from "jotai";
import { useGameTrackerHandler } from "./useGameTrackerHandler";
import { TrackerConfigSchema } from "../../shared/types";
import { z } from "zod";

export default function useTrackerState() {
  // !STATE
  const setGame = useSetAtom(selectedGameState);

  // !TRACKER HOOKS
  const gameTrackerHandler = useGameTrackerHandler();

  // !FUNCTIONS
  function get() {
    return gameTrackerHandler.getTracker();
  }

  function set(config: object) {
    try {
      const parsed = TrackerConfigSchema.parse(config);
      setGame(parsed.game);
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
