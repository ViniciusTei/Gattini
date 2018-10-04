const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const app = electron.app;

/* constantes dos botões que abrem as janelas de cadastro */
const btnCadastroUser = document.getElementById('btnCadastroUser');
const btnCadPac = document.getElementById('cadpacpg');

/* Botão q abre a janela de cadastro de usuários */
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

/* Botão q abre a janela de cadastro de pacientes */
btnCadPac.addEventListener('click', function () {
  console.log('cliquei');
  let cadastroPacWin = new BrowserWindow({
    autoHideMenuBar: true,
    show: false
  })

  cadastroPacWin.loadFile('src/cadastro_pacientes/cadastroPacientes.html');

  //cadastroPacWin.openDevTools();

  cadastroPacWin.on('close', () => {
    cadastroPacWin = null;
  })

  cadastroPacWin.on('ready-to-show', () => {
    cadastroPacWin.maximize();
    cadastroPacWin.show();
  })
})

/*function openNewWindow(String path) {
  var win = new BrowserWindow({
    autoHideMenuBar: true,
    show: false
  })

  win.loadFile(path);

  win.on('close', function () {
    win = null;
  })

  win.on('ready-to-show', function () {
    win.maximize();
    win.show();
  })
}*/
