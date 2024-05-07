// Realizando a importação dos módulos do Electron
const { app, BrowserWindow } = require('electron')

// Criando uma função para criar a janela
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

// Quando o aplicativo estiver pronto, a função createWindow será chamada
app.whenReady().then(() => {
  createWindow()
})