import { BrowserWindow, ipcMain, Menu } from "electron";
import { menu } from "./menu.js";
import { getPreloadPath } from "./pathResolver.js";
import { getDefaultWindowSize, isDev } from "./util.js";
import { handleSaveAppConfig } from "./config.js";
import { IPC_IDS, WINDOW_SIZE } from "./data.js";
import { AppConfig } from "../shared/types.js";

let mainWindow: BrowserWindow | null = null;

export function create(config: AppConfig | null) {
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

export function get() {
  return mainWindow;
}

function mainWindowHandlers(window: BrowserWindow) {
  window.on("resized", () => {
    handleSaveAppConfig();
  });

  window.on("moved", () => {
    handleSaveAppConfig();
  });
}

ipcMain.handle(IPC_IDS.resetSize, (_, game: string, isLegacyHints: boolean) => {
  const mainWindow = get();
  const windowSize = getDefaultWindowSize(game, isLegacyHints);
  if (windowSize && mainWindow) {
    mainWindow.setSize(windowSize.width, windowSize.height);
  }
});
