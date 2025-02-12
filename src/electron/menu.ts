import { app, Menu, MenuItemConstructorOptions } from "electron";
import { get } from "./window.js";
import { isDev } from "./util.js";
import { handleSaveAppConfig, openTrackerFile } from "./config.js";

function requestAppState(action: string) {
  const window = get();
  window?.webContents.send("request-app-state", action);
}

function resetTracker() {
  const window = get();
  window?.webContents.send("reset-tracker");
}

function toggleAlwaysOnTop(checked: boolean) {
  const window = get();
  window?.setAlwaysOnTop(checked);
  handleSaveAppConfig();
}

function toggleLegacyHints(checked: boolean) {
  const window = get();
  window?.webContents.send("set-legacy-hints", checked);
  handleSaveAppConfig();
}

const template: MenuItemConstructorOptions[] = [
  {
    label: "Tracker",
    submenu: [
      { label: "Reset Size", click: () => requestAppState("reset-size") },
      { label: "Reset Tracker", click: () => resetTracker() },
      { type: "separator" },
      { label: "Open", click: () => openTrackerFile() },
    ],
  },
  {
    label: "Toggles",
    submenu: [
      {
        id: "alwaysOnTop",
        label: "Always on Top",
        type: "checkbox",
        checked: false,
        click: (item) => toggleAlwaysOnTop(item.checked),
      },
      {
        id: "legacyHintsEnabled",
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
