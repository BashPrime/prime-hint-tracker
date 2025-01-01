import { app } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { create } from "./window.js";


app.on("ready", () => {
  const mainWindow = create();
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});
