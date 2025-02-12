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
  requestLoadTrackerSession: () => ipcRenderer.invoke("load-tracker-session"),
  loadTrackerSession: (callback: (config: object, legacyHintsEnabled: boolean) => void) =>
    ipcRenderer.on("load-tracker-session", (_, config: object, legacyHintsEnabled: boolean) => callback(config, legacyHintsEnabled)),
  saveTrackerSession: (config: object) =>
    ipcRenderer.invoke("save-tracker-session", config),
});
