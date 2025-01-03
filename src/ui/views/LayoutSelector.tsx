import { useAtomValue } from "jotai";
import { selectedGameState } from "../states/App.states";
import Prime2Layout from "./prime2/layout";

export default function LayoutSelector() {
  // !JOTAI
  const selectedGame = useAtomValue(selectedGameState)

  switch (selectedGame) {
    case 'echoes':
      return <Prime2Layout />
    default:
      return null
  }
}
