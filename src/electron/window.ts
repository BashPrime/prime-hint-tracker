import { app, BrowserWindow, ipcMain, Menu } from "electron";
import { menu } from "./menu.js";
import { getPreloadPath } from "./pathResolver.js";
import { getDefaultWindowSize, isDev, requestRendererState } from "./util.js";
import {
  handleSaveAppConfig,
  setTrackerState,
  writeTrackerConfigFile,
} from "./config.js";
import { IPC_IDS, WINDOW_SIZE } from "./data.js";
import { AppConfig, TrackerConfigSchema } from "../shared/types.js";
import { z } from "zod";

let mainWindow: BrowserWindow | null = null;

export function createMainWindow(config: AppConfig | null) {
  mainWindow = new BrowserWindow({
    title: "Metroid Prime Hint Tracker",
    width: config?.window.width ?? WINDOW_SIZE.default.width,
    height: config?.window.height ?? WINDOW_SIZE.default.height,
    x: config?.window.x ?? undefined,
    y: config?.window.y ?? undefined,
    minWidth: 640,
    minHeight: 480,
    webPreferences: {
      devTools: isDev(),
      preload: getPreloadPath(),
    },
  });

  Menu.setApplicationMenu(menu);
  mainWindowHandlers(mainWindow);

  return mainWindow;
}

export function getMainWindow() {
  return mainWindow;
}

export function clearMainWindow() {
  mainWindow = null;
  return mainWindow;
}

function mainWindowHandlers(window: BrowserWindow) {
  window.on("resized", () => {
    handleSaveAppConfig();
  });

  window.on("moved", () => {
    handleSaveAppConfig();
  });

  window.on("close", (event) => {
    event.preventDefault();
    ipcMain.once(IPC_IDS.rendererTrackerState, (_, state: object) => {
      try {
        const parsed = TrackerConfigSchema.parse(state);
        writeTrackerConfigFile(parsed);
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.error(
            "ipc-saveTrackerSession: Error parsing tracker config:",
            err.issues
          );
        }
      }

      app.quit();
    });

    requestRendererState("tracker");
  });
}

ipcMain.handle(IPC_IDS.resetSize, (_, game: string, isLegacyHints: boolean) => {
  const mainWindow = getMainWindow();
  const windowSize = getDefaultWindowSize(game, isLegacyHints);
  if (windowSize && mainWindow) {
    mainWindow.setSize(windowSize.width, windowSize.height);
  }
});
