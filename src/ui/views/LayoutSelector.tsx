import { useAtom } from "jotai";
import { currentGameState } from "../states/App.states";
import Prime2Layout from "./prime2/layout";
import Prime1Layout from "./prime1/layout";

export default function LayoutSelector() {
  // !JOTAI
  const [currentGame, setCurrentGame] = useAtom(currentGameState);

  switch (currentGame) {
    case "prime":
      return <Prime1Layout />;
    case "echoes":
      return <Prime2Layout />;
    default:
      setCurrentGame("prime");
      return null;
  }
}
