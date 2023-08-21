const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 550,
    height: 550,
    minWidth: 550,
    minHeight: 550
  });

  win.setMenuBarVisibility(false);
  win.setTitle("0xGingi");
  win.setIcon(path.join(__dirname, 'images/logo.png'));

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
