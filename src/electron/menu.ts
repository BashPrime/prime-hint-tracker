import { app, Menu, MenuItemConstructorOptions } from "electron";
import { getMainWindow } from "./window.js";
import { isDev, requestRendererState } from "./util.js";
import { handleSaveAppConfig, openUserProvidedTrackerFile, saveTrackerFileAs } from "./config.js";
import { IPC_IDS, MENU_IDS } from "./data.js";

function resetTracker() {
  const window = getMainWindow();
  window?.webContents.send(IPC_IDS.resetTracker);
}

function toggleAlwaysOnTop(checked: boolean) {
  const window = getMainWindow();
  window?.setAlwaysOnTop(checked);
  handleSaveAppConfig();
}

function toggleLegacyHints(checked: boolean) {
  const window = getMainWindow();
  window?.webContents.send(IPC_IDS.setLegacyHintsEnabled, checked);
  handleSaveAppConfig();
}

const template: MenuItemConstructorOptions[] = [
  {
    label: "Tracker",
    submenu: [
      { label: "Reset Size", click: () => requestRendererState("reset-size") },
      { label: "Reset Tracker", click: () => resetTracker() },
      { type: "separator" },
      { label: "Open", click: () => openUserProvidedTrackerFile() },
      { label: "Save As...", click: () => saveTrackerFileAs() },
    ],
  },
  {
    label: "Toggles",
    submenu: [
      {
        id: MENU_IDS.alwaysOnTop,
        label: "Always on Top",
        type: "checkbox",
        checked: false,
        click: (item) => toggleAlwaysOnTop(item.checked),
      },
      {
        id: MENU_IDS.legacyHintsEnabled,
        label: "Legacy Hints",
        type: "checkbox",
        checked: false,
        click: (item) => {
          toggleLegacyHints(item.checked);
        },
      },
    ],
  },
  isDev()
    ? { role: "viewMenu" }
    : {
        label: "View",
        submenu: [
          { role: "resetZoom" },
          { role: "zoomIn" },
          { role: "zoomOut" },
        ],
      },
  { label: "Help", submenu: [{ label: "About", role: "about" }] },
  { label: `Version ${app.getVersion()}` },
];

export const menu = Menu.buildFromTemplate(template);
