import { AboutPanelOptionsOptions, app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { createMainWindow } from "./window.js";
import { readAppConfigFile } from "./config.js";
import { Toggles } from "../shared/types.js";
import { menu } from "./menu.js";
import { MENU_IDS } from "./data.js";
import {
  handleRendererInitialization,
  handleRendererTrackerStateUpdates,
  handleResetSize,
} from "./ipc.js";

const ABOUT_PANEL_OPTIONS: AboutPanelOptionsOptions = {
  applicationName: "Metroid Prime Hint Tracker",
  applicationVersion: `v${app.getVersion()}`,
  website: "https://github.com/bashprime/prime-hint-tracker",
  copyright:
    `Copyright (c) ${new Date().getFullYear()} BashPrime` +
    "\n\nThis software is free for personal and commercial use under the MIT License.",
  iconPath: "./icon.png",
};

app.on("ready", () => {
  app.setAboutPanelOptions(ABOUT_PANEL_OPTIONS);
  const config = readAppConfigFile();
  const mainWindow = createMainWindow(config);

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  if (config) {
    setToggles(config.toggles, mainWindow);
  }
});

// IPC Handlers
handleRendererInitialization();
handleResetSize();
handleRendererTrackerStateUpdates();

function setToggle(id: string, checked: boolean) {
  const menuItem = menu.getMenuItemById(id);

  if (menuItem) {
    menuItem.checked = checked;
  }
}

function setToggles(toggles: Toggles, window: BrowserWindow) {
  setToggle(MENU_IDS.alwaysOnTop, toggles.alwaysOnTop);
  setToggle(MENU_IDS.legacyHintsEnabled, toggles.legacyHintsEnabled);
  setToggle(toggles.keybearerRoomLabels, true);
  setToggle(toggles.phazonSuitHint, true);
  window.setAlwaysOnTop(toggles.alwaysOnTop);
}
