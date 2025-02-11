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
import { z } from "zod";

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
        }
      } catch (err) {
        if (err instanceof z.ZodError) {
          alert(`Error trying to parse action: ${action}`);
          console.log(err.issues);
        }
      }
    });
  }, [resetTracker, selectedGame, legacyHintsEnabled, setLegacyHintsEnabled]);

  return (
    <>
      <LayoutSelector />
    </>
  );
}
