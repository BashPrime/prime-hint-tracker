import { ipcRenderer } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronApi", {
  onResetTracker: (callback: () => void) =>
    ipcRenderer.on("reset-tracker", () => callback()),
  setLegacyHintsEnabled: (callback: (checked: boolean) => void) =>
    ipcRenderer.on("set-legacy-hints-enabled", (_, checked: boolean) =>
      callback(checked)
    ),
  onRequestRendererState: (callback: (action: string) => void) =>
    ipcRenderer.on("request-renderer-state", (_, action: string) =>
      callback(action)
    ),
  rendererTrackerState: (config: object) => ipcRenderer.invoke("renderer-tracker-state"),
  resetSize: (game: string, isLegacyHints: boolean) =>
    ipcRenderer.invoke("reset-size", game, isLegacyHints),
  requestMainState: () => ipcRenderer.invoke("request-main-state"),
  loadTrackerSession: (callback: (config: object, legacyHintsEnabled: boolean) => void) =>
    ipcRenderer.on("load-tracker-session", (_, config: object, legacyHintsEnabled: boolean) => callback(config, legacyHintsEnabled)),
  saveTrackerSession: (config: object) =>
    ipcRenderer.invoke("save-tracker-session", config),
});
