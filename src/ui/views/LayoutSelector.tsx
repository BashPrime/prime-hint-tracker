import { useAtomValue } from "jotai";
import { selectedGameState } from "../states/App.states";
import Prime2Layout from "./Prime2Layout";

export default function LayoutSelector() {
  // ! STATE
  const selectedGame = useAtomValue(selectedGameState)

  switch (selectedGame) {
    case 'echoes':
      return <Prime2Layout />
    default:
      return null
  }
}
