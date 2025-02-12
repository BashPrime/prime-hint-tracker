import { Game } from "../../shared/types";
import useEchoesTracker from "./prime2/useEchoesTracker";

export function useTrackerState() {
  // !HOOKS
  const echoesTracker = useEchoesTracker();
  // !FUNCTION
  function save(game: Game) {
    switch (game) {
      case "echoes":
        return echoesTracker.save();
    }
  }

  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  function load(game: string, data: any) {
    switch (game) {
      case "echoes":
        echoesTracker.load(data);
        break;
    }
  }

  return {
    save,
    load,
  };
}
