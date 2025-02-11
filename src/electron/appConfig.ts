import { app } from "electron";
import path from "path";
import fs from "fs";

const TRACKER_CONFIG_PATH = path.join(app.getPath("userData"), "tracker.json");
const WINDOW_CONFIG_PATH = path.join(app.getPath("userData"), "window.json");

export function readTrackerSession() {
  try {
    const json = fs.readFileSync(TRACKER_CONFIG_PATH, "utf-8");
    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error("Error retrieving app config", error);
  }

  return null;
}

export function writeTrackerSession(config: object) {
  const json = JSON.stringify(config, null, 2);
  fs.writeFile(TRACKER_CONFIG_PATH, json, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

export function readWindowConfig() {
  try {
    const json = fs.readFileSync(WINDOW_CONFIG_PATH, "utf-8");
    if (json) {
      return JSON.parse(json) as Electron.Rectangle;
    }
  } catch (error) {
    console.error("Error retrieving app config", error);
  }

  return null;
}

export function writeWindowConfig(bounds: Electron.Rectangle) {
  const json = JSON.stringify(bounds, null, 2);
  fs.writeFile(WINDOW_CONFIG_PATH, json, (err) => {
    if (err) {
      console.error(err);
    }
  });
}