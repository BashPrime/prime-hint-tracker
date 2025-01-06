import { ipcRenderer } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronApi", {
  onResetTracker: (callback: () => void) =>
    ipcRenderer.on("reset-tracker", () => callback()),
});
