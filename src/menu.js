const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const app = electron;

const btnCadastroUser = document.getElementById('btnCadastroUser');

btnCadastroUser.addEventListener('click', function () {

  let cadastroUserWin = new BrowserWindow({
    autoHideMenuBar: true,
    show: false
  })

  cadastroUserWin.loadFile('src/cadastro_usuarios/cadastroUser.html');

  //cadastroUserWin.openDevTools();

  //Set the object to null so it can be closed
  cadastroUserWin.on('close', () => {
    cadastroUserWin = null;
  } )

  cadastroUserWin.on('ready-to-show', () => {
    cadastroUserWin.maximize();
    cadastroUserWin.show();
  })
})
