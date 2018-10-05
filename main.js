const electron = require("electron");
const remote = electron.remote;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

let win;
let loginWindow;

function createWindow(){
  //Create a new instance of the object window
  win = new BrowserWindow({
    autoHideMenuBar: true,
    show: false,
    frame: true
  });
  //Load html file with the design of the window
  win.loadFile('src/menu.html')

  //win.webContents.openDevTools();
  //Set the object to null so it can be closed
  win.on('close', () => {
    win = null;
  } )

  //Create a child window for the login authentication
  loginWindow = new BrowserWindow({
    parent: win,
    frame: false,
    autoHideMenuBar: true,
    width: 400,
    height: 500,
    show: false
  })

  loginWindow.loadFile('src/login.html');

  loginWindow.on('ready-to-show', () => {
    loginWindow.show();
  })
}

//Open the main window when the auth is correct
ipcMain.on('verificacao-valida', (event, arg) => {
  if(arg == 'arg'){
    win.maximize();
    win.show();
    loginWindow.hide();
  }
})

//The parameter ready means that all objects have been initialized
app.on('ready', createWindow);

//Specific code for Mac
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
} )

app.on('activate', () => {
  if(win == null){
    createWindow();
  }
})
