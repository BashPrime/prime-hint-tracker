import { app, Menu, MenuItemConstructorOptions } from "electron";
import { get } from "./window.js";
import { isDev } from "./util.js";
import { getToggles } from "./toggles.js";

const toggles = getToggles();

function requestAppState(action: string) {
  const window = get();
  window?.webContents.send("request-app-state", action);
}

function resetTracker() {
  const window = get();
  window?.webContents.send("reset-tracker");
}

function toggleLegacyHints(checked: boolean) {
  const window = get();
  window?.webContents.send("set-legacy-hints", checked);
  toggles?.setLegacyHintsEnabled(checked);
}

const template: MenuItemConstructorOptions[] = [
  {
    label: "Tracker",
    submenu: [
      { label: "Reset Size", click: () => requestAppState("reset-size") },
      { label: "Reset Tracker", click: () => resetTracker() },
    ],
  },
  {
    label: "Toggles",
    submenu: [
      {
        label: "Legacy Hints",
        type: "checkbox",
        checked: toggles?.legacyHintsEnabled,
        click: (item) => {
          toggleLegacyHints(item.checked);
        },
      },
    ],
  },
  // {
  //   label: "Game",
  //   submenu: [{ label: "Metroid Prime 2: Echoes" }],
  // },
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
