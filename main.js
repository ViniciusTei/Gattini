const electron = require("electron");
const remote = electron.remote;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow(){
  //Create a new instance of the object window
  win = new BrowserWindow({
    autoHideMenuBar: true,
    show: false,
    frame: true
  });
  //Load html file with the design of the window
  win.loadFile('src/login.html')

  win.webContents.openDevTools();
  //Set the object to null so it can be closed
  win.on('close', () => {
    win = null;
  } )

  win.on('ready-to-show', () => {
    win.maximize();
    win.show();
  })
}

//The parameter ready means that all objects have been initialized
app.on('ready', createWindow);

//Specific code for Mac
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
} )

app.on('activate', () => {
  if(win == null){
    createWindow()
  }
})
