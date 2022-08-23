const fs = require('fs')
const chalk = require('chalk')

//≪━─━─━─〚 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎𝐍 〛─━─━─━≫\\
global.ownerNumber = ['5493865392125','5493865221136','0']
global.ownerName = '♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦'
global.packname = ''
global.author = '    ♦️ [ STICKER MAKER ] ♠️\n\nby: Yumeko - MD'
global.prefa = ['','!','.','#','!'] // Si prefieres dejar el bot sin prefijo ''
global.sessionName = 'qrr'

//≪━─━─━─〚 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 〛─━─━─━≫\\
global.mess = {
success: '       _*『✅』𝐄𝐱𝐢𝐭𝐨*_ ',
done: '       _*『✅』𝐄𝐱𝐢𝐭𝐨*_ ',
admin: '      _*『❕』𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐬!!!*_ ',
botAdmin: '     _*『❗』𝐄𝐥 𝐛𝐨𝐭 𝐧𝐨 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨!!!*_ ',
owner: '     _*『❗』𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐦𝐢 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨*_ ',
group: '     _*『❕』𝐄𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐠𝐫𝐮𝐩𝐨𝐬!!*_ \n𝐒𝐢 𝐧𝐨 𝐞𝐬𝐭𝐚𝐬 𝐞𝐧 𝐧𝐢𝐧𝐠𝐮𝐧 𝐠𝐫𝐮𝐩𝐨 𝐮𝐧𝐞𝐭𝐞 𝐚 𝐞𝐬𝐭𝐞\n https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt',
private: '     _*『❕』𝐄𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐧 𝐜𝐡𝐚𝐭 𝐩𝐫𝐢𝐯𝐚𝐝𝐨*_',
bot: 'Funciones especiales del usuario del número de bot',
wait: '        _*『⌚』𝐄𝐬𝐩𝐞𝐫𝐞 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬...*_ \n',
endLimit: '  _*〚❌〛𝐋𝐢𝐦𝐢𝐭𝐞 𝐚𝐜𝐚𝐛𝐚𝐝𝐨!!*_ \n𝐏𝐮𝐞𝐝𝐞𝐬 𝐞𝐬𝐩𝐞𝐫𝐚𝐫 𝐚 𝐥𝐚𝐬 00:00\n𝐨 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐩𝐫𝐞𝐦𝐮𝐦',
}

//≪━─━─━─〚 𝐅𝐎𝐓𝐎 𝐓𝐇𝐔𝐌𝐁 〛─━─━─━≫\\
global.thumb = fs.readFileSync('./media/yumeko.jpg')
global.menu = fs.readFileSync('./media/menus/menu.jpg')
global.menugrupo = fs.readFileSync('./media/menus/menuadm.jpg')
global.descargas = fs.readFileSync('./media/menus/descargas.jpg')
global.alteradores = fs.readFileSync('./media/menus/alteradores.jpg')
global.menuanime = fs.readFileSync('./media/menus/menuanime.jpg')
global.menujuegos = fs.readFileSync('./media/menus/juegos.jpg')
global.menulogos = fs.readFileSync('./media/menus/menulogos.jpg')
global.consultas = fs.readFileSync('./media/menus/consultas.jpg')
global.ownermenu = fs.readFileSync('./media/menus/menuowner.jpg')
global.reglas = fs.readFileSync('./media/reglas.jpg')
global.thumbnail = fs.readFileSync('./media/yumeko.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Se actualizó '${__filename}'`))
delete require.cache[file]
require(file)
})
