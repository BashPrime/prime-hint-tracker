import { app, Menu, MenuItemConstructorOptions } from "electron";
import { getMainWindow } from "./window.js";
import { isDev } from "./util.js";
import {
  handleSaveAppConfig,
  openUserProvidedTrackerFile,
  saveTrackerFileAs,
} from "./config.js";
import { MENU_IDS } from "./data.js";
import {
  requestRendererState,
  resetTracker,
  setKeybearerRoomLabels,
  setLegacyHintsEnabled,
} from "./ipc.js";
import { KeybearerRoom, KeybearerRoomsSchema } from "../shared/types.js";

function toggleAlwaysOnTop(checked: boolean) {
  const window = getMainWindow();
  window?.setAlwaysOnTop(checked);
  handleSaveAppConfig();
}

function toggleLegacyHints(checked: boolean) {
  setLegacyHintsEnabled(checked);
  handleSaveAppConfig();
}

function toggleKeybearerRooms(value: KeybearerRoom) {
  setKeybearerRoomLabels(value);
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
      {
        label: "Prime 2 Keybearer Room Labels",
        submenu: [
          {
            id: MENU_IDS.keybearerRoomLabels.both,
            label: "Both",
            type: "radio",
            checked: true,
            click: () => toggleKeybearerRooms(KeybearerRoomsSchema.Values.both),
          },
          {
            id: MENU_IDS.keybearerRoomLabels.aether,
            label: "Aether only",
            type: "radio",
            checked: false,
            click: () =>
              toggleKeybearerRooms(KeybearerRoomsSchema.Values.aether),
          },
          {
            id: MENU_IDS.keybearerRoomLabels.darkAether,
            label: "Dark Aether only",
            type: "radio",
            checked: false,
            click: () =>
              toggleKeybearerRooms(KeybearerRoomsSchema.Values.darkAether),
          },
        ],
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
