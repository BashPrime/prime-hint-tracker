import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import { useEffect } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  appLoadingMsgAtom,
  appSessionLoadedState,
  legacyHintsEnabledState,
  selectedGameState,
} from "./states/App.states";
import { ActionSchema, KeybearerRoomsSchema } from "../shared/types";
import { z } from "zod";
import useTrackerState from "./hooks/useTrackerState";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { cn } from "./lib/utils";
import { keybearerRoomsState } from "./states/Prime2.states";

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
  const setKeybearerRooms = useSetAtom(keybearerRoomsState);

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
          console.error("Error trying to parse action:", action, err.issues);
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

    window.electronApi.setKeybearerRooms((value) => {
      try {
        const parsed = KeybearerRoomsSchema.parse(value);
        setKeybearerRooms(parsed);
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.error("cannot parse keybearer room:", err.issues);
        } else console.error(String(err));
      }
    });
  }, [
    currentGame,
    legacyHintsEnabled,
    trackerState,
    setKeybearerRooms,
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
