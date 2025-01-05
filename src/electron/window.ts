import { BrowserWindow, Menu } from "electron";
import { menu } from "./menu.js";
import { START_HEIGHT, START_WIDTH } from "./constants.js";
import { getPreloadPath } from "./pathResolver.js";

let mainWindow: BrowserWindow;

export function create() {
  mainWindow = new BrowserWindow({
    width: START_WIDTH,
    height: START_HEIGHT,
    minWidth: 300,
    minHeight: 300,
    webPreferences: {
      preload: getPreloadPath(),
    }
  });
  
  Menu.setApplicationMenu(menu);
  return mainWindow;
}

export function get() {
  return mainWindow;
}

export function resetSize() {
  const mainWindow = get();
  if (mainWindow) {
    mainWindow.setSize(START_WIDTH, START_HEIGHT);
  }
}
