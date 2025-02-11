import { BrowserWindow, ipcMain, Menu } from "electron";
import { menu } from "./menu.js";
import { getPreloadPath } from "./pathResolver.js";
import { getDefaultWindowSize, isDev } from "./util.js";
import { readWindowConfig, writeWindowConfig } from "./appConfig.js";
import { WINDOW_SIZE } from "./data.js";

let mainWindow: BrowserWindow | null = null;

export function create() {
  const savedBounds = readWindowConfig();

  mainWindow = new BrowserWindow({
    title: "Metroid Prime Hint Tracker",
    width: savedBounds?.width ?? WINDOW_SIZE.default.width,
    height: savedBounds?.height ?? WINDOW_SIZE.default.height,
    x: savedBounds?.x ?? undefined,
    y: savedBounds?.y ?? undefined,
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
    writeWindowConfig(window.getBounds());
  });

  window.on("moved", () => {
    writeWindowConfig(window.getBounds());
  })
}

ipcMain.handle("reset-size", (_, game: string, isLegacyHints: boolean) => {
  const mainWindow = get();
  const windowSize = getDefaultWindowSize(game, isLegacyHints);
  if (windowSize && mainWindow) {
    mainWindow.setSize(windowSize.width, windowSize.height);
    writeWindowConfig(mainWindow.getBounds());
  }
});

export function saveWindowConfig() {}
