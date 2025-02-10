import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import useResetTracker from "./hooks/useResetTracker";
import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  legacyHintsEnabledState,
  selectedGameState,
} from "./states/App.states";
import { ActionSchema } from "./types/App.types";

export default function App() {
  // !STATE
  const selectedGame = useAtomValue(selectedGameState);
  const [legacyHintsEnabled, setLegacyHintsEnabled] = useAtom(
    legacyHintsEnabledState
  );

  // !HOOKS
  const resetTracker = useResetTracker();

  useEffect(() => {
    window.electronApi.onResetTracker(() => resetTracker());
    window.electronApi.onSetFeaturalHints((checked) =>
      setLegacyHintsEnabled(checked)
    );
    window.electronApi.onRequestAppState((action: string) => {
      try {
        const parsedAction = ActionSchema.parse(action);

        switch (parsedAction) {
          case "reset-size":
            window.electronApi.resetSize(selectedGame, legacyHintsEnabled);
            break;
          default:
            alert("Unable to interpret menu command");
        }
      } catch (e) {
        alert("invalid action requested from menu");
      }
    });
  }, [resetTracker]);

  return (
    <>
      <LayoutSelector />
    </>
  );
}
