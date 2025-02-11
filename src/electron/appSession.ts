import { app } from "electron";
import path from "path";
import fs from "fs";

const APP_CONFIG_PATH = path.join(app.getPath("userData"), "config.json");

export function readAppSession() {
  try {
    const json = fs.readFileSync(APP_CONFIG_PATH, "utf-8");
    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error("Error retrieving app config", error);
  }

  return null;
}

export function writeAppSession(config: object) {
  const json = JSON.stringify(config, null, 2);
  fs.writeFile(APP_CONFIG_PATH, json, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
