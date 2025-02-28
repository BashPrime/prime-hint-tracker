import { useAtom } from "jotai";
import { selectedGameState } from "../states/App.states";
import Prime2Layout from "./prime2/layout";
import Prime1Layout from "./prime1/layout";

export default function LayoutSelector() {
  // !JOTAI
  const [selectedGame, setSelectedGame] = useAtom(selectedGameState);

  switch (selectedGame) {
    case "prime":
      return <Prime1Layout />;
    case "echoes":
      return <Prime2Layout />;
    default:
      setSelectedGame("prime");
      return null;
  }
}
