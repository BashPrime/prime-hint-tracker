import { app, dialog } from "electron";
import path from "path";
import fs from "fs";
import { get } from "./window.js";
import {
  AppConfig,
  AppConfigSchema,
  TrackerConfig,
  TrackerConfigSchema,
} from "../shared/types.js";
import { z } from "zod";
import { menu } from "./menu.js";
import { getErrorMsg } from "./util.js";

const TRACKER_CONFIG_PATH = path.join(app.getPath("userData"), "tracker.json");
const APP_CONFIG_PATH = path.join(app.getPath("userData"), "config.json");

function readJsonFile(path: string) {
  try {
    const json = fs.readFileSync(path, "utf-8");
    if (json) {
      return JSON.parse(json);
    }
  } catch (err) {
    console.error("Error reading json file:", path, getErrorMsg(err));
  }

  return null;
}

function writeJsonFile(path: string, json: string) {
  fs.writeFile(path, json, (err) => {
    if (err) {
      console.error("Error writing json file:", path, err);
    }
  });
}

export function loadTrackerSession(config: TrackerConfig | null) {
  const mainWindow = get();
  if (config && mainWindow) {
    mainWindow?.webContents.send("load-tracker-session", config);
  }
}

export function readTrackerConfigFile(path: string = TRACKER_CONFIG_PATH) {
  const raw = readJsonFile(path);

  if (raw) {
    try {
      const parsed = TrackerConfigSchema.parse(raw);
      return parsed;
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error("readTrackerConfigFile(): Error trying to read tracker config file:", err.issues);
      } else console.error(getErrorMsg(err));
    }
  }

  return null;
}

export function writeTrackerConfigFile(
  config: TrackerConfig,
  path: string = TRACKER_CONFIG_PATH
) {
  const json = JSON.stringify(config, null, 2);
  writeJsonFile(path, json);
}

export function readAppConfigFile() {
  const raw = readJsonFile(APP_CONFIG_PATH);

  if (raw) {
    try {
      const parsed = AppConfigSchema.parse(raw);
      return parsed;
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error(
          "readAppConfigFile(): Error trying to read application config file:",
          err.issues
        );
      } else console.error(getErrorMsg(err));
    }
  }

  return null;
}

export function writeAppConfigFile(config: AppConfig) {
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
        console.error("getAppConfigState(): Error parsing app configuration:", err.issues);
      } else console.error(getErrorMsg(err));
    }
  }

  return null;
}

export function handleSaveAppConfig() {
  const config = getAppConfigState();

  if (config) {
    writeAppConfigFile(config);
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
          const config = readTrackerConfigFile(value.filePaths[0]);
          if (!config) {
            dialog.showErrorBox(
              "Cannot Parse Tracker File",
              "This does not appear to be a valid tracker file."
            );
            throw new Error("openTrackerFile(): trackerConfig is null");
          }

          loadTrackerSession(config);
        }
      })
      .catch((err) => {
        console.error(getErrorMsg(err));
      });
  }
}
