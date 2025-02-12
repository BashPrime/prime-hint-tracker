import { BrowserWindow, ipcMain, Menu } from "electron";
import { menu } from "./menu.js";
import { getPreloadPath } from "./pathResolver.js";
import { getDefaultWindowSize, isDev } from "./util.js";
import { handleSaveAppConfig, readAppConfigFile } from "./config.js";
import { WINDOW_SIZE } from "./data.js";
import { AppConfig } from "../shared/types.js";

let mainWindow: BrowserWindow | null = null;

export function create() {
  const config = readAppConfigFile();

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

  if (config) {
    setInitialToggles(config.toggles, mainWindow);
  }

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
  })
}

function setToggle(id: string, checked: boolean) {
  const menuItem = menu.getMenuItemById(id);

  if (menuItem) {
    menuItem.checked = checked;
  }
}

function setInitialToggles(toggles: AppConfig["toggles"], window: BrowserWindow) {
  setToggle("alwaysOnTop", toggles.alwaysOnTop);
  setToggle("legacyHintsEnabled", toggles.legacyHintsEnabled);
  window.setAlwaysOnTop(toggles.alwaysOnTop);
  window?.webContents.send("set-legacy-hints", toggles.legacyHintsEnabled);
}

ipcMain.handle("reset-size", (_, game: string, isLegacyHints: boolean) => {
  const mainWindow = get();
  const windowSize = getDefaultWindowSize(game, isLegacyHints);
  if (windowSize && mainWindow) {
    mainWindow.setSize(windowSize.width, windowSize.height);
  }
});
