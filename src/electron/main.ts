import {app, BrowserWindow} from 'electron'
import path from 'path'
import { isDev } from './util.js'

app.on('ready', () => {
    const mainWindow = new BrowserWindow({ width: 1152, height: 854 })
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5173')
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
    }
})
