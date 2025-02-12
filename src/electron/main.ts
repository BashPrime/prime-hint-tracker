import {
  AboutPanelOptionsOptions,
  app,
  BrowserWindow,
  ipcMain,
} from "electron";
import path from "path";
import { isDev } from "./util.js";
import { create, getMainWindow } from "./window.js";
import {
  loadTrackerSession as loadTrackerSession,
  readAppConfigFile,
  readTrackerConfigFile,
  setTrackerState,
  writeTrackerConfigFile,
} from "./config.js";
import { AppConfig, TrackerConfigSchema } from "../shared/types.js";
import { menu } from "./menu.js";
import { IPC_IDS, MENU_IDS } from "./data.js";
import { z } from "zod";

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
  const mainWindow = create(config);

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  if (config) {
    setToggles(config.toggles, mainWindow);
  }
});

ipcMain.handle(IPC_IDS.requestMainState, () => {
  const mainWindow = getMainWindow();
  const trackerConfig = readTrackerConfigFile();

  // Send data to renderer
  loadTrackerSession(trackerConfig);
  mainWindow?.webContents.send(
    IPC_IDS.setLegacyHintsEnabled,
    menu.getMenuItemById(MENU_IDS.legacyHintsEnabled)?.checked
  );
});

ipcMain.handle(IPC_IDS.saveTrackerSession, (_, config: object) => {
  try {
    const parsed = TrackerConfigSchema.parse(config);
    setTrackerState(parsed);
    writeTrackerConfigFile(parsed)
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error("ipc-saveTrackerSession: Error parsing tracker config:", err.issues)
    }
  }
});

function setToggle(id: string, checked: boolean) {
  const menuItem = menu.getMenuItemById(id);

  if (menuItem) {
    menuItem.checked = checked;
  }
}

function setToggles(toggles: AppConfig["toggles"], window: BrowserWindow) {
  setToggle(MENU_IDS.alwaysOnTop, toggles.alwaysOnTop);
  setToggle(MENU_IDS.legacyHintsEnabled, toggles.legacyHintsEnabled);
  window.setAlwaysOnTop(toggles.alwaysOnTop);
}
