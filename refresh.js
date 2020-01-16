// Añadir globalShortcut al require de electron

function createWindow () {
	//***//
	globalShortcut.register('F5', function() {
		console.log('f5 is pressed')
		mainWindow.reload()
	})
	globalShortcut.register('CommandOrControl+R', function() {
		console.log('CommandOrControl+R is pressed')
		mainWindow.reload()
	})
}