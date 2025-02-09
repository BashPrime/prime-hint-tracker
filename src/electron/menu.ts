import { app, Menu, MenuItemConstructorOptions } from "electron";
import { get, resetSize } from "./window.js";
import { isDev } from "./util.js";

function resetTracker() {
  const window = get();
  window.webContents.send("reset-tracker");
}

function toggleFeaturalHints(checked: boolean) {
  const window = get();
  window.webContents.send("set-featural-hints", checked);
}

const template: MenuItemConstructorOptions[] = [
  {
    label: "Tracker",
    submenu: [
      {
        label: "Toggle Featural Hints",
        type: "checkbox",
        click: (item) => {
          toggleFeaturalHints(item.checked);
        },
      },
      { label: "Reset Size", click: () => resetSize() },
      { label: "Reset Tracker", click: () => resetTracker() },
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
