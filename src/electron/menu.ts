import { app, Menu, MenuItemConstructorOptions } from "electron";
import { get, resetSize } from "./window.js";

function resetTracker() {
  const window = get();
  window.webContents.send("reset-tracker");
}

const template: MenuItemConstructorOptions[] = [
  {
    label: "File",
    submenu: [
      { label: "Reset Size", click: () => resetSize() },
      { label: "Reset Tracker", click: () => resetTracker() },
    ],
  },
  { role: "editMenu" },
  { role: "viewMenu" },
  { role: "windowMenu" },
  { label: `Version ${app.getVersion()}` },
];

export const menu = Menu.buildFromTemplate(template);
