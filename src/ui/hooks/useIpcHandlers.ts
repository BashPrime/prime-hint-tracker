import { useEffect } from "react";
import useTrackerState from "./useTrackerState";
import { useAtom, useSetAtom } from "jotai";
import {
  appLoadingMsgAtom,
  appSessionLoadedState,
  legacyHintsEnabledState,
  currentGameState,
} from "@/states/App.states";
import { keybearerRoomsState } from "@/states/Prime2.states";
import {
  ActionSchema,
  GameSchema,
  KeybearerRoomsSchema,
  PhazonSuitHintSchema,
} from "../../../src/shared/types";
import { z } from "zod";
import { phazonSuitHintPrecisionState } from "@/states/Prime1.states";

export default function useIpcHandlers() {
  // !STATE
  const [currentGame, setCurrentGame] = useAtom(currentGameState);
  const [legacyHintsEnabled, setLegacyHintsEnabled] = useAtom(
    legacyHintsEnabledState
  );
  const setAppSessionLoaded = useSetAtom(appSessionLoadedState);
  const setAppLoadingMsg = useSetAtom(appLoadingMsgAtom);
  const setKeybearerRooms = useSetAtom(keybearerRoomsState);
  const setPhazonSuitHintPrecision = useSetAtom(phazonSuitHintPrecisionState);

  // !HOOKS
  const trackerState = useTrackerState();

  // On load, get state from main process
  useEffect(() => {
    window.electronApi.requestMainState();
  }, []);

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

    window.electronApi.setGame((game) => {
      if (game !== currentGame) {
        setAppLoadingMsg("Switching game...");
        setAppSessionLoaded(false);
        try {
          const parsed = GameSchema.parse(game);
          setCurrentGame(parsed);
        } catch (err) {
          if (err instanceof z.ZodError) {
            console.error("cannot parse game:", err.issues);
          } else console.error(String(err));
        }
        setTimeout(() => {
          setAppSessionLoaded(true);
        }, 1);
      }
    });

    window.electronApi.setPhazonSuitHint((precision) => {
      try {
        const parsed = PhazonSuitHintSchema.parse(precision);
        setPhazonSuitHintPrecision(parsed);
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.error("cannot parse phazon suit hint precision:", err.issues);
        } else console.error(String(err));
      }
    });
  }, [
    currentGame,
    legacyHintsEnabled,
    trackerState,
    setCurrentGame,
    setKeybearerRooms,
    setLegacyHintsEnabled,
    setAppSessionLoaded,
    setAppLoadingMsg,
    setPhazonSuitHintPrecision,
  ]);
}
