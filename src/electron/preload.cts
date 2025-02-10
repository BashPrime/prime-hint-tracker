import { ipcRenderer } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronApi", {
  onResetTracker: (callback: () => void) =>
    ipcRenderer.on("reset-tracker", () => callback()),
  onSetLegacyHintsEnabled: (callback: (checked: boolean) => void) =>
    ipcRenderer.on("set-legacy-hints", (_, checked: boolean) =>
      callback(checked)
    ),
  onRequestAppState: (callback: (action: string) => void) =>
    ipcRenderer.on("request-app-state", (_, action: string) =>
      callback(action)
    ),
  resetSize: (game: string, isLegacyHints: boolean) =>
    ipcRenderer.invoke("reset-size", game, isLegacyHints),
  onLoadAppConfig: (callback: (json: string) => void) =>
    ipcRenderer.on("load-app-config", (_, json: string) => callback(json)),
  onSaveAppConfig: (callback: () => void) =>
    ipcRenderer.on("request-save-app-config", (_, json: string) => callback()),
  saveAppConfig: (json: string) => ipcRenderer.invoke("save-app-config", json),
});
