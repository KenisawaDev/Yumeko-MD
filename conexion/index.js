//≪━─━─━─〚 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎𝐍 〛─━─━─━≫\\
require('../configuracion')
//≪━─━─━─〚 𝐌𝐎𝐃𝐔𝐋𝐎𝐒 〛─━─━─━≫\\
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, AnyMessageContent, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const cfonts = require('cfonts')
const axios = require('axios')
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const lolcatjs = require('lolcatjs')
const {Boom} = require("@hapi/boom")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('../lib/myfunc')
const { state, saveState } = useSingleFileAuthState(`./${global.sessionName}.json`)
const store = makeInMemoryStore({ logger: pino().child({ level: 'fatal', stream: 'store' }) })
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

//≪━─━─━─〚 𝐂𝐎𝐌𝐈𝐄𝐍𝐙𝐎 𝐃𝐄 𝐂𝐎𝐍𝐒𝐎𝐋𝐀 〛─━─━─━≫\\
async function startIchigo(){
  
cfonts.say('Yumeko - MD',{
font: 'block',
gradient: ['red','magenta'],
align: 'center'
})
cfonts.say('Creado por KenisawaDev',{
font: 'console',
gradient: ['red','magenta'],
align: 'center'
})

try{
const Yumeko = makeWASocket({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ["Yumeko-MD", "Safari", "3.0"],
auth: state
})

store.bind(Yumeko.ev)

//≪━─━─━─〚 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 〛─━─━─━≫\\
Yumeko.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Yumeko.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(Yumeko, mek, store)
require("../mensajes/Yumeko.js")(Yumeko, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

//≪━─━─━─〚 𝐀𝐂𝐓𝐔𝐀𝐋𝐈𝐙𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 〛─━─━─━≫\\
/*Yumeko.ev.on('group-participants.update', async (anu) => {
console.log(anu)
//≪━─━─━─〚 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀 〛─━─━─━≫\\
try {
let metadata = await Yumeko.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Yumeko.profilePictureUrl(num, 'image') 
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
if (anu.action == 'add') {
tekswell = `Hola @${num.split('@')[0]} Bienvenid@ a ${metadata.subject} 👋`
Yumeko.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: tekswell })
} else if (anu.action == 'remove') {
teksbye = `Adios @${num.split("@")[0]} 👋`
Yumeko.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: teksbye })
}
}
} catch (err) {
console.log(err)
}
})*/

//≪━─━─━─〚 𝐂𝐎𝐍𝐄𝐗𝐈𝐎𝐍 𝐀𝐂𝐓𝐈𝐕𝐀 〛─━─━─━≫\\
Yumeko.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
	try {
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Archivo de sesión incorrecto, elimine la sesión y vuelva a escanear`);
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Conexión cerrada, reconectando....");
				startIchigo();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Conexión perdida del servidor, reconectando...");
				startIchigo();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Conexión reemplazada, otra nueva sesión abierta, cierre la sesión actual primero");
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Dispositivo cerrado, escanee nuevamente y ejecute.`);
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Reinicio requerido, reiniciar...");
				startIchigo();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Se agotó el tiempo de conexión, reconectando...");
				startIchigo();
			} else Yumeko.end(`Motivo de desconexión desconocido: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			lolcatjs.fromString(`[Conectando]`)
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			lolcatjs.fromString(`[Conectado a] WhatsApp web`)
			lolcatjs.fromString(`[Conectado] ` + JSON.stringify(Yumeko.user, null, 2))
		}
	} catch (err) {
		console.log(err)
		startIchigo();
	}
})


Yumeko.decodeJid = (jid) => {
  if (!jid) return jid
  if (/:\d+@/gi.test(jid)) {
  let decode = jidDecode(jid) || {}
  return decode.user && decode.server && decode.user + '@' + decode.server || jid
  } else return jid
  }
    
Yumeko.ev.on('contacts.update', update => {
  for (let contact of update) {
  let id = Yumeko.decodeJid(contact.id)
  if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
  }
  })

Yumeko.getName = (jid, withoutContact  = false) => {
  id = Yumeko.decodeJid(jid)
  withoutContact = Yumeko.withoutContact || withoutContact 
  let v
  if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
  v = store.contacts[id] || {}
  if (!(v.name || v.subject)) v = Yumeko.groupMetadata(id) || {}
  resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
  })
  else v = id === '0@s.whatsapp.net' ? {
  id,
  name: 'WhatsApp'
  } : id === Yumeko.decodeJid(Yumeko.user.id) ?
  Yumeko.user :
  (store.contacts[id] || {})
  return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
  }
//≪━─━─━─〚 𝐕𝐂𝐀𝐑𝐓 〛─━─━─━≫\\
Yumeko.sendContact = async (jid, kon, quoted = '', opts = {}) => {
  let list = []
  for (let i of kon) {
  list.push({
  displayName: await Yumeko.getName(i + '@s.whatsapp.net'),
  vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Yumeko.getName(i + '@s.whatsapp.net')}\nFN:${await Yumeko.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:kenisawadev@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/kenisawadev\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Sudamerica, Argentina;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
  })
  }
  Yumeko.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
  }
    
Yumeko.setStatus = (status) => {
  Yumeko.query({
  tag: 'iq',
  attrs: {
  to: '@s.whatsapp.net',
  type: 'set',
  xmlns: 'status',
  },
  content: [{
  tag: 'status',
  attrs: {},
  content: Buffer.from(status, 'utf-8')
  }]
  })
  return status
  }

Yumeko.public = true
Yumeko.serializeM = (m) => smsg(Yumeko, m, store)

  /**
   *
   * @param {*} jid
   * @param {*} url
   * @param {*} caption
   * @param {*} quoted
   * @param {*} options
   */
   Yumeko.sendFile = async (jid, url, caption, quoted, options = {}) => {
   let mime = '';
   let res = await axios.head(url)
   mime = res.headers['content-type']
   if (mime.split("/")[1] === "gif") {
   return Yumeko.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
   }
   let type = mime.split("/")[0]+"Message"
   if(mime === "application/pdf"){
   return Yumeko.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
   }
   if(mime.split("/")[0] === "image"){
   return Yumeko.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
   }
   if(mime.split("/")[0] === "video"){
   return Yumeko.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
   }
   if(mime.split("/")[0] === "audio"){
   return Yumeko.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
   }
   }

  /** 𝐄𝐍𝐕𝐈𝐀𝐑 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 𝐋𝐈𝐒𝐓𝐀
   *
   *@param {*} jid
   *@param {*} text
   *@param {*} footer
   *@param {*} title
   *@param {*} butText
   *@param [*] sections
   *@param {*} quoted
   */
   Yumeko.sendList = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
   let sections = sects
   var listMes = {
   text: text,
   footer: footer,
   title: title,
   buttonText: butText,
   sections
   }
   Yumeko.sendMessage(jid, listMes, { quoted: quoted })
   }

  /** 𝐄𝐍𝐕𝐈𝐀𝐑 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 5 𝐁𝐎𝐓𝐎𝐍𝐄𝐒
   * 
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} button
   * @returns 
   */
   Yumeko.sendButtonMsg = (jid, text = '' , footer = '', but = []) =>{
   let templateButtons = but
   var templateMessage = {
   text: text,
   footer: footer,
   templateButtons: templateButtons
   }
   Yumeko.sendMessage(jid, templateMessage)
   }

  /** 𝐄𝐍𝐕𝐈𝐀𝐑 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 5 𝐁𝐎𝐓𝐎𝐍𝐄𝐒 𝐃𝐄 𝐈𝐌𝐀𝐆𝐄𝐍
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} image
   * @param [*] button
   * @param {*} options
   * @returns
   */
   Yumeko.sendButtonImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
   let message = await prepareWAMessageMedia({ image: img }, { upload: Yumeko.waUploadToServer })
   var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
   templateMessage: {
   hydratedTemplate: {
   imageMessage: message.imageMessage,
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
   }
   }
   }), options)
   Yumeko.relayMessage(jid, template.message, { messageId: template.key.id })
   }

  /** 𝐄𝐍𝐕𝐈𝐀𝐑 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 5 𝐁𝐎𝐓𝐎𝐍𝐄𝐒 𝐕𝐈𝐃𝐄𝐎
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} Video
   * @param [*] button
   * @param {*} options
   * @returns
   */
   Yumeko.sendButtonVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
   let message = await prepareWAMessageMedia({ video: vid }, { upload: Yumeko.waUploadToServer })
   var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
   templateMessage: {
   hydratedTemplate: {
   videoMessage: message.videoMessage,
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
   }
   }
   }), options)
   Yumeko.relayMessage(jid, template.message, { messageId: template.key.id })
   }

  /** 𝐄𝐍𝐕𝐈𝐀𝐑 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 5 𝐁𝐎𝐓𝐎𝐍𝐄𝐒 𝐆𝐈𝐅
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} Gif
   * @param [*] button
   * @param {*} options
   * @returns
   */
   Yumeko.sendButtonGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
   let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: Yumeko.waUploadToServer })
   var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
   templateMessage: {
   hydratedTemplate: {
   videoMessage: message.videoMessage,
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
   }
   }
   }), options)
   Yumeko.relayMessage(jid, template.message, { messageId: template.key.id })
   }

  /**
   * 
   * @param {*} jid 
   * @param {*} buttons 
   * @param {*} caption 
   * @param {*} footer 
   * @param {*} quoted 
   * @param {*} options 
   */
   Yumeko.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
   let buttonMessage = {
   text,
   footer,
   buttons,
   headerType: 2,
   ...options
   }
   Yumeko.sendMessage(jid, buttonMessage, { quoted, ...options })
   }
    
  /**
   * 
   * @param {*} jid 
   * @param {*} text 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendText = (jid, text, quoted = '', options) => Yumeko.sendMessage(jid, { text: text, ...options }, { quoted })

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} caption 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendImage = async (jid, path, caption = '', quoted = '', options) => {
   let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
   return await Yumeko.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
   }
   
  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} caption 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
   let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
   return await Yumeko.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
   }

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} quoted 
   * @param {*} mime 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
   let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
   return await Yumeko.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
   }

  /**
   * 
   * @param {*} jid 
   * @param {*} text 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendTextWithMentions = async (jid, text, quoted, options = {}) => Yumeko.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
   let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
   let buffer
   if (options && (options.packname || options.author)) {
   buffer = await writeExifImg(buff, options)
   } else {
   buffer = await imageToWebp(buff)
   }
   await Yumeko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
   return buffer
   }

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
   let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
   let buffer
   if (options && (options.packname || options.author)) {
   buffer = await writeExifVid(buff, options)
   } else {
   buffer = await videoToWebp(buff)
   }
   await Yumeko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
   return buffer
   }
	
  /**
   * 
   * @param {*} message 
   * @param {*} filename 
   * @param {*} attachExtension 
   * @returns 
   */
   Yumeko.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
   let quoted = message.msg ? message.msg : message
   let mime = (message.msg || message).mimetype || ''
   let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
   const stream = await downloadContentFromMessage(quoted, messageType)
   let buffer = Buffer.from([])
   for await(const chunk of stream) {
   buffer = Buffer.concat([buffer, chunk])
   }
   let type = await FileType.fromBuffer(buffer)
   trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
   // save to file
   await fs.writeFileSync(trueFileName, buffer)
   return trueFileName
   }
   Yumeko.downloadMediaMessage = async (message) => {
   let mime = (message.msg || message).mimetype || ''
   let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
   const stream = await downloadContentFromMessage(message, messageType)
   let buffer = Buffer.from([])
   for await(const chunk of stream) {
   buffer = Buffer.concat([buffer, chunk])
   }
   return buffer
   } 
    
  /**
   * 
   * @param {*} jid 
   * @param {*} path +
   * @param {*} filename
   * @param {*} caption
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
   Yumeko.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
   let types = await Yumeko.getFile(path, true)
   let { mime, ext, res, data, filename } = types
   if (res && res.status !== 200 || file.length <= 65536) {
   try { throw { json: JSON.parse(file.toString()) } }
   catch (e) { if (e.json) throw e.json }
   }
   let type = '', mimetype = mime, pathFile = filename
   if (options.asDocument) type = 'document'
   if (options.asSticker || /webp/.test(mime)) {
   let { writeExif } = require('./lib/exif')
   let media = { mimetype: mime, data }
   pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
   await fs.promises.unlink(filename)
   type = 'sticker'
   mimetype = 'image/webp'
   }
   else if (/image/.test(mime)) type = 'image'
   else if (/video/.test(mime)) type = 'video'
   else if (/audio/.test(mime)) type = 'audio'
   else type = 'document'
   await Yumeko.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
   return fs.promises.unlink(pathFile)
   }

  /**
   * 
   * @param {*} jid 
   * @param {*} message 
   * @param {*} forceForward 
   * @param {*} options 
   * @returns 
   */
   Yumeko.copyNForward = async (jid, message, forceForward = false, options = {}) => {
   let vtype
   if (options.readViewOnce) {
   message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
   vtype = Object.keys(message.message.viewOnceMessage.message)[0]
   delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
   delete message.message.viewOnceMessage.message[vtype].viewOnce
   message.message = {
   ...message.message.viewOnceMessage.message
   }
   }
   let mtype = Object.keys(message.message)[0]
   let content = await generateForwardMessageContent(message, forceForward)
   let ctype = Object.keys(content)[0]
   let context = {}
   if (mtype != "conversation") context = message.message[mtype].contextInfo
   content[ctype].contextInfo = {
   ...context,
   ...content[ctype].contextInfo
   }
   const waMessage = await generateWAMessageFromContent(jid, content, options ? {
   ...content[ctype],
   ...options,
   ...(options.contextInfo ? {
   contextInfo: {
   ...content[ctype].contextInfo,
   ...options.contextInfo
   }
   } : {})
   } : {})
   await Yumeko.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
   return waMessage
   }

   Yumeko.cMod = (jid, copy, text = '', sender = Yumeko.user.id, options = {}) => {
   //let copy = message.toJSON()
   let mtype = Object.keys(copy.message)[0]
   let isEphemeral = mtype === 'ephemeralMessage'
   if (isEphemeral) {
   mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
   }
   let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
   let content = msg[mtype]
   if (typeof content === 'string') msg[mtype] = text || content
   else if (content.caption) content.caption = text || content.caption
   else if (content.text) content.text = text || content.text
   if (typeof content !== 'string') msg[mtype] = {
   ...content,
   ...options
   }
   if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
   else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
   if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
   else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
   copy.key.remoteJid = jid
   copy.key.fromMe = sender === Yumeko.user.id
   return proto.WebMessageInfo.fromObject(copy)
   }

  /**
   * 
   * @param {*} path 
   * @returns 
   */
   Yumeko.getFile = async (PATH, save) => {
   let res
   let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
   //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
   let type = await FileType.fromBuffer(data) || {
   mime: 'application/octet-stream',
   ext: '.bin'
   }
   filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
   if (data && save) fs.promises.writeFile(filename, data)
   return {
   res,
   filename,
   size: await getSizeMedia(data),
   ...type,
   data
   }
   }

   return Yumeko
} catch (err) {
console.log(err)
startIchigo()
}
}

startIchigo()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
