import { useAtom } from "jotai";
import { selectedGameState } from "../states/App.states";
import Prime2Layout from "./prime2/layout";

export default function LayoutSelector() {
  // !JOTAI
  const [selectedGame, setSelectedGame] = useAtom(selectedGameState);

  switch (selectedGame) {
    case "echoes":
      return <Prime2Layout />;
    default:
      setSelectedGame("echoes");
      return null;
  }
}
