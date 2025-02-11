import { ipcRenderer } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronApi", {
  onResetTracker: (callback: () => void) =>
    ipcRenderer.on("reset-tracker", () => callback()),
  setLegacyHints: (callback: (checked: boolean) => void) =>
    ipcRenderer.on("set-legacy-hints", (_, checked: boolean) =>
      callback(checked)
    ),
  onRequestAppState: (callback: (action: string) => void) =>
    ipcRenderer.on("request-app-state", (_, action: string) =>
      callback(action)
    ),
  resetSize: (game: string, isLegacyHints: boolean) =>
    ipcRenderer.invoke("reset-size", game, isLegacyHints),
  requestLoadAppSession: () => ipcRenderer.invoke("load-app-session"),
  loadAppSession: (callback: (json: string) => void) =>
    ipcRenderer.on("load-app-session", (_, json: string) => callback(json)),
  saveAppSession: (json: string) =>
    ipcRenderer.invoke("save-app-session", json),
});
