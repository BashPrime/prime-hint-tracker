import { app } from "electron";
import path from "path";
import fs from "fs";

const APP_CONFIG_PATH = path.join(app.getPath("userData"), "config.json");

export function readAppConfig() {
  try {
    const json = fs.readFileSync(APP_CONFIG_PATH, "utf-8");
    return json;
  } catch (error) {
    console.error("Error retrieving app config", error);
    return null;
  }
}

export function writeAppConfig(json: string) {
  fs.writeFileSync(APP_CONFIG_PATH, json);
}
