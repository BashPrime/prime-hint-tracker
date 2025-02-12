import { AboutPanelOptionsOptions, app, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { create } from "./window.js";
import {
  loadTrackerSession as loadTrackerSession,
  readTrackerConfigFile,
  writeTrackerConfigFile,
} from "./config.js";
import { TrackerConfig } from "../shared/types.js";

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
  const mainWindow = create();
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});

ipcMain.handle("load-tracker-session", () => {
  const trackerConfig = readTrackerConfigFile();
  loadTrackerSession(trackerConfig);
});

ipcMain.handle("save-tracker-session", (_, config: object) =>
  writeTrackerConfigFile(config as TrackerConfig)
);
