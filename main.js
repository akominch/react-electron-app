'use strict';

const {app, BrowserWindow} = require('electron');
const debugMenu = require('debug-menu');
const path = require('path');
var mainWindow = null;


require('electron-reload')(__dirname, {
  electron: require('electron-prebuilt')
});

require('electron-context-menu')({
    prepend: params => [{
        label: 'Rainbow',
        // only show it when right-clicking images
        visible: params.mediaType === 'image'
    }]
});

app.commandLine.appendSwitch('remote-debugging-port', '8315');
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(path.join('file://', __dirname, '/public/index.html'));
  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
