const { app, BrowserWindow } = require("electron");
const path  = require("path");
const url   = require("url");


let win;

// Create our App Window
app.on("ready", createWindow);

// Fix for MAC to Quite
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// Focus our Window
app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

function createWindow() {
    win = new BrowserWindow({ 
        width: 800, 
        height: 600,
        webPreferences: {
            webSecurity: false
        }
    });
  
    // Loading the Dist Folder
    /* 
    win.loadURL(
        url.format({
        pathname: path.join(__dirname, `/dist/index.html`),
        protocol: "file:",
        slashes: true
        })
    );        
     */

    

    win.loadURL('file://' + __dirname + '/dist/index.html')



    // Open Developer Tools
    win.webContents.openDevTools()

    //On Close Event
    win.on("closed", () => {
        win = null;
    });    
}
