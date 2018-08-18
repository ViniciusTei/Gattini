const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = electron.remote.BrowserWindow;
const path = require("path");
const url = require("url");

const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', function(){

    let menuWin = new BrowserWindow({
      autoHideMenuBar: true,
      show: false,
      frame: false
    });
    //Load html file with the design of the window
    menuWin.loadURL(url.format({
      pathname: path.join(__dirname, 'menu.html'),
      protocol: 'file',
      slashes: true
    }));
    //Set the object to null so it can be closed
    menuWin.on('close', () => {
      menuWin = null;
    } )

    menuWin.on('ready-to-show', () => {
      menuWin.maximize();
      menuWin.show();
    })
})

(function handleWindowControls() {
    // When document has loaded, initialise
    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            init();
        }
    };

    function init() {
        let window = remote.getCurrentWindow();
        const minButton = document.getElementById('min-button'),
            maxButton = document.getElementById('max-button'),
            restoreButton = document.getElementById('restore-button'),
            closeButton = document.getElementById('close-button');

        minButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.minimize();
        });

        maxButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.maximize();
            toggleMaxRestoreButtons();
        });

        restoreButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.unmaximize();
            toggleMaxRestoreButtons();
        });

        // Toggle maximise/restore buttons when maximisation/unmaximisation
        // occurs by means other than button clicks e.g. double-clicking
        // the title bar:
        toggleMaxRestoreButtons();
        window.on('maximize', toggleMaxRestoreButtons);
        window.on('unmaximize', toggleMaxRestoreButtons);

        closeButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.close();
        });

        function toggleMaxRestoreButtons() {
            window = remote.getCurrentWindow();
            if (window.isMaximized()) {
                maxButton.style.display = "none";
                restoreButton.style.display = "flex";
            } else {
                restoreButton.style.display = "none";
                maxButton.style.display = "flex";
            }
        }
    }
})();
