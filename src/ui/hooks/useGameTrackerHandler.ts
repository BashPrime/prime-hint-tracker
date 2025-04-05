import { useAtomValue } from "jotai";
import usePrime2Tracker from "./trackers/usePrime2Tracker";
import { currentGameState } from "@/states/App.states";
import usePrime1Tracker from "./trackers/usePrime1Tracker";

export function useGameTrackerHandler() {
  // !STATE
  const currentGame = useAtomValue(currentGameState);

  // !HOOKS
  const prime1Tracker = usePrime1Tracker();
  const prime2Tracker = usePrime2Tracker();

  // !FUNCTION
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  function setTracker(data: any) {
    switch (currentGame) {
      case "prime":
        prime1Tracker.set(data);
        break;
      case "echoes":
        prime2Tracker.set(data);
        break;
    }
  }

  function resetTracker() {
    switch (currentGame) {
      case "prime":
        prime1Tracker.reset();
        break;
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
