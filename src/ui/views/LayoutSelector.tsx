import { useAtomValue } from "jotai";
import { currentGameState } from "../states/App.states";
import Prime2Layout from "./prime2/layout";
import Prime1Layout from "./prime1/layout";
import Prime3Layout from "./prime3/layout";
import { cn } from "@/lib/utils";

export default function LayoutSelector() {
  // !JOTAI
  const currentGame = useAtomValue(currentGameState);

  switch (currentGame) {
    case "prime":
      return <Prime1Layout />;
    case "echoes":
      return <Prime2Layout />;
    case "corruption":
      return <Prime3Layout />;
    default:
      return (
        <div
          className={cn(
            "flex flex-col justify-center items-center w-full h-full"
          )}
          data-name="tracker-session-unrecognized-game"
        >
          <div className={cn("flex flex-col items-center gap-4")}>
            <h1 className={cn("text-5xl text-center font-semibold")}>Oops!</h1>
            <p className={cn("text-2xl")}>
              I don't recognize the selected game. Try selecting a different
              game from the menu.
            </p>
          </div>
        </div>
      );
  }
}
