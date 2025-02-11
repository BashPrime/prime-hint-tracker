import { AboutPanelOptionsOptions, app, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { create, get } from "./window.js";
import {
  readAppConfig as readAppSession,
  writeAppConfig as writeAppSession,
} from "./appConfig.js";
import { createToggles, getToggles } from "./toggles.js";

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
  createToggles();
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});

ipcMain.handle("load-app-session", () => {
  const json = readAppSession();
  const toggles = getToggles();

  const mainWindow = get();
  mainWindow?.webContents.send("load-app-session", json);

  if (json && toggles) {
    const parsed = JSON.parse(json);
    toggles.setLegacyHintsEnabled(parsed.legacyHintsEnabled)
  }
});

ipcMain.handle("save-app-session", (_, json: string) => writeAppSession(json));
