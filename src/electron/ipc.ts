import { dialog, ipcMain } from "electron";
import { IPC_IDS, MENU_IDS } from "./data.js";
import { getMainWindow } from "./window.js";
import { Action, KeybearerRoom, TrackerConfig } from "../shared/types.js";
import { getDefaultWindowSize, parseTrackerConfig } from "./util.js";
import { readTrackerConfigFile, setTrackerState } from "./config.js";
import { menu } from "./menu.js";

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
          "This will reset the entire tracker. ALL PROGRESS WILL BE LOST.\n\nDo you want to continue?",
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

export function setKeybearerRooms(value: KeybearerRoom) {
  const window = getMainWindow();
  window?.webContents.send(IPC_IDS.setKeybearerRooms, value);
}

export function handleRendererInitialization() {
  ipcMain.handle(IPC_IDS.requestMainState, () => {
    const mainWindow = getMainWindow();
    const trackerConfig = readTrackerConfigFile();

    if (trackerConfig) {
      setTrackerState(trackerConfig);
    }

    // Send tracker and toggle data to renderer
    loadTrackerSession(trackerConfig);
    mainWindow?.webContents.send(
      IPC_IDS.setLegacyHintsEnabled,
      menu.getMenuItemById(MENU_IDS.legacyHintsEnabled)?.checked
    );
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
