const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){
  //Create a new instance of the object window
  win = new BrowserWindow();
  //Load html file with the design of the window
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'login.html'),
    protocol: 'file',
    slashes: true
  }));
  //Set the object to null so it can be closed
  win.on('close', () => {
    win = null;
  } )
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
