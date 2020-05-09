const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

    event.reply('process-subtitles', [
        { name: 'i', amount: 1250 },
        { name: 'you', amount: 900 },
        { name: 'he', amount: 800 },
    ])
})