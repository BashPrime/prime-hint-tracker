import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import useResetTracker from "./hooks/useResetTracker";
import { Suspense, useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  appSessionLoadedState,
  legacyHintsEnabledState,
  selectedGameState,
} from "./states/App.states";
import { ActionSchema } from "../shared/types";
import { z } from "zod";
import useAppConfig from "./hooks/useAppConfig";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { cn } from "./lib/utils";

export default function App() {
  // !STATE
  const selectedGame = useAtomValue(selectedGameState);
  const [legacyHintsEnabled, setLegacyHintsEnabled] = useAtom(
    legacyHintsEnabledState
  );
  const [appSessionLoaded, setAppSessionLoaded] = useAtom(
    appSessionLoadedState
  );

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
    window.electronApi.loadAppSession((config) => {
      if (config) {
        appConfig.load(config);
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
      {appSessionLoaded && <LayoutSelector />}
      {!appSessionLoaded && (
        <div
          className={cn(
            "flex flex-col justify-center items-center w-full h-full"
          )}
          data-name="app-session-loading-wrapper"
        >
          <div className={cn("flex flex-col items-center gap-4")}>
            <h1 className={cn("text-5xl text-center font-semibold")}>
              Metroid Prime Hint Tracker
            </h1>
            <p className={cn("text-2xl")}>Loading tracker session...</p>
            <LoadingSpinner size={100} />
          </div>
        </div>
      )}
    </>
  );
}
