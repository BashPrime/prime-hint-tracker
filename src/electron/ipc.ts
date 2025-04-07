import { dialog, ipcMain } from "electron";
import { IPC_IDS } from "./data.js";
import { getMainWindow } from "./window.js";
import { Action, Game, KeybearerRooms, TrackerConfig } from "../shared/types.js";
import { getDefaultWindowSize, parseTrackerConfig } from "./util.js";
import {
  getAppConfigState,
  readTrackerConfigFile,
  setTrackerState,
} from "./config.js";

export function requestRendererState(action: Action) {
  const window = getMainWindow();
  window?.webContents.send(IPC_IDS.requestRendererState, action);
}

export function loadTrackerSession(config: TrackerConfig | null) {
  const mainWindow = getMainWindow();
  setTrackerState(config);

  if (mainWindow) {
    mainWindow.webContents.send(IPC_IDS.loadTrackerSession, config);
  }
}

export function resetTracker() {
  const mainWindow = getMainWindow();
  const cancelId = 0;
  if (mainWindow) {
    dialog
      .showMessageBox(mainWindow, {
        title: "Confirm Reset",
        message:
          "This will reset the tracker. ALL UNSAVED PROGRESS WILL BE LOST.\n\nDo you want to continue?",
        type: "warning",
        buttons: ["Cancel", "Yes"],
        cancelId,
      })
      .then((value) => {
        if (value.response !== cancelId) {
          mainWindow?.webContents.send(IPC_IDS.resetTracker);
        }
      });
  }
}

export function setLegacyHintsEnabled(enabled: boolean) {
  const window = getMainWindow();
  window?.webContents.send(IPC_IDS.setLegacyHintsEnabled, enabled);
}

export function setKeybearerRoomLabels(value: KeybearerRooms) {
  const window = getMainWindow();
  window?.webContents.send(IPC_IDS.setKeybearerRooms, value);
}

export function setGame(game: Game) {
  const window = getMainWindow();
  window?.webContents.send(IPC_IDS.setGame, game);
}

export function handleRendererInitialization() {
  ipcMain.handle(IPC_IDS.requestMainState, () => {
    const trackerConfig = readTrackerConfigFile();
    const appConfig = getAppConfigState();

    if (trackerConfig) {
      setTrackerState(trackerConfig);
    }

    // Send tracker and toggle data to renderer
    loadTrackerSession(trackerConfig);

    if (appConfig) {
      setLegacyHintsEnabled(appConfig.toggles.legacyHintsEnabled);
      setKeybearerRoomLabels(appConfig.toggles.keybearerRoomLabels);
    }
  });
}

export function handleResetSize() {
  ipcMain.handle(
    IPC_IDS.resetSize,
    (_, game: string, isLegacyHints: boolean) => {
      const mainWindow = getMainWindow();
      const windowSize = getDefaultWindowSize(game, isLegacyHints);
      if (windowSize && mainWindow) {
        mainWindow.setSize(windowSize.width, windowSize.height);
      }
    }
  );
}

export function handleRendererTrackerStateUpdates() {
  // handle receive from the renderer
  ipcMain.handle(IPC_IDS.rendererTrackerState, (_, state: object) => {
    const parsed = parseTrackerConfig(state);
    setTrackerState(parsed);
  });
}
