const{app, BrowserWindow} = require('electron')
  function createWindow(){
  //create the browser window
  win = new BrowserWindow({width:800, height:600})	  
  //load the index.html of app
  win.loadFile('index.html')
  
  
  
  
  }

  app.on('ready', createWindow)
