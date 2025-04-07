import { useAtomValue } from "jotai";
import usePrime2Tracker from "./trackers/usePrime2Tracker";
import { currentGameState } from "@/states/App.states";
import usePrime1Tracker from "./trackers/usePrime1Tracker";
import usePrime3Tracker from "./trackers/usePrime3Tracker";

export function useGameTrackerHandler() {
  // !STATE
  const currentGame = useAtomValue(currentGameState);

  // !HOOKS
  const prime1Tracker = usePrime1Tracker();
  const prime2Tracker = usePrime2Tracker();
  const prime3Tracker = usePrime3Tracker();

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
      case "corruption":
        prime3Tracker.set(data);
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
      case "echoes":
        prime3Tracker.reset();
        break;
    }
  }

  return {
    setTracker,
    resetTracker,
  };
}
