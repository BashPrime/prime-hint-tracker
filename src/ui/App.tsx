import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  appLoadingMsgAtom,
  appSessionLoadedState,
  legacyHintsEnabledState,
  selectedGameState,
} from "./states/App.states";
import { ActionSchema } from "../shared/types";
import { z } from "zod";
import useTrackerState from "./hooks/useTrackerState";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { cn } from "./lib/utils";

export default function App() {
  // !STATE
  const currentGame = useAtomValue(selectedGameState);
  const [legacyHintsEnabled, setLegacyHintsEnabled] = useAtom(
    legacyHintsEnabledState
  );
  const [appSessionLoaded, setAppSessionLoaded] = useAtom(
    appSessionLoadedState
  );
  const [appLoadingMsg, setAppLoadingMsg] = useAtom(appLoadingMsgAtom);

  // !HOOKS
  const trackerState = useTrackerState();

  // On load, get state from main process
  useEffect(() => {
    window.electronApi.requestMainState();
  }, []);

  // !IPC HANDLERS
  useEffect(() => {
    window.electronApi.onResetTracker(() => {
      setAppLoadingMsg("Resetting the tracker...");
      setAppSessionLoaded(false);
      trackerState.reset();
      setTimeout(() => {
        setAppSessionLoaded(true);
      }, 1);
    });

    window.electronApi.setLegacyHintsEnabled((checked) =>
      setLegacyHintsEnabled(checked)
    );

    window.electronApi.onRequestRendererState((action) => {
      try {
        const parsedAction = ActionSchema.parse(action);

        switch (parsedAction) {
          case "reset-size":
            window.electronApi.resetSize(currentGame, legacyHintsEnabled);
            break;
          case "tracker":
            window.electronApi.rendererTrackerState(trackerState.get());
            break;
        }
      } catch (err) {
        if (err instanceof z.ZodError) {
          alert(`Error trying to parse action: ${action}`);
          console.error(err.issues);
        }
      }
    });

    window.electronApi.loadTrackerSession((config) => {
      setAppLoadingMsg("Loading tracker session...");
      setAppSessionLoaded(false);
      if (config) {
        trackerState.set(config);
      }
      setTimeout(() => {
        setAppSessionLoaded(true);
      }, 1);
    });
  }, [
    currentGame,
    legacyHintsEnabled,
    trackerState,
    setLegacyHintsEnabled,
    setAppSessionLoaded,
    setAppLoadingMsg,
  ]);

  return (
    <>
      {appSessionLoaded && <LayoutSelector />}
      {!appSessionLoaded && (
        <div
          className={cn(
            "flex flex-col justify-center items-center w-full h-full"
          )}
          data-name="tracker-session-loading-wrapper"
        >
          <div className={cn("flex flex-col items-center gap-4")}>
            <h1 className={cn("text-5xl text-center font-semibold")}>
              Metroid Prime Hint Tracker
            </h1>
            <p className={cn("text-2xl")}>{appLoadingMsg}</p>
            <LoadingSpinner size={100} />
          </div>
        </div>
      )}
    </>
  );
}
