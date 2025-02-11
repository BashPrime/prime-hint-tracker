import { Game } from "@/types/App.types";
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

  function load(game: string, data: any) {
    switch (game) {
      case "echoes":
        echoesTracker.load(data);
    }
  }

  return {
    save,
    load,
  };
}
