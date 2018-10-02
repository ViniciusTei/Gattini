const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = electron.remote.BrowserWindow;

const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', function(){

    //armazena a janela de login para fechá-la mais tarde
    var loginScreen = remote.getCurrentWindow();

    let menuWin = new BrowserWindow({
      autoHideMenuBar: true,
      show: false,
      frame: true
    });
    //Load html file with the design of the window
    menuWin.loadFile('src/menu.html');

    menuWin.openDevTools();

    //Set the object to null so it can be closed
    menuWin.on('close', () => {
      menuWin = null;
    } )

    menuWin.on('ready-to-show', () => {
      menuWin.maximize();
      menuWin.show();
      loginScreen.close();
    })

})
