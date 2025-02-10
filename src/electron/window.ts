import { BrowserWindow, ipcMain, Menu } from "electron";
import { menu } from "./menu.js";
import { START_HEIGHT, START_WIDTH } from "./constants.js";
import { getPreloadPath } from "./pathResolver.js";
import { getDefaultWindowSize, isDev } from "./util.js";

let mainWindow: BrowserWindow;

export function create() {
  mainWindow = new BrowserWindow({
    title: "Metroid Prime Hint Tracker",
    width: START_WIDTH,
    height: START_HEIGHT,
    minWidth: 300,
    minHeight: 300,
    webPreferences: {
      devTools: isDev(),
      preload: getPreloadPath(),
    },
  });

  Menu.setApplicationMenu(menu);
  return mainWindow;
}

export function get() {
  return mainWindow;
}

export function requestGameForResize() {
  const mainWindow = get();
  mainWindow.webContents.send("request-current-game", "reset-size");
}

ipcMain.handle("reset-size", (_, game: string, isLegacyHints: boolean) => {
  const mainWindow = get();
  const windowSize = getDefaultWindowSize(game, isLegacyHints);
  console.log("windowSize", windowSize);
  if (windowSize && mainWindow) {
    mainWindow.setSize(windowSize.width, windowSize.height);
  }
});
