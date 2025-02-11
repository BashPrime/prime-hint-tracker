import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import useResetTracker from "./hooks/useResetTracker";
import { useEffect } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  appSessionLoadedState,
  legacyHintsEnabledState,
  selectedGameState,
} from "./states/App.states";
import { ActionSchema } from "../shared/types";
import { z } from "zod";
import useAppConfig from "./hooks/useAppConfig";

export default function App() {
  // !STATE
  const selectedGame = useAtomValue(selectedGameState);
  const [legacyHintsEnabled, setLegacyHintsEnabled] = useAtom(
    legacyHintsEnabledState
  );
  const setAppSessionLoaded = useSetAtom(appSessionLoadedState);

  // !HOOKS
  const appConfig = useAppConfig();
  const resetTracker = useResetTracker();

  // On load, get app session
  useEffect(() => {
    window.electronApi.requestLoadAppSession();
  }, []);

  useEffect(() => {
    window.electronApi.onResetTracker(() => resetTracker());
    window.electronApi.setLegacyHints((checked) =>
      setLegacyHintsEnabled(checked)
    );
    window.electronApi.onRequestAppState((action) => {
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
          console.error(err.issues);
        }
      }
    });
    window.electronApi.loadAppSession((json) => {
      if (json) {
        appConfig.load(json);
      }
      setAppSessionLoaded(true);
    });
  }, [
    resetTracker,
    selectedGame,
    legacyHintsEnabled,
    setLegacyHintsEnabled,
    appConfig,
    setAppSessionLoaded,
  ]);

  return (
    <>
      <LayoutSelector />
    </>
  );
}
