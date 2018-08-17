const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = electron.remote.BrowserWindow;
const path = require("path");
const url = require("url");

const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', function(){
  let win = new BrowserWindow({
    autoHideMenuBar: true,
    show: false
  });
  //Load html file with the design of the window
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'menu.html'),
    protocol: 'file',
    slashes: true
  }));
  //Set the object to null so it can be closed
  win.on('close', () => {
    win = null;
  } )

  win.on('ready-to-show', () => {
    win.maximize();
    win.show();
  })

})
