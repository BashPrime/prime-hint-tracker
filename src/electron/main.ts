import { AboutPanelOptionsOptions, app, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { create, get } from "./window.js";
import { readAppSession, writeAppSession } from "./appSession.js";
import { createToggles, getToggles } from "./toggles.js";
import { AppConfig } from "../shared/types.js";

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
  const parsed = json ? JSON.parse(json) : null;

  const mainWindow = get();
  const toggles = getToggles();
  mainWindow?.webContents.send("load-app-session", parsed);

  if (parsed) {
    toggles?.setLegacyHintsEnabled(parsed.legacyHintsEnabled);
  }
});

ipcMain.handle("save-app-session", (_, config: AppConfig) =>
  writeAppSession(JSON.stringify(config))
);
