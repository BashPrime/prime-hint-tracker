import { ipcRenderer } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronApi", {
  onResetTracker: (callback: () => void) =>
    ipcRenderer.on("reset-tracker", () => callback()),
  onSetFeaturalHints: (callback: (checked: boolean) => void) =>
    ipcRenderer.on("set-featural-hints", (_, checked: boolean) => callback(checked))
});
