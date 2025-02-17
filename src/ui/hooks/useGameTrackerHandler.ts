import { useAtomValue } from "jotai";
import usePrime2Tracker from "./trackers/usePrime2Tracker";
import { selectedGameState } from "@/states/App.states";

export function useGameTrackerHandler() {
  // !STATE
  const currentGame = useAtomValue(selectedGameState);

  // !HOOKS
  const prime2Tracker = usePrime2Tracker();

  // !FUNCTION
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  function setTracker(data: any) {
    switch (currentGame) {
      case "echoes":
        prime2Tracker.set(data);
        break;
    }
  }

  function resetTracker() {
    switch (currentGame) {
      case "echoes":
        prime2Tracker.reset();
        break;
    }
  }

  return {
    setTracker,
    resetTracker,
  };
}
