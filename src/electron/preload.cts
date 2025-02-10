import { ipcRenderer } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronApi", {
  onResetTracker: (callback: () => void) =>
    ipcRenderer.on("reset-tracker", () => callback()),
  onSetFeaturalHints: (callback: (checked: boolean) => void) =>
    ipcRenderer.on("set-featural-hints", (_, checked: boolean) => callback(checked)),
  onRequestAppState: (callback: (action: string) => void) =>
    ipcRenderer.on("request-app-state", (_, action: string) => callback(action)),
  resetSize: (game: string, isLegacyHints: boolean) =>
    ipcRenderer.invoke("reset-size", game, isLegacyHints)
});
