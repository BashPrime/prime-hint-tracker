import { app, dialog } from "electron";
import path from "path";
import fs from "fs";
import { get } from "./window.js";
import {
  AppConfig,
  AppConfigSchema,
  TrackerConfigSchema,
} from "../shared/types.js";
import { z } from "zod";
import { menu } from "./menu.js";

const TRACKER_CONFIG_PATH = path.join(app.getPath("userData"), "tracker.json");
const APP_CONFIG_PATH = path.join(app.getPath("userData"), "config.json");

function readJsonFile(path: string): any {
  try {
    const json = fs.readFileSync(path, "utf-8");
    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error("Error reading json file", error);
  }

  return null;
}

function writeJsonFile(path: string, json: string) {
  fs.writeFile(path, json, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

export function loadTrackerConfig(config: any) {
  try {
    const parsed = TrackerConfigSchema.parse(config);
    const mainWindow = get();
    mainWindow?.webContents.send("load-app-session", parsed);

    if (config) {
      const hintsToggle = menu.getMenuItemById("legacyHintsEnabled");

      if (hintsToggle) {
        hintsToggle.checked = config.legacyHintsEnabled;
      }
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      dialog.showErrorBox("Error", "Unable to parse tracker session.");
      console.error(err.issues);
    }
  }
}

export function readTrackerSession() {
  return readJsonFile(TRACKER_CONFIG_PATH);
}

export function writeTrackerSession(config: object) {
  const json = JSON.stringify(config, null, 2);
  writeJsonFile(TRACKER_CONFIG_PATH, json);
}

export function readAppConfig() {
  const raw = readJsonFile(APP_CONFIG_PATH);

  if (raw) {
    try {
      const parsed = AppConfigSchema.parse(raw);
      return parsed;
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error(`Error trying to load application config: ${err.issues}`);
      }
    }
  }

  return null;
}

export function writeAppConfig(config: AppConfig) {
  const json = JSON.stringify(config, null, 2);
  writeJsonFile(APP_CONFIG_PATH, json);
}

export function getAppConfigState() {
  const mainWindow = get();

  if (mainWindow) {
    try {
      return AppConfigSchema.parse({
        toggles: {
          alwaysOnTop: menu.getMenuItemById("alwaysOnTop")?.checked,
          legacyHintsEnabled:
            menu.getMenuItemById("legacyHintsEnabled")?.checked,
        },
        window: mainWindow.getBounds(),
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error(`Error parsing app configuration: ${err.issues}`);
      }
    } 
  }

  return null;
}

export function handleSaveAppConfig() {
  const config = getAppConfigState();

  if (config) {
    writeAppConfig(config);
  }
}

export function openTrackerFile() {
  const mainWindow = get();
  if (mainWindow) {
    dialog
      .showOpenDialog(mainWindow, {
        title: "Open Tracker File",
        filters: [{ name: "JSON files", extensions: ["json"] }],
        properties: ["openFile"],
      })
      .then((value) => {
        if (!value.canceled) {
          const trackerData = readJsonFile(value.filePaths[0]);
          loadTrackerConfig(trackerData);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error trying to open tracker file");
      });
  }
}
