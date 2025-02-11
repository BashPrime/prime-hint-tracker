import { app, dialog } from "electron";
import path from "path";
import fs from "fs";
import { get } from "./window.js";
import { TrackerConfigSchema } from "../shared/types.js";
import { z } from "zod";
import { menu } from "./menu.js";

const TRACKER_CONFIG_PATH = path.join(app.getPath("userData"), "tracker.json");
const WINDOW_CONFIG_PATH = path.join(app.getPath("userData"), "window.json");

function readJsonFile(path: string) {
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

export function readWindowConfig() {
  return readJsonFile(WINDOW_CONFIG_PATH);
}

export function writeWindowConfig(bounds: Electron.Rectangle) {
  const json = JSON.stringify(bounds, null, 2);
  writeJsonFile(WINDOW_CONFIG_PATH, json);
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
