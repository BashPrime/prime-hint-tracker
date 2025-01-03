import { Menu, MenuItemConstructorOptions } from "electron";
import { resetSize } from "./window.js";

const isMac = process.platform === "darwin";
const template: MenuItemConstructorOptions[] = [
  {
    label: "File",
    submenu: [
      { label: "Reset Size", click: () => resetSize() },
      { label: "Reset Tracker", enabled: false },
      { role: isMac ? "close" : "quit" },
    ],
  },
  { role: "editMenu" },
  { role: "viewMenu" },
  { role: "windowMenu" },
  // {
  //   label: "Game",
  //   submenu: [{ label: "Metroid Prime", enabled: false }, { label: "Metroid Prime 2: Echoes" }],
  // },
];

export const menu = Menu.buildFromTemplate(template);
