import { BrowserWindow, Menu } from "electron";
import { menu } from "./menu.js";
import { START_HEIGHT, START_WIDTH } from "./constants.js";

let mainWindow: BrowserWindow;

export function create() {
  mainWindow = new BrowserWindow({
    width: START_WIDTH,
    height: START_HEIGHT,
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
