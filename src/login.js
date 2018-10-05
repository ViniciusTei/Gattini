const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', function(){
  /* Aqui vai o código para verificação do usuário */

  //se autenticação for válida
  ipcRenderer.sendSync('verificacao-valida', 'arg');
})
