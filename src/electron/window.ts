import { BrowserWindow, Menu } from "electron";
import { menu } from "./menu.js";
import { getPreloadPath } from "./pathResolver.js";
import { isDev } from "./util.js";
import { handleSaveAppConfig } from "./config.js";
import { WINDOW_SIZE } from "./data.js";
import { AppConfig } from "../shared/types.js";

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
}
