//≪━─━─━─〚 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎𝐍 〛─━─━─━≫\\
require('../configuracion')
//≪━─━─━─〚 𝐌𝐎𝐃𝐔𝐋𝐎𝐒 〛─━─━─━≫\\
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search');

//≪━─━─━─〚 𝐇𝐎𝐑𝐀 〛─━─━─━≫\\
const time = moment().tz('America/Buenos_Aires').format("HH:mm:ss")
const wib = moment.tz('America/Buenos_Aires').format('HH:mm:ss')
const wita = moment.tz('America/Buenos_Aires').format("HH:mm:ss")
const wit = moment.tz('America/Buenos_Aires').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//≪━─━─━─〚 𝐋𝐈𝐁 𝐘 𝐒𝐂𝐑𝐀𝐏𝐄𝐑 〛─━─━─━≫\\
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')
const { wikiSearch } = require('../lib/wiki.js')

//≪━─━─━─〚 𝐌𝐎𝐃𝐔𝐋𝐎𝐒 𝐄𝐗𝐏𝐎𝐑𝐓𝐀𝐃𝐎𝐒 〛─━─━─━≫\\
module.exports = Yumeko = async(Yumeko, m, chatUpdate, store) => {
try {
  //console.log(m)
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "Sin nombre"
const botNumber = Yumeko.user.id ? Yumeko.user.id.split(":")[0]+"@s.whatsapp.net" : Yumeko.user.id
const isOwner = [Yumeko.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == Yumeko.user.id ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
//≪━─━─━─〚 𝐋𝐄𝐄𝐑 𝐌𝐀𝐒 〛─━─━─━≫\\
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//≪━─━─━─〚 𝐆𝐑𝐔𝐏𝐎 〛─━─━─━≫\\
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await Yumeko.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)

//≪━─━─━─〚 𝐋𝐎𝐆𝐎 𝐋𝐈𝐍𝐊 〛─━─━─━≫\\
const logo = 'https://telegra.ph/file/9357ff515579133c29f6e.jpg'

var thumbs = getBuffer(`${logo}`)
var sello = { key: {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "555195227849@g.us" }, "message": {orderMessage: {itemCount: 999999,status: 4, thumbnail: fs.readFileSync(`./media/Yumeko.jpg`) ,message: `𝐍𝐨𝐦𝐛𝐫𝐞: ${pushname}\n𝐂𝐨𝐦𝐚𝐧𝐝𝐨: ${prefix + command}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}

//≪━─━─━─〚 𝐑𝐄𝐏𝐋𝐘 𝐘 𝐅𝐀𝐊𝐄 〛─━─━─━≫\\
/*const reply = (texto) => {
			Yumeko.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, {	quoted: sello })
		}*/
		
const reply = (teks) => {
Yumeko.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦`,"body": `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏-𝐁𝐎𝐓-𝐌𝐃`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/yumeko.jpg`),"sourceUrl": "https://wa.me/5493865392125"}}}, { quoted: sello})
}


//≪━─━─━─〚 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄𝐒 〛─━─━─━≫\\
global.db = JSON.parse(fs.readFileSync('./storage/db.json'))
if (global.db) global.db = {
chats: {},
...(global.db || {})
}

try {
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
} else global.db.chats[m.chat] = {
antilink: false
}
} catch (err) {
console.error(err)
}

//≪━─━─━─〚 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 〛─━─━─━≫\\
if (db.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
reply(`╔══━━━━✥❗✥━━━━══╗\n║\n║➤❐ 𝐋𝐈𝐍𝐊 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎 ❐\n║『♦』𝚁𝚎𝚖𝚘𝚟𝚒𝚎𝚗𝚍𝚘...\n╚══━━━━✥❗✥━━━━══╝`)
if (!isBotAdmins) return //  silenciar en lugar de esconderse reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await Yumeko.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`_《❗》𝐋𝐢𝐧𝐤 𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐨, 𝐧𝐨 𝐭𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐞 𝐩𝐨𝐫 𝐪𝐮𝐞 𝐞𝐬 𝐞𝐥 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨_ ❤️️`)
if (isAdmins) return reply(`_《❗》𝐋𝐢𝐧𝐤 𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐨, 𝐧𝐨 𝐭𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐞 𝐩𝐨𝐫 𝐪𝐮𝐞 𝐞𝐫𝐞𝐬 𝐚𝐝𝐦𝐢𝐧_ ❤`)
if (isOwner) return reply(`_《❗》𝐋𝐢𝐧𝐤 𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐨, 𝐧𝐨 𝐭𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐞 𝐩𝐨𝐫 𝐪𝐮𝐞 𝐞𝐫𝐞𝐬 𝐦𝐢 𝐚𝐦𝐨_ ❤`)
Yumeko.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}


//≪━─━─━─〚 𝐀𝐍𝐓𝐈𝐕𝐄𝐑 𝐔𝐍𝐀 𝐕𝐄𝐙 〛─━─━─━≫\\
		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let texto = `
╔══━━━━✥❗✥━━━━══╗
║
║❐ 𝐀𝐍𝐓𝐈𝐕𝐄𝐑 𝐔𝐍𝐀 𝐕𝐄𝐙 ❐
║『❗』𝑴𝒆𝒏𝒔𝒂𝒋𝒆 𝒎𝒐𝒔𝒕𝒓𝒂𝒅𝒐...
║
║¤ = ~~〚𝐈𝐍𝐅𝐎〛~~ = ¤
║𝐍𝐨𝐦𝐛𝐫𝐞: ${pushname}
║𝐔𝐬𝐮𝐚𝐫𝐢𝐨: @${m.sender.split("@")[0]}
║𝐇𝐨𝐫𝐚: ${moment.tz('America/Buenos_Aires').format('HH:mm:ss')}
║𝐓𝐢𝐩𝐨: ${m.mtype}
╚══━━━━✥❗✥━━━━══╝
`
     reply(texto)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => reply('Mmmm'))
		}



//≪━─━─━─〚 𝐌𝐎𝐃𝐎 𝐏𝐔𝐁𝐋𝐈𝐂 & 𝐒𝐄𝐋𝐅 〛─━─━─━≫\\
if (!Yumeko.public) {
if (!m.key.fromMe && !isOwner) return
}

//≪━─━─━─〚 𝐄𝐍𝐕𝐈𝐀𝐑 5 𝐁𝐎𝐓𝐎𝐍𝐄𝐒 〛─━─━─━≫\\
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
Yumeko.sendMessage(id, templateMessage, {quoted: vr})
}

const sendBvid = async (id, vid1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: vid1},
caption: text1,
footer: desc1,
templateButtons: but,
}
Yumeko.sendMessage(id, templateMessage, {quoted: vr})
}

//≪━─━─━─〚 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 𝐂𝐎𝐍𝐒𝐎𝐋𝐀 〛─━─━─━≫\\
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m YUMEKO \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'De', chalk.blue(pushname), 'Para', chalk.yellow(groupName ? groupName : 'Chat privado' ), 'args :', chalk.white(args.length))
}

switch(command) {
//≪━─━─━─〚 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 〛─━─━─━≫\\
case 'menu': case 'help': {
  let comandos = `${readmore}
╔╦════• •✠•♦️•✠ • •════╦╗
║║        *❒ 𝐌𝐄𝐍𝐔 ❒*
║╠══════════════╩╝
║║
║║ 𝐇𝐨𝐥𝐚 ${pushname} 👋
║║𝐄𝐬𝐭𝐞 𝐞𝐬 𝐦𝐢 𝐦𝐞𝐧𝐮
║║𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧
║║𝐄𝐯𝐢𝐭𝐞 𝐡𝐚𝐜𝐞𝐫 𝐬𝐩𝐚𝐦!!
║╠══════════════╦╗
║║  ♣️ *𝐂𝐌𝐃 𝐅𝐑𝐄𝐂𝐔𝐄𝐍𝐓𝐄𝐒* ♠️
╠╬════• •✠•♦️•✠ • •════╩╝
║║
║║${prefix}play *𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒂𝒖𝒅𝒊𝒐*
║║${prefix}playvid *𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒗𝒊𝒆𝒆𝒐*
║║${prefix}sticker
║║${prefix}play2 *𝑻𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒀𝑻*
║║${prefix}emojimix 😁+🤑
║╠══════════════╦╗
║║   *♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦*
╚╩════• •✠•♦️•✠ • •════╩╝
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "〚♦〛𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒〚️♦〛️","id": `menulista`}}
  ]
  Yumeko.sendButtonImg(m.chat, comandos, global.ownerName, global.menu, but)
  }
  break
case 'menulista':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `┍══━━━━✥♦✥━━━━══┑`,
                    description: `╟━━◤ 𝕃𝕀𝕊𝕋𝔸 𝔻𝔼 𝕄𝔼ℕ𝕌𝕊 ◢━━\n║\n║𝐇𝐨𝐥𝐚 ${pushname}\n║𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚 𝐭𝐮 𝐦𝐞𝐧𝐮!!\n║`,
                    buttonText: "♜𝑪𝑳𝑰𝑪𝑲♜",
                    footerText: "┕══━━━━✥♦✥━━━━══┙",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "♥️『 𝐘𝐔𝐌𝐄𝐊𝐎 𝐌𝐄𝐍𝐔𝐒 』♥️",
								"rows": [
									{
										"title": "♛𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬 𝐀𝐝𝐦𝐢𝐧♛",
										"description": "ᴄᴏᴍᴀɴᴅᴏs sᴏʟᴏ ᴘᴀʀᴀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs",
										"rowId": `${prefix}menugrupo`
									}
								]
							},
							{
								"title": "♦『 𝐓𝐎𝐃𝐎𝐒 𝐌𝐈𝐒 𝐌𝐄𝐍𝐔𝐒 』♦️",
								"rows": [
									{
										"title": "〚🎞️️〛𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛〚🎵️️〛 ",
										"description": "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴍᴜsɪᴄᴀs ʏ ᴠɪᴅᴇᴏs",
										"rowId": `${prefix}descargas`
									},
									{
										"title": "〚🔎〛𝙱𝚞𝚜𝚚𝚞𝚎𝚍𝚊𝚜〚🔍〛",
										"description": "Pᴜᴇᴅᴇs ʙᴜsᴄᴀʀ ʟᴏ ǫᴜᴇ ǫᴜɪᴇʀᴀs ᴍᴇɴᴏs ɴᴏᴘᴏʀ... ᴄᴏsʜɪɴᴏ...",
										"rowId": `${prefix}busquedas`
									},
										{
											"title": "〚👾〛𝙹𝚞𝚎𝚐𝚘𝚜 𝚢 𝙱𝚛𝚘𝚖𝚊𝚜〚👾〛",
											"description": "Fᴏʀᴍᴀ ᴘᴀʀᴇᴊᴀs ʏ ʜᴀᴢ ǫᴜᴇ sᴇ ʙᴇsᴇɴ ᴛᴜs ᴀᴍɪɢᴏs",
										"rowId": `${prefix}menujuegos`
										},
										{
											"title": "〚🎛️️〛𝙲𝚘𝚗𝚟𝚎𝚛𝚜𝚘𝚛〚🎛️️〛",
											"description": "ᴅɪᴠɪᴇʀᴛᴇᴛᴇ ᴄᴏɴ ᴍɪs ғᴜɴᴄɪᴏɴᴇs ᴘᴀʀᴀ ᴄʀᴇᴀʀ sᴛɪᴋᴇʀs ʏ ᴀᴜᴅɪᴏs ɢʀᴀᴄɪᴏsᴏs",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "〚🌃〛𝙼𝚎𝚗𝚞 𝙻𝚘𝚐𝚘𝚜〚️🌀〛",
											"description": "Cʀᴇᴀ ᴛᴜs ᴘʀᴏᴘɪᴏs ʟᴏɢᴏs ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴏs ᴀ ᴛᴜ ɢᴜsᴛᴏ...",
										"rowId": `${prefix}menulogos`
										},
										{
											"title": "〚💮〛𝙸𝚖𝚊𝚐𝚎𝚗𝚎𝚜 𝙰𝚗𝚒𝚖𝚎〚💮〛",
											"description": "ǫᴜɪᴇʀᴇs ᴜɴ ғᴏɴᴅᴏ ᴅᴇ ᴘᴀɴᴛᴀʟʟᴀ?",
										"rowId": `${prefix}animemenu`
										}
								]
							},
							{
								"title": "👤『 𝐂𝐌𝐃 𝐃𝐄𝐋 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 』👤",
								"rows": [
									{
										"title": "〚💠〛𝙾𝚗𝚠𝚎𝚛 𝙼𝚎𝚗𝚞〚💠〛",
										"description": "ᴇsᴛᴏs ᴄᴏᴍᴀɴᴅᴏs sᴏɴ ᴘᴀʀᴀ ᴍɪ ᴅᴜᴇñᴏ",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "❗️『 𝐑𝐄𝐆𝐋𝐀𝐒 』❗",
								"rows": [
									{
										"title": "𝐑𝐄𝐆𝐋𝐀𝐒 𝐀 𝐒𝐄𝐆𝐔𝐈𝐑",
										"description": "Sɪɢᴜᴇs ʟᴀs ʀᴇɢʟᴀs ᴘᴀʀᴀ ᴇᴠɪᴛᴀʀ ᴜɴ ʙʟᴏǫᴜᴇᴏ!!",
										"rowId": `${prefix}reglas`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Yumeko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'menugrupo': case 'grupmenu': {
  let menugrupo = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑴𝑬𝑵𝑼 𝑨𝑫𝑴𝑰𝑵◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷${prefix}antienlace on/off
╠❍▷${prefix}linkgrupo
╠❍▷${prefix}reestablecerlink
╠❍▷${prefix}sacar 〔𝐌𝐞𝐧𝐬𝐚𝐣𝐞/@〕
╠❍▷${prefix}agg 〔+549xxxx〕
╠❍▷${prefix}daradm 〔𝐌𝐞𝐧𝐬𝐚𝐣𝐞/@〕
╠❍▷${prefix}quitaradm 〔𝐌𝐞𝐧𝐬𝐚𝐣𝐞/@〕
╠❍▷${prefix}nombregrupo 〔𝐓𝐞𝐱𝐭𝐨〕
╠❍▷${prefix}descgrupo 〔𝐓𝐞𝐱𝐭𝐨〕
╠❍▷${prefix}fotogrupo 〔𝐅𝐨𝐭𝐨〕
╠❍▷${prefix}marcar 〔𝐓𝐞𝐱𝐭𝐨〕
╠❍▷${prefix}aviso 〔𝐓𝐞𝐱𝐭𝐨〕
╠❍▷${prefix}ephemeral 
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, menugrupo, global.ownerName, global.menugrupo, but)
  }
  break
case 'descargas': case 'download': {
  let descargas = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷${prefix}play 〔𝐓𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐘𝐓〕
╠❍▷${prefix}yts 〔𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚〕
╠❍▷${prefix}ytmp3 〔𝐋𝐢𝐧𝐤 𝐝𝐞 𝐲𝐭〕
╠❍▷${prefix}ytmp4 〔𝐋𝐢𝐧𝐤 𝐝𝐞 𝐲𝐭〕
╠❍▷${prefix}mediafire 〔𝐋𝐢𝐧𝐤〕
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, descargas, global.ownerName, global.descargas, but)
  }
  break
  case 'ownermenu': case 'menuowner': {
  let ownerm = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷${prefix}bc
╠❍▷${prefix}bcgc
╠❍▷${prefix}entrar
╠❍▷${prefix}salirbot
╠❍▷${prefix}block
╠❍▷${prefix}unblock
╠❍▷${prefix}setppbot
╠❍▷${prefix}self
╠❍▷${prefix}public
╠❍▷${prefix}eval
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, ownerm, global.ownerName, global.ownermenu, but)
  }
  break
  case 'convertmenu': case 'convertidor': {
  let convertidor = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷ ${prefix}sticker 〔𝐅𝐨𝐭𝐨/𝐕𝐢𝐝𝐞𝐨〕
╠❍▷ ${prefix}toimg 〔𝐒𝐭𝐢𝐜𝐤𝐞𝐫〕
╠❍▷ ${prefix}tovideo 〔𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐚𝐧𝐢𝐦𝐚𝐝𝐨〕
╠❍▷ ${prefix}toaudio 〔𝐕𝐢𝐝𝐞𝐨〕
╠❍▷ ${prefix}tomp3 〔𝐕𝐢𝐝𝐞𝐨〕
╠❍▷ ${prefix}tovn 〔𝐕𝐢𝐝𝐞𝐨/𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}togif 〔𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐚𝐧𝐢𝐦𝐚𝐝𝐨〕
╠❍▷ ${prefix}tourl 〔𝐅𝐨𝐭𝐨/𝐕𝐢𝐝𝐞𝐨〕
╠❍▷ ${prefix}removebg 〔𝐅𝐨𝐭𝐨〕
╠❍▷ ${prefix}emojimix 😉+😊
╠❍▷ ${prefix}bass 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}blown 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}deep 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}earrape 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}fast 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}fat 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}nightcore 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}reverse 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}robot 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}slow 〔𝐀𝐮𝐝𝐢𝐨〕
╠❍▷ ${prefix}squirrel 〔𝐀𝐮𝐝𝐢𝐨〕
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, convertidor, global.ownerName, global.alteradores, but)
  }
  break
case 'animemenu': case 'menuanime': {
  let animee = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑨𝑵𝑰𝑴𝑬 𝑴𝑬𝑵𝑼◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷ ${prefix}waifu
╠❍▷ ${prefix}loli
╠❍▷ ${prefix}cosplay
╠❍▷ ${prefix}neko
╠❍▷ ${prefix}cry
╠❍▷ ${prefix}awoo
╠❍▷ ${prefix}shinobu
╠❍▷ ${prefix}megumin
╠❍▷ ${prefix}cringe
╠❍▷ ${prefix}kill
╠❍▷ ${prefix}hug
╠❍▷ ${prefix}pat
╠❍▷ ${prefix}rlick
╠❍▷ ${prefix}kiss
╠❍▷ ${prefix}bite
╠❍▷ ${prefix}yeet
╠❍▷ ${prefix}bonk
╠❍▷ ${prefix}bully
╠❍▷ ${prefix}wink
╠❍▷ ${prefix}poke
╠❍▷ ${prefix}happy
╠❍▷ ${prefix}cuddle
╠❍▷ ${prefix}slap
╠❍▷ ${prefix}ppcp 〔𝐅𝐨𝐭𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐝𝐚〕
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, animee, global.ownerName, global.menuanime, but)
  }
  break
case 'busquedas': case 'searchmenu': {
  let busquedas = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑩𝑼𝑺𝑸𝑼𝑬𝑫𝑨𝑺◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷${prefix}pinterest 〔𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚〕
╠❍▷${prefix}wallpaper 〔𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚〕
╠❍▷${prefix}wiki 〔𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚〕
╠❍▷${prefix}wikimedia 〔𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚〕
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, busquedas, global.ownerName, global.consultas, but)
  }
  break
case 'menujuegos': case 'gamesmenu': {
  let gamess = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑱𝑼𝑬𝑮𝑶𝑺◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷ ${prefix}pareja 〔𝐑𝐚𝐧𝐝𝐨𝐦〕
╠❍▷ ${prefix}pregunta 〔𝐂𝐡𝐚𝐧𝐬𝐞〕
╠❍▷ ${prefix}beso 〔𝐑𝐚𝐧𝐝𝐨𝐦〕
╠❍▷ ${prefix}dado 
╠❍▷ ${prefix}simi 〔𝐇𝐚𝐛𝐥𝐚 𝐚𝐥𝐠𝐨〕
╠❍▷ ${prefix}say 〔𝐓𝐞𝐱𝐭𝐨〕
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, gamess, global.ownerName, global.menujuegos, but)
  }
  break
  case 'menulogos': case 'logosmenu': {
  let logoss = `${readmore}
┍════━━━━✥♦✥━━━━════╮
║━━━༺◤𝑴𝑬𝑵𝑼 𝑳𝑶𝑮𝑶𝑺◢༻━━━
╠┄━❒━╼╾┄╼╾┄┄╼╾┄╼╾━❒━┄╯
║
╠❍▷ ${prefix}thunder 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}jokerlogo 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}ninjalogo 〚𝐭𝐞𝐱𝐭𝐨〛|〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}skytext 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}pornhub 〚𝐭𝐞𝐱𝐭𝐨〛|〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}avengers 〚𝐭𝐞𝐱𝐭𝐨〛|〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}youtubegold 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}youtubesilver 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}mascotbear 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}goldenroses 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}hallowen 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}grafity 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}holografic 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}christmas 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}luxury 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}harrypotter 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}brokenglass 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}artpapper 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}watercolor 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}glossymaker 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}multicolor 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}gluetext 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}neonlight 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}neondevil 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}flaming 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}shadow 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}wolftext 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}cup 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}cup2 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}romantic 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}writetext 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}woodheart 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}tahta 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}waifumaker 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}lolimaker 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}kanekimaker 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}guramaker 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}leaves 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}pornhub 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}3d 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}christmas 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}logowolf 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}logowolf2 〚𝐭𝐞𝐱𝐭𝐨〛
║
║━━━༺◤𝑷𝑯𝑶𝑻𝑶 𝑶𝑿𝒀◢༻━━━
║
╠❍▷ ${prefix}coffecup 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}glitch 〚𝐭𝐞𝐱𝐭𝐨〛|〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}undergrass 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}lovetext 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}lovetext2 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}army 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}matrix 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}pubg 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}breakwall 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}butterfly 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}narutotext 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}smoke 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}burnpapper 〚𝐭𝐞𝐱𝐭𝐨〛
╠❍▷ ${prefix}doubleheart 〚𝐭𝐞𝐱𝐭𝐨〛
║
┣═════════ஜ♣ஜ════════╮
║      ♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦
┕════════════════════࿐
  `
  let but = [
  {urlButton: {displayText: '️ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭 ',url: 'https://wa.me/549386539215'}}, 
  {urlButton: {displayText: ' 𝐆𝐫𝐮𝐩𝐨 𝐎𝐅𝐂 ',url: 'https://chat.whatsapp.com/KkILyG76WmTHWkFddP4vmt'}}, 
  {"quickReplyButton": {"displayText": "👤 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👤","id": `owner`}}
  ]
  Yumeko.sendButtonImg(m.chat, logoss, global.ownerName, global.menulogos, but)
  }
  break
case 'reglas': case 'rules': {
  let reglas = `
*━━━━〘 𝐑𝐄𝐆𝐋𝐀𝐒 〙━━━━*

1. 𝑵𝒐 𝒔𝒆 𝒑𝒖𝒆𝒅𝒆 𝒉𝒂𝒄𝒆𝒓 𝒔𝒑𝒂𝒎 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔. 
𝑪𝒂𝒔𝒕𝒊𝒈𝒐: *❎ 𝘣𝘭𝘰𝘲𝘶𝘦𝘰 𝘱𝘦𝘳𝘮𝘢𝘯𝘦𝘯𝘵𝘦*

2. 𝑵𝒐 𝒔𝒆 𝒑𝒖𝒆𝒅𝒆 𝒍𝒍𝒂𝒎𝒂𝒓 𝒂𝒍 𝒃𝒐𝒕. ☎
𝑪𝒂𝒔𝒕𝒊𝒈𝒐: *❎ 𝘣𝘭𝘰𝘲𝘶𝘦𝘰 𝘱𝘦𝘳𝘮𝘢𝘯𝘦𝘯𝘵𝘦*

🗯️ Bot lento para responder ?
➡️ Puede verse afectado por spam de descargas, usted debe seguir las reglas‼️

🗯️ Como puedo instalar el bot ?
➡️ La script de este bot es privada, pronto se publicará.

🗯️ Cual es el prefijo del bot ?
➡️ El bot tiene multiprefijo, puede tener todos los prefijos ejemplo: ! # . / etc

🗯️ Como puedo hablar con el creador ?
➡️ Si quieres hablar con mi creador pedes escribirle por Whatsapp ya sea una duda o error del bot, número: wa.me/5493865392125

Si ya sabes la reglas puedes usar el bot *${prefix}menu* para ver todos los comandos
  `
  let but = [{"quickReplyButton": {"displayText": "👤 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 👤","id": "owner"}}]
  Yumeko.sendButtonImg(m.chat, reglas, global.ownerName, global.reglas, but)
  }
  break
case 'owner': {
  Yumeko.sendContact(m.chat, global.ownerNumber, m)
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 𝐝𝐞 𝐫𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 ${latensi.toFixed(4)} _𝐒𝐞𝐠𝐮𝐧𝐝𝐨𝐬_ \n ${oldd - neww} _𝐦𝐢𝐧𝐢𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬_\n\n𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐢𝐯𝐨 : ${runtime(process.uptime())}

𝐈𝐧𝐟𝐨 𝐬𝐞𝐫𝐯𝐞𝐫
𝐑𝐀𝐌: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`.trim()
  reply(respon)
  }
  break

//≪━─━─━─〚 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄𝐋 𝐎𝐖𝐍𝐄𝐑 〛─━─━─━≫\\
case 'bcgc': case 'bcgroup': {
  if (!isOwner && !m.key.fromMe) return reply(mess.botOwner)
  if (!text) throw reply(`𝐘 𝐞𝐥 𝐭𝐞𝐱𝐭𝐨?\n\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 𝐇𝐨𝐥𝐚 𝐦𝐮𝐧𝐝𝐨!!`)
  let getGroups = await Yumeko.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  reply(`𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐚 ${anu.length} 𝐆𝐫𝐮𝐩𝐨𝐬, 𝐓𝐢𝐞𝐦𝐩𝐨 𝐝𝐞 𝐟𝐢𝐧𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧 ${anu.length * 1.5} 𝐒𝐞𝐠𝐮𝐧𝐝𝐨𝐬`)
  for (let i of anu) {
  await sleep(1500)
  let txt = `『 𝗗𝗜𝗩𝗨𝗟𝗚𝗔𝗖𝗜𝗢𝗡 』\n\n${text}`
  Yumeko.sendButtonText(i, txt, m)
  }
  reply(`𝐒𝐞 𝐞𝐧𝐯𝐢𝐨 𝐥𝐚 𝐝𝐢𝐯𝐮𝐥𝐠𝐚𝐜𝐢𝐨𝐧 𝐚 ${anu.length} 𝐆𝐫𝐮𝐩𝐨(𝐬)`)
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return reply(mess.botOwner)
  if (!text) throw reply(`𝐘 𝐞𝐥 𝐭𝐞𝐱𝐭𝐨?\n\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 𝐇𝐨𝐥𝐚 𝐦𝐮𝐧𝐝𝐨!!`)
  let anu = await store.chats.all().map(v => v.id)
  let getGroups = await Yumeko.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anuan = groups.map(v => v.id)
  reply(`𝐄𝐧𝐯𝐢𝐚𝐝𝐨 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐚 ${anu.length} 𝐂𝐡𝐚𝐭(𝐬)\n𝐞𝐧 ${anu.length * 1.5} 𝐒𝐞𝐠𝐮𝐧𝐝𝐨𝐬`)
  for (let yoi of anu && anuan) {
  await sleep(1500)
  let txt = `『 𝗗𝗜𝗩𝗨𝗟𝗚𝗔𝗖𝗜𝗢𝗡 』\n\n${text}`
  Yumeko.sendText(yoi, txt, m)
  }
  reply('𝐒𝐞 𝐞𝐧𝐯𝐢𝐨 𝐥𝐚 𝐝𝐮𝐯𝐮𝐥𝐠𝐚𝐜𝐢𝐨𝐧 ✓')
  }
  break
case 'entrar': {
  if (!isOwner) return reply(mess.botOwner)
  if (!text) return reply(`𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix}entrar *𝐋𝐢𝐧𝐤 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*`)
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw reply('『❗』𝐋𝐢𝐧𝐤 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 𝐩𝐚𝐩𝐮...*')
  reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await Yumeko.groupAcceptInvite(result).then((res) => reply(mess.done)).catch((err) => reply('『❌』𝐇𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐞𝐧𝐭𝐫𝐚𝐫 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨, 𝐭𝐚𝐥 𝐯𝐞𝐳 𝐞𝐬𝐭𝐞 𝐥𝐥𝐞𝐧𝐨 𝐨 𝐦𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐨𝐧'))
  }
  break
case 'salirbot': {
  if (!isOwner) return reply(mess.botOwner)
  await Yumeko.groupLeave(m.chat).then((res) => reply('Me tengo que ir a jugar, hasta luego. ❤')).catch((err) => reply('『❌』𝐄𝐫𝐫𝐨𝐫 𝐚𝐥 𝐬𝐚𝐥𝐢𝐫 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨'))
  }
  break
case 'block': {
  if (!isOwner) return reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Yumeko.updateBlockStatus(users, 'block').then((res) => reply(mess.done)).catch((err) => reply('『❌』𝐏𝐞𝐫𝐝𝐨𝐧, 𝐡𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐝𝐞𝐬𝐜𝐨𝐧𝐨𝐜𝐢𝐝𝐨'))
  }
  break
case 'unblock': {
  if (!isOwner) return reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Yumeko.updateBlockStatus(users, 'unblock').then((res) => reply(mess.done)).catch((err) => reply('『❌』𝐏𝐞𝐫𝐝𝐨𝐧, 𝐡𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐝𝐞𝐬𝐜𝐨𝐧𝐨𝐜𝐢𝐝𝐨'))
  }
  break
case 'setppbot': {
  if (!isOwner) return reply(mess.botOwner)
  if (!quoted) throw reply(`*『❕』𝐄𝐧𝐯𝐢𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\n𝐩𝐚𝐫𝐚 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐦𝐢 𝐟𝐨𝐭𝐨 𝐝𝐞 𝐩𝐞𝐫𝐟𝐢𝐥*`)
  if (!/image/.test(mime)) throw reply(`*『❕』𝐄𝐧𝐯𝐢𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\n𝐩𝐚𝐫𝐚 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐦𝐢 𝐟𝐨𝐭𝐨 𝐝𝐞 𝐩𝐞𝐫𝐟𝐢𝐥*`)
  if (/webp/.test(mime)) throw reply(`*『❕』𝐄𝐧𝐯𝐢𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\n𝐩𝐚𝐫𝐚 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐦𝐢 𝐟𝐨𝐭𝐨 𝐝𝐞 𝐩𝐞𝐫𝐟𝐢𝐥*`)
  let media = await Yumeko.downloadAndSaveMediaMessage(quoted)
  await Yumeko.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  reply(mess.done)
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return reply(mess.botOwner)
  Yumeko.public = true
  reply('𝗠𝗢𝗗𝗢 𝗣𝗨𝗕𝗟𝗜𝗖𝗢')
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return reply(mess.botOwner)
  Yumeko.self = false
  reply('𝗠𝗢𝗗𝗢 𝗣𝗥𝗜𝗩𝗔𝗗𝗢')
  }
  break
case 'eval': {
  if (!isOwner && !m.key.fromMe) return reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
  reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  reply(String(e))
  }
  }
  break

//≪━─━─━─〚 𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎 〛─━─━─━≫\\
case 'antienlace':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antilink) return reply(`      _*〚❕〛𝐘𝐚 𝐞𝐬𝐭𝐚𝐛𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨*_`)
  db.chats[m.chat].antilink = true
  reply(`    _*『❕』𝐒𝐞 𝐚𝐜𝐭𝐢𝐯𝐨 𝐞𝐥 𝐚𝐧𝐭𝐢𝐞𝐧𝐥𝐚𝐜𝐞 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨*_`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antilink) return reply(`     _*〚❕〛︎𝐘𝐚 𝐞𝐬𝐭𝐚𝐛𝐚 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨!!*_`)
  db.chats[m.chat].antilink = false
  reply(`    _*『❗』𝐄𝐥 𝐚𝐧𝐭𝐢𝐞𝐧𝐥𝐚𝐜𝐞 𝐬𝐞 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐨 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨*_`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: '✔️ 𝐀𝐜𝐭𝐢𝐯𝐚𝐫 ✔️' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: '✖️ 𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐫 ✖️' }, type: 1 }
  ]
  await Yumeko.sendButtonText(m.chat, buttonsantilink, `
╔═══❖•ೋ°❌️°ೋ•❖═══╗
║
║    ❐𝐌𝐎𝐃𝐎 𝐀𝐍𝐓𝐈𝐄𝐍𝐋𝐀𝐂𝐄❐
║  
║𝑷𝒂𝒓𝒂 𝒆𝒗𝒊𝒕𝒂𝒓 𝒒𝒖𝒆 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔 𝒆𝒏𝒗𝒊𝒆𝒏 
║𝑬𝒏𝒍𝒂𝒄𝒆𝒔 𝒅𝒆 𝒈𝒓𝒖𝒑𝒐𝒔, 𝒚 𝒍𝒐𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒆
║
╚═══❖•ೋ°🔗️°ೋ•❖═══╝`, m)
  }
  break
case 'linkgrupo': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  let response = await Yumeko.groupInviteCode(m.chat)
  Yumeko.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n𝐋𝐢𝐧𝐤 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
case 'reestablecerlink': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  await Yumeko.groupRevokeInvite(from)
  reply(mess.done)
  }
  break
case 'sacar': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('『❗』𝐌𝐚𝐫𝐜𝐚 𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐩𝐚𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Yumeko.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(mess.done)).catch((err) => reply(`『❌』𝐄𝐫𝐫𝐨𝐫, 𝐧𝐨 𝐬𝐞 𝐩𝐮𝐞𝐝𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨, 𝐭𝐚𝐳 𝐯𝐞𝐳 𝐲𝐚 𝐞𝐬𝐭𝐚𝐛𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨...`))
  }
  break
case 'agg': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('『❗』𝐏𝐨𝐧 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐩𝐚𝐫𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐫')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Yumeko.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(mess.done)).catch((err) => reply(`『❗』𝐄𝐫𝐫𝐨𝐫, 𝐧𝐨 𝐬𝐞 𝐩𝐮𝐝𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫, 𝐭𝐚𝐥 𝐯𝐞𝐳 𝐬𝐚𝐥𝐢𝐨 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐨 𝐭𝐢𝐞𝐧𝐞 𝐬𝐮 𝐜𝐮𝐞𝐧𝐭𝐚 𝐞𝐧 𝐩𝐫𝐢𝐯𝐚𝐝𝐨`))
  }
  break
case 'daradm': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('『❕』𝐌𝐚𝐫𝐜𝐚 𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐪𝐮𝐢𝐞𝐧 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐝𝐚𝐫 𝐚𝐝𝐦𝐢𝐧')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Yumeko.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(mess.done)).catch((err) => reply(`『❌』𝐏𝐞𝐫𝐝𝐨𝐧, 𝐡𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐢𝐧𝐞𝐬𝐩𝐞𝐫𝐚𝐝𝐨`))
  }
  break
case 'quitaradm': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('『❗』𝐌𝐚𝐫𝐜𝐚 𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐪𝐮𝐢𝐞𝐧 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐪𝐮𝐢𝐭𝐚𝐫 𝐚𝐝𝐦𝐢𝐧')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Yumeko.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(mess.done)).catch((err) => reply(`『❌』𝐏𝐞𝐫𝐝𝐨𝐧, 𝐡𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐢𝐧𝐞𝐬𝐩𝐞𝐫𝐚𝐝𝐨`))
  }
  break
case 'nombregrupo': case 'setsubject': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (!text) throw reply(`𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix}nombregrupo *𝐍𝐮𝐞𝐯𝐨 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*`)
  await Yumeko.groupUpdateSubject(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(`『❌』𝐏𝐞𝐫𝐝𝐨𝐧, 𝐡𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐢𝐧𝐞𝐬𝐩𝐞𝐫𝐚𝐝𝐨`))
  }
  break
case 'setdesc': case 'descgrupo': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (!text) throw reply(`𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix}descgrupo *𝐍𝐮𝐞𝐯𝐚 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*`)
  await Yumeko.groupUpdateDescription(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(`『❌』𝐏𝐞𝐫𝐝𝐨𝐧, 𝐡𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐢𝐧𝐞𝐬𝐩𝐞𝐫𝐚𝐝𝐨`))
  }
  break
case 'fotogrupo': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins) return reply(mess.admin)
  if (!quoted) return reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨* ${prefix + command}* \n𝐩𝐚𝐫𝐚 𝐥𝐚 𝐧𝐮𝐞𝐯𝐚 𝐟𝐨𝐭𝐨 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨`)
  if (!/image/.test(mime)) return reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨* ${prefix + command}* \n𝐩𝐚𝐫𝐚 𝐥𝐚 𝐧𝐮𝐞𝐯𝐚 𝐟𝐨𝐭𝐨 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨`)
  if (/webp/.test(mime)) return reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨* ${prefix + command}* \n𝐩𝐚𝐫𝐚 𝐥𝐚 𝐧𝐮𝐞𝐯𝐚 𝐟𝐨𝐭𝐨 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨`)
  let media = await Yumeko.downloadAndSaveMediaMessage(quoted)
  await Yumeko.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  reply(mess.done)
  }
  break
case 'tagall': case 'marcar': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
let teks = `♦️════•❁ 𝐌𝐀𝐑𝐂𝐀𝐑 𝐀 𝐓𝐎𝐃𝐎𝐒 ❁•════♦️
 
❐▷ *𝐌𝐞𝐧𝐬𝐚𝐣𝐞 : ${text ? text : 'Aciven grupo!!!'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  Yumeko.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: sello })
  }
  break
case 'aviso': case 'hidetag': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  Yumeko.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: sello })
  }
  break
case 'grupoinfo': case 'infogrupo':
try{
 var pic = await Yumeko.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://coolthemestores.com/wp-content/uploads/2021/06/yumeko-wallpaper-background.jpg'
  }
let ingfo = `
   *『 𝗜𝗡𝗙𝗢 𝗚𝗥𝗨𝗣𝗢 』*
 *𝐍𝐨𝐦𝐛𝐫𝐞:* ${groupName}
 *𝐈𝐃 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 :* ${m.chat}
 *𝐅𝐞𝐜𝐡𝐚 𝐝𝐞 𝐜𝐫𝐞𝐚𝐜𝐢𝐨𝐧:* ${moment(`${groupMetadata.creation}` * 1000).tz('America/Buenos_Aires').format('DD/MM/YYYY HH:mm:ss')}
 *𝐂𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨:* @${groupMetadata.owner.split('@')[0]}
 *𝐍𝐮𝐧𝐞𝐫𝐨 𝐝𝐞 𝐚𝐝𝐦𝐢𝐧𝐬:* ${groupAdmins.length}
 *𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐚𝐝𝐦𝐢𝐧𝐬:* ${participants.length}
 *𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧:* 
 ${groupMetadata.desc}`
ds = await getBuffer(pic)
Yumeko.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
case 'group': case 'grupo': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (args[0] === 'close'){
  await Yumeko.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*『🔒𝐆𝐑𝐔𝐏𝐎 𝐂𝐄𝐑𝐑𝐀𝐃𝐎🔒』*`)).catch((err) => reply('Error, el grupo ya estaba cerrado.'))
  } else if (args[0] === 'open'){
  await Yumeko.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*『🔓𝐆𝐑𝐔𝐏𝐎 𝐀𝐁𝐈𝐄𝐑𝐓𝐎🔓』*`)).catch((err) => reply('Error el grupo ya estaba abierto.'))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: '𝐀𝐛𝐫𝐢𝐫 🔓' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: '𝐂𝐞𝐫𝐫𝐚𝐫 🔒' }, type: 1 }
  ]
  await Yumeko.sendButtonText(m.chat, buttonsgroup, `
  ╔═══❖•ೋ°♦️°ೋ•❖═══╗
  ║
  ║   𝗔𝗕𝗥𝗜𝗥 𝗢 𝗖𝗘𝗥𝗥𝗔𝗥 𝗚𝗥𝗨𝗣𝗢?
  ╚═══❖•ೋ°♦️°ೋ•❖═══╝`, sello)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isAdmins) return reply(mess.admin)
  if (args[0] === 'open'){
  await Yumeko.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨, 𝐚𝐡𝐨𝐫𝐚 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 𝐦𝐢𝐞𝐦𝐛𝐫𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐧 𝐞𝐝𝐢𝐭𝐚𝐫 𝐥𝐚 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 ✓`)).catch((err) => reply(`『❌』𝐄𝐫𝐫𝐨𝐫, 𝐞𝐥 𝐦𝐨𝐝𝐨 𝐞𝐝𝐢𝐜𝐢𝐨𝐧 𝐲𝐚 𝐞𝐬𝐭𝐚𝐛𝐚 𝐚𝐛𝐢𝐞𝐫𝐭𝐨`))
  } else if (args[0] === 'close'){
  await Yumeko.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨, 𝐚𝐡𝐨𝐫𝐚 𝐬𝐨𝐥𝐨 𝐥𝐨𝐬 𝐚𝐝𝐦𝐢𝐧𝐬 𝐩𝐮𝐞𝐝𝐞 𝐞𝐝𝐢𝐭𝐚𝐫 𝐥𝐚 𝐢𝐧𝐟𝐨 ✓`)).catch((err) => reply(`『❌』𝐄𝐫𝐫𝐨𝐫, 𝐞𝐥 𝐦𝐨𝐝𝐨 𝐞𝐝𝐢𝐜𝐢𝐨𝐧 𝐲𝐚 𝐞𝐬𝐭𝐚𝐛𝐚 𝐜𝐞𝐫𝐫𝐚𝐝𝐨`))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: '𝐀𝐜𝐭𝐢𝐯𝐚𝐫 ✍' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: '𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐫 🔒' }, type: 1 }
  ]
  await Yumeko.sendButtonText(m.chat, buttons, `
╔═══❖•ೋ°♦️°ೋ•❖═══╗
║
║ ❐𝐌𝐎𝐃𝐎 𝐃𝐄 𝐄𝐃𝐈𝐂𝐈𝐎𝐍
║
║𝑷𝒂𝒓𝒂 𝒒𝒖𝒆 𝒍𝒐𝒔 𝒎𝒊𝒆𝒎𝒃𝒓𝒐𝒔 𝒑𝒖𝒆𝒅𝒂𝒏
║𝒆𝒅𝒊𝒕𝒂𝒓 𝒍𝒂 𝒊𝒏𝒇𝒐 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐
╚═══❖•ೋ°♦️°ೋ•❖═══╝`, `𝑬𝒍𝒊𝒋𝒆 𝒆𝒍 𝒎𝒐𝒅𝒐 𝒄𝒐𝒏 𝒍𝒐𝒔 𝒃𝒐𝒕𝒐𝒏𝒆𝒔`, sello)
  }
  }
  break

//≪━─━─━─〚 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 〛─━─━─━≫\\
case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (!quoted) return reply(`
╔═══❖•ೋ° °ೋ•❖═══╗
║𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧/𝐯𝐢𝐝𝐞𝐨
║『❗ *𝐒𝐨𝐥𝐨 10 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬 𝐝𝐞 𝐯𝐢𝐝𝐞𝐨*❗ 』
║
║𝐂𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${prefix + command}
║
╚═══❖•ೋ° °ೋ•❖═══╝`)
  reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await Yumeko.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await Yumeko.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw reply(`
╔═══❖•ೋ° °ೋ•❖═══╗
║𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧/𝐯𝐢𝐝𝐞𝐨
║『❗ *𝐒𝐨𝐥𝐨 10 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬 𝐝𝐞 𝐯𝐢𝐝𝐞𝐨*❗ 』
║
║𝐂𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${prefix + command}
║
╚═══❖•ೋ° °ೋ•❖═══╝`)
  }
  }
  break

case 'emojimix': {
if (!text) throw reply(`*『❕』𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix + command} 🥳+🤣*`)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Yumeko.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await Kenisawa.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Yumeko.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`『❕』𝐌𝐚𝐫𝐜𝐚 𝐮𝐧 𝐚𝐮𝐝𝐢𝐨 𝐩𝐚𝐫𝐚 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐬𝐮 𝐞𝐟𝐞𝐜𝐭𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨: *${prefix + command}*`)
                } catch (e) {
                reply('ERROR!')
                }
                break

//≪━─━─━─〚 𝐒𝐀𝐂𝐀𝐑 𝐁𝐆 〛─━─━─━≫\\
case 'imagenobg': case 'removebg': case 'remove-bg': {
	if (!quoted) throw reply(`_『❗』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐟𝐨𝐭𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}_`)
	if (!/image/.test(mime)) throw reply(`_『❗』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐟𝐨𝐭𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}_`)
	if (/webp/.test(mime)) throw reply(`_『❗』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐟𝐨𝐭𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}_`)
	let remobg = require('remove.bg')
	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	hmm = await './src/remobg-' + getRandom('')
	localFile = await Yumeko.downloadAndSaveMediaMessage(quoted, hmm)
	console.log(localFile)
	outputFile = await './src/hremo-' + getRandom('.png')
	reply(mess.wait)
	try {
		remobg.removeBackgroundFromImageFile({
			path: localFile,
			apiKey: apinobg,
			size: "regular",
			type: "auto",
			scale: "100%",
			outputFile
		}).then(async (result) => {
			//    console.log(result)
			console.log(`𝐀𝐫𝐜𝐡𝐢𝐯𝐨 𝐠𝐮𝐚𝐫𝐝𝐚𝐝𝐨 𝐜𝐨𝐦𝐨 ${outputFile}`);
			await Yumeko.sendMessage(m.chat, {
				image: fs.readFileSync(outputFile),
				caption: "𝐋𝐢𝐬𝐭𝐨 ✔️"
			}, {
				quoted: m
			})
			const base64img = result.base64img;
			await sleep(7000)
			await fs.unlinkSync(localFile)
			await fs.unlinkSync(outputFile)
		}).catch((errors) => {
			console.log(JSON.stringify(errors));
		});
	} catch (err) {
		reply(util.format(err))
		await fs.unlinkSync(localFile)
	}
}
break

case 'toimage': case 'toimg': {
  if (!quoted) throw reply(`『❕』𝐌𝐚𝐫𝐜𝐚𝐫 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *${prefix + command}*`)
  if (!/webp/.test(mime)) return reply(`『❕』𝐌𝐚𝐫𝐜𝐚𝐫 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *${prefix + command}*`)
  reply(mess.wait)
  let media = await Yumeko.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  Yumeko.sendMessage(m.chat, { image: buffer }, { quoted: sello })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!quoted) throw reply(`『❕』𝐌𝐚𝐫𝐜𝐚𝐫 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐚𝐧𝐢𝐦𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *${prefix + command}*`)
  if (!/webp/.test(mime)) throw reply(`『❕』𝐌𝐚𝐫𝐜𝐚𝐫 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐚𝐧𝐢𝐦𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *${prefix + command}*`)
  reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await Yumeko.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await Yumeko.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨 𝐚 𝐕𝐢𝐝𝐞𝐨 ✔️' } }, { quoted: sello })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}*`)
  if (!quoted) throw reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}*`)
  reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  Yumeko.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (/document/.test(mime)) throw reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}*`)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}*`)
  if (!quoted) throw reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}*`)
  reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  Yumeko.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `𝐁𝐲 ${Yumeko.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐚𝐮𝐝𝐢𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}*`)
  if (!quoted) throw reply(`*『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐚𝐮𝐝𝐢𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix + command}*`)
  reply(mess.wait)
  let media = await quoted.download()
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  Yumeko.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  }
  break
case 'togif': {
  if (!quoted) throw reply(`『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐚𝐧𝐢𝐦𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *${prefix + command}*`)
  if (!/webp/.test(mime)) throw reply(`『❕』𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐚𝐧𝐢𝐦𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *${prefix + command}*`)
  reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await Yumeko.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await Yumeko.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐚 𝐆𝐢𝐟 ✔️' }, gifPlayback: true }, { quoted: sello })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await Yumeko.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  reply(`${anu.url}`)
  }
  await fs.unlinkSync(media)
  }
  break

//≪━─━─━─〚 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒 〛─━─━─━≫\\
case 'pinterest': {
  if (!text) return reply(`𝐐𝐮𝐞 𝐞𝐬 𝐥𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐛𝐮𝐬𝐜𝐚𝐫 𝐞𝐧 ${command}?\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : *${prefix + command} yumeko icons*`)
  reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: '〚⏤͟͟͞͞➡️ 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄〛'}, type: 1}]
  Yumeko.sendMessage(m.chat, { image: { url: result }, caption: '𝐋𝐢𝐧𝐤 𝐝𝐞 𝐥𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 : '+result, buttons: buttonspinterest }, { quoted: sello })
  }
  break
  case 'fondo': {
if (!text) throw reply(`*𝐄𝐣𝐞𝐦𝐩𝐥𝐨:* ${prefix}fondo *𝐍𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐟𝐨𝐧𝐝𝐨*`)
reply(mess.wait)
let fondohd = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/downloader/wallpaperflare?query=${text}&apikey=APIKEY`)
images = fondohd.result[Math.floor(Math.random() * fondohd.result.length)]
Kenisa = `
╔═══❖•ೋ°♦°ೋ•❖═══╗
║     _*〚𝐅𝐎𝐍𝐃𝐎𝐒〛*_ 
║ *🥀𝐓𝐢𝐭𝐮𝐥𝐨:*
║${text}
║ 
╚═══❖•ೋ°♠°ೋ•❖═══╝`
sendBimgT(m.chat, `${images}`, Kenisa, "Aqui esta su fondo", [{index: 1, urlButton: {displayText: '𝙻𝚒𝚗𝚔 𝚍𝚎 𝚕𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 『🔗』', url: ` ${images}`}},
{index: 2, quickReplyButton: {displayText: '〚➡️〛', id: `${prefix}fondo ${text}`}}], m)
}
break
case 'wallpaper': {
  if (!text) return reply(`𝐐𝐮𝐞 𝐞𝐬 𝐥𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐛𝐮𝐬𝐜𝐚𝐫 𝐞𝐧 ${command}?\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : *${prefix + command} yumeko icons*`)
  reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: '〚⏤͟͟͞͞➡️ 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄〛'}, type: 1}]
  Yumeko.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `𝐋𝐢𝐧𝐤 𝐝𝐞 𝐥𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: sello })
  }
  break
case 'wiki':
case 'wikipedia':
if (!text) return reply(`『❕』𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix}wiki anime`)
reply(`🔍 𝐁𝐮𝐬𝐜𝐚𝐧𝐝𝐨 𝐬𝐨𝐛𝐫𝐞 ${text} 🔎`)
wikiSearch(text).then ( data => {
var caption = `*𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀* : ${text}\n*𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍* : ${data[0].wiki}`
Yumeko.sendMessage(m.chat, {caption: caption, image: {url: data[0].thumb}}, {quoted: sello})
})
break
case 'wikimedia': {
  if (!text) throw reply(`『❕』𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix}wikimedia Anime`)
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: '〚⏤͟͟͞͞➡️ 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄〛'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `
╔═══❖•ೋ°♦°ೋ•❖═══╗
║    _*〚𝐖𝐈𝐊𝐈𝐌𝐄𝐃𝐈𝐀〛*_ 
║
║ *🥀𝐓𝐢𝐭𝐮𝐥𝐨:*
║${result.title}
║ *🧾𝐃𝐞𝐭𝐚𝐥𝐥𝐞𝐬:*
║${result.source}
║ *🔗𝐋𝐢𝐧𝐤 𝐢𝐦𝐚𝐠𝐞𝐧:*
║${result.image}
╚═══❖•ೋ°♠°ೋ•❖═══╝`,
  footer: `♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦`,
  buttons: buttons,
  headerType: 4
  }
  Yumeko.sendMessage(m.chat, buttonMessage, { quoted: sello })
  }
  break

//≪━─━─━─〚 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐃𝐎𝐑 〛─━─━─━≫\\
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/y2mate')
  if (!q) return reply(`『❕』𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : ${command} *𝐋𝐢𝐧𝐤 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞*`)
  if (!isUrl(q)) return reply('𝐋𝐢𝐧𝐤 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 ❎')
  if (!q.includes('youtube')/('youtu.be')) return reply('𝐋𝐢𝐧𝐤 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 ❎')
  await reply(mess.wait)
  let quality = args[1] ? args[1] : '480p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return reply('Este archivo es grande  : '+media.dl_link)
  var caption = `
╔═══❖•ೋ°♦ °ೋ•❖═══╗
║     *❐𝐕𝐈𝐃𝐄𝐎 𝐏𝐋𝐀𝐘❐*
╟━━━━━━━━━━━━━━━➢
║
║ *➭📍𝚃𝚒𝚝𝚞𝚕𝚘:*
║${media.title}
║ *➭📥𝙿𝚎𝚜𝚘:*
║${media.filesizeF}
║ *➭🌌𝚁𝚎𝚜𝚘𝚕𝚞𝚌𝚒𝚘𝚗:*
║ ${args[1] || '480p'}
║ *➭🔗𝙻𝚒𝚗𝚔:*
║${isUrl(text)}
╚═══❖•ೋ°🎥°ೋ•❖═══╝`
  Yumeko.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: sello })
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  let { yta } = require('../lib/y2mate')
  if (!q) return reply(`『❕』𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : ${command} *𝐋𝐢𝐧𝐤 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞*`)
  if (!isUrl(q)) return reply('𝐋𝐢𝐧𝐤 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 ❎')
  if (!q.includes('youtube')/('youtu.be')) return reply('𝐋𝐢𝐧𝐤 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 ❎')
  await reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return reply('Este archivo es muy grande  : '+media.dl_link)
  var caption = `
╔═══❖•ೋ°♦ °ೋ•❖═══╗
║     *❐𝐀𝐔𝐃𝐈𝐎 𝐏𝐋𝐀𝐘❐*
╟━━━━━━━━━━━━━━➢
║
║ *➭📍𝚃𝚒𝚝𝚞𝚕𝚘:*
║${media.title}
║ *➭📥𝙿𝚎𝚜𝚘:*
║${media.filesizeF}
║ *➭🌌𝚁𝚎𝚜𝚘𝚕𝚞𝚌𝚒𝚘𝚗:*
║ ${args[1] || '128kbps'}
║ *➭🔗𝙻𝚒𝚗𝚔:*
║${isUrl(text)}
╚═══❖•ೋ°🎵°ೋ•❖═══╝`
  Yumeko.sendImage(m.chat, media.thumb, caption, m)
  Yumeko.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: sello })
  }
  break
case 'ytplay': case 'playt': {
  let { yta } = require('../lib/y2mate')
  if (!text) return reply(`『❕』𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : ${command} *𝐋𝐢𝐧𝐤 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞*`)
  if (!isUrl(q)) return reply('𝐋𝐢𝐧𝐤 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 ❎')
  if (!q.includes('youtube')/('youtu.be')) return reply('𝐋𝐢𝐧𝐤 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 ❎')
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return reply('Este archivo es muy grande  : '+media.dl_link)
  var caption = `
╔═══❖•ೋ°♦ °ೋ•❖═══╗
║     *❐ℙ𝕃𝔸𝕐 𝕐𝕆𝕌𝕋𝕌𝔹𝔼❐*
╟━━━━━━━━━━━━━━➢
║
║ *➭📍𝚃𝚒𝚝𝚞𝚕𝚘:*
║${media.title}
║ *➭📥𝙿𝚎𝚜𝚘:*
║${media.filesizeF}
║ *➭🔗𝙻𝚒𝚗𝚔:*
║${isUrl(text)}
╚═══❖•ೋ°🎵°ೋ•❖═══╝`
sendBimgT(m.chat, `${media.thumb}`, caption, "⬇️𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐚𝐛𝐚𝐣𝐨⬇️", [{index: 1, urlButton: {displayText: '𝐋𝐢𝐧𝐤 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨', url: `${text}`}},
 {index: 2, urlButton: {displayText: '𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭', url: `https://wa.me/549386539215`}},
{index: 2, quickReplyButton: {displayText: '𝐕𝐢𝐝𝐞𝐨/480𝒑', id: `ytmp4 ${text}`}},
{index: 2, quickReplyButton: {displayText: '𝐀𝐮𝐝𝐢𝐨/1280𝒌𝒃𝒑𝒔', id: `ytmp3 ${text}`}},
{index: 3, quickReplyButton: {displayText: '𝐕𝐢𝐝𝐞𝐨 𝐇𝐃/1080𝒑', id: `ytdocumento ${text}`}}], m)
  }
  break
case 'ytdocumento': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `-`
let calidad = args[1] ? args[1] : '720p'
let media = await ytv(text, calidad)
if (media.filesize >= 999999) return reply(' 𝐄𝐥 𝐭𝐚𝐦𝐚ñ𝐨 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐞𝐬 𝐦𝐮𝐲 𝐠𝐫𝐚𝐧𝐝𝐞 '+util.format(media))
Yumeko.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`}, { quoted: sello })
}
break
case 'yts': case 'ytsearch': {
  reply(mess.wait)
  if (!text) throw reply(`*『❕』ᴇᴊᴇᴍᴘʟᴏ: ${prefix + command} stay whit me*`)
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '『🔎 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀 𝐃𝐄 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 🔍』\n\n𝚁𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜 𝚜𝚘𝚋𝚛𝚎 '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `
❒➤ 𝐍𝐮𝐦𝐞𝐫𝐨: ${no++}
❒➤ 𝐓𝐢𝐩𝐨: ${i.type}
❒➤ 𝐈𝐃 𝐕𝐢𝐝𝐞𝐨: ${i.videoId}
❒➤ 𝐓𝐢𝐭𝐮𝐥𝐨: ${i.title}
❒➤ 𝐕𝐢𝐬𝐭𝐚𝐬: ${i.views}
❒➤ 𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧: ${i.timestamp}
❒➤ 𝐒𝐞 𝐬𝐮𝐛𝐢𝐨 𝐡𝐚𝐜𝐞: ${i.ago}
❒➤ 𝐂𝐚𝐧𝐚𝐥: ${i.author.name}
❒➤ 𝐋𝐢𝐧𝐤: ${i.url}

══════◄••♦️••►══════

`
  }
  Yumeko.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: sello })
  }
  break
        case 'play':
  const srchh = (text)
               try {
               var aramas = await yts(srchh);
               } catch {
               return await Yumeko.sendMessage(m.chat, {text: '『❕』ᴇᴊᴇᴍᴘʟᴏ: ᴘʟᴀʏ ᴏᴘᴇɴɪɴɢ ɴᴀʀᴜᴛᴏ'}, {quoted: m })
               }
					const objs = []
					for (let x of aramas.all) {
						let data = {
							rowId: `${prefix}ytplay `+ x.url,
							title: x.title,
							description: `${x.author.name} | ${x.timestamp}`
						}
						objs.push(data)
					}

const listMessage = {
  text: `*𝐌𝐮𝐬𝐢𝐜𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧𝐚𝐝𝐚 𝐜𝐨𝐧:* ${text}`,
  footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 *𝐄𝐧𝐯𝐢𝐚𝐫*',
  title: "『 *ℙ𝕃𝔸𝕐 𝕐𝕆𝕌𝕋𝕌𝔹𝔼* 』",
  buttonText: "*〚♦ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 ♦〛*",
  sections: [
								{
									title: "🅡🅔🅢🅤🅛🅣🅐🅓🅞🅢",
									rows: objs
								}
							]
}
sendMsg = await Yumeko.sendMessage(m.chat, listMessage, {quoted: sello})
break
case 'play2': case 'play3': {
if (!text) throw reply(`*『❕』ᴇᴊᴇᴍᴘʟᴏ: ${prefix + command}  ᴄᴏʀᴀᴢᴏɴ ᴇɴᴄᴀɴᴛᴀᴅᴏ*`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  ngen = `
╓═══════ஜ♦️ஜ═══════╖
║    *❐𝐏𝐋𝐀𝐘 𝐘𝐎𝐔𝐓𝐔𝐁𝐄❐*
╟━━━━━━━━━━━━━━━━━━➢
║💠 *❍▷𝚃𝚒𝚝𝚞𝚕𝚘:*
║${anu.title}
║🕑 *❍▷𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗:*
║${anu.timestamp}
║👀 *❍▷𝚅𝚒𝚜𝚝𝚊𝚜:*
║${anu.views}
║🌀 *❍▷𝙸𝚍 𝚟𝚒𝚍𝚎𝚘:*
║${anu.videoId}
║📆 *❍▷𝚂𝚎 𝚜𝚞𝚋𝚒𝚘 𝚑𝚊𝚌𝚎:*
║${anu.ago}
║👤 *❍▷𝙲𝚊𝚗𝚊𝚕:*
║${anu.author.name}
╟━━━━━━━━━━━━━━━━━━➢
║❍♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦❍
╙═══════ஜ♠️ஜ═══════╜
`
sendBimgT(m.chat, `${anu.thumbnail}`, ngen, "⬇️𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐚𝐛𝐚𝐣𝐨⬇️", [{index: 1, urlButton: {displayText: '𝐋𝐢𝐧𝐤 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨', url: `${anu.url}`}},
 {index: 2, urlButton: {displayText: '𝐂𝐚𝐧𝐚𝐥 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨', url: `${anu.author.url}`}},
{index: 2, quickReplyButton: {displayText: '𝐕𝐢𝐝𝐞𝐨/480𝒑', id: `ytmp4 ${anu.url}`}},
{index: 2, quickReplyButton: {displayText: '𝐀𝐮𝐝𝐢𝐨/1280𝒌𝒃𝒑𝒔', id: `ytmp3 ${anu.url}`}},
{index: 3, quickReplyButton: {displayText: '𝐕𝐢𝐝𝐞𝐨 𝐇𝐃/1080𝒑', id: `ytdocumento ${anu.url}`}}], m)
}
break
case 'mediafire':
if (!text) return reply(`『❌』𝐄𝐣𝐞𝐦𝐩𝐥𝐨 ${command} *𝐋𝐢𝐧𝐤 𝐝𝐞 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞*`)
if (!isUrl(text)) return reply(`『❌』𝐄𝐫𝐫𝐨𝐫, 𝐞𝐬𝐨 𝐧𝐨 𝐞𝐬 𝐮𝐧 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 𝐯𝐚𝐥𝐢𝐝𝐨`)
if (!text.includes('mediafire')) return reply(`『❌』𝐄𝐫𝐫𝐨𝐫, 𝐞𝐬𝐨 𝐧𝐨 𝐞𝐬 𝐮𝐧 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 𝐯𝐚𝐥𝐢𝐝𝐨`)
reply(mess.wait)
var data = await fetchJson(`https://docs-Izumi.herokuapp.com/api/mediafire?url=${text}`)
conn.sendMessage(m.chat, { document: { url: data.url }, fileName: `${data.filename}`, mimetype: 'zip' }, { quoted: sello })
reply(`𝑺𝒆 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒐 𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒄𝒐𝒎𝒐 𝒛𝒊𝒑, 𝒔𝒊 𝒆𝒓𝒂 𝒖𝒏 𝒂𝒑𝒌 𝒐 𝒑𝒅𝒇 𝒆𝒕𝒄... \n𝑷𝒖𝒆𝒅𝒆𝒔 𝒓𝒆𝒏𝒐𝒎𝒃𝒓𝒂𝒓𝒍𝒐`)
break
//≪━─━─━─〚 𝐉𝐔𝐄𝐆𝐎𝐒 〛─━─━─━≫\\
case 'say': case 'tts':
if (!text) return reply(`Ejemplo ${command} Hola mundo`)
Yumeko.sendMessage(m.chat, { audio: {url : `https://hadi-api.herokuapp.com/api/tts?text=${text}&language=es`}, mimetype: 'audio/mp4', ptt: true}, {quoted: sello})
break
case 'yumeko':
case 'simi':
var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
Yumeko.sendMessage(m.chat, { text: cimcimi.success}, {quoted: sello})
break
case 'dado':
bla = await getBuffer(`https://supra-api.herokuapp.com/api/dadu?apikey=supraz`)
Yumeko.sendMessage(m.chat, {sticker: bla}, {quoted: sello})
buttons = [
  {buttonId: `${prefix}dado`, buttonText: {displayText: '🎲「 Jugar de nuevo 」🎲'}, type: 1},
  {buttonId: `${prefix}sundado`, buttonText: {displayText: '🎲「 No jugar 」🎲'}, type: 1}]
buttonMessages = {
    text: "Estas jugando el juego del dado, si quieres seguir adelante toca el boton de abajo o si no quieres también hay un boton para eso: ",
    footer: '「 Yumeko - MD 」',
    buttons: buttons,
    headerType: 1
}
sendMsg =  Yumeko.sendMessage(m.chat, buttonMessages, {quoted: sello}) 
break
case 'sundado':{
reply('Esta bien hasta la próxima.')
}
break

case 'pareja': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `◤── ♦️ ──『💋️』── ♦️ ──◥\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n _Sera la pareja?_ 💖👀\n◣── ♦️ ──『❤️』── ♦️ ──◢`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
]
await Yumeko.sendButtonText(m.chat, buttons, jawab, Yumeko.user.name, m, {mentions: ments})
}
break
case 'beso': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let yo = m.sender
let otro = member[Math.floor(Math.random() * member.length)]
let jawab = `◤── ♦️ ──『❤️』── ♦️ ──◥\n@${yo.split('@')[0]}\n _le dio un lindo beso a️_ \n@${otro.split('@')[0]}\n◣── ♦️ ──『❤️』── ♦️ ──◢️`
let menst = [yo, otro]
let buttons = [
{ buttonId: '❤️congrats', buttonText: { displayText: '❤️' }, type: 1 }
]
await Yumeko.sendButtonText(m.chat, buttons, jawab, Yumeko.user.name, sello, {mentions: menst})
}
break
//≪━─━─━─〚 𝐋𝐎𝐆𝐎𝐒 〛─━─━─━≫\\
case 'glitch':
  if (!text) return reply(`Ejemplo ${command} <Texto1> <Texto2>`)
  reply("Espere un poco, creando su logo...")
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?text=${args[1]}&text2=${args[2]}`}}, {quoted: sello})

break
case 'flaming':
  if (!text) return reply(`Ejemplo ${command} <Texto>`)

Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?text=${text}`}}, {quoted: sello})

break
case 'shadow':
  if (!text) return reply(`Ejemplo ${command} <Texto1>`)

Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/shadow-sky?text=${text}`}}, {quoted: sello})

break
case 'goldenroses':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/golden-roses?text=${text}`}}, {quoted: sello})
break
case 'youtubegold': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/maker/goldbutton?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'youtubesilver': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/maker/silverbutton?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'thunder': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/thunder2?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'neonlight': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/neon-light?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'neondevil': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/neon-devil?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'hallowen': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/hallowen-text?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'skytext': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/sky-text?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'holografic': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/holograpic?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'grafity': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/grafity-text?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'christmas': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/christmas?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'luxury': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/luxury?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'harrypotter': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/harry-potter?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'brokenglass':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/broken-glass?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'artpapper':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/art-papper?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'watercolor':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/water-color?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'glossymaker':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/glossy?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'multicolor':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/multi-color?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'gluetext': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/glue-text?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'jokerlogo':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/joker-logo?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'ninjalogo':
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/ninja-logo?text=${text1}&text2=${text2}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'avengers': 
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/avengers-logo?text=${text1}&text2=${text2}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'pornhub': 
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/textpro/pornhub?text=${text1}&text2=${text2}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'mascotbear': 
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${text}`}}, {quoted: sello})
break
case 'wolftext':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/wolf-metal?text=${text}`}}, {quoted: sello})
break
case 'cup':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/teks-cup?text=${text}`}}, {quoted: sello})
break
case 'romantic':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?text=${text}`}}, {quoted: sello})
break
case 'writetext':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/burn-paper?text=${text}`}}, {quoted: sello})
break
case 'cup2':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/funny-cup?text=${text}`}}, {quoted: sello})
break
case 'lovetext':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/love-messages?text=${text}`}}, {quoted: sello})
break
case 'lovetext2':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/romantic-double?text=${text}`}}, {quoted: sello})
break
case 'undergrass':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/under-grass?text=${text}`}}, {quoted: sello})
break
case 'coffecup':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?text=${text}`}}, {quoted: sello})
break
case 'woodheart':
if (!text) return reply(`Ejemplo ${command} <Texto1>`)
Yumeko.sendMessage(m.chat, {caption: "© 𝒀𝒖𝒎𝒆𝒌𝒐 - 𝑴𝑫", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?text=${text}`}}, {quoted: sello})
break
//≪━─━─━─〚 𝐏𝐇𝐎𝐓𝐎 𝐎𝐗𝐘 〛─━─━─━≫\\
case 'army':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/photooxy/army?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'matrix':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/maker/matrix?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'butterfly': 
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/photooxy/butterfly?text={q}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
case 'burnpapper':
var data = await fetchJson(`https://kenisawa-apis.herokuapp.com/api/photooxy/burn-papper?text=${text}&apikey=Yuemko-v1-md`)
reply(mess.wait)
Yumeko.sendMessage(m.chat, {image: {url: data.result}}, {quoted: sello})
break
//≪━─━─━─〚 𝐀𝐍𝐈𝐌𝐄 〛─━─━─━≫\\
case 'waifu':case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':{
 let za = await fetchJson(`https:/\/\waifu.pics/api/sfw/${command}`)
let buttons = [
{
 buttonId: `${prefix + command}`, 
 buttonText: {
displayText: '〚⏤͟͟͞͞➡️ 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄〛'
}, type: 1},
]
let buttonMessage = {
image: { url: za.url },
caption: `╔═══❖•ೋ°♦°ೋ•❖═══╗\n║           *❐ ${command} ❐*\n╚═══❖•ೋ°♠°ೋ•❖═══╝`,
footer: `𝙿𝚛𝚎𝚌𝚒𝚘𝚗𝚊 𝚎𝚕 𝚋𝚘𝚝𝚘𝚗 𝚙𝚊𝚛𝚊 𝚘𝚝𝚛𝚊 𝚒𝚖𝚊𝚐𝚎𝚗`,
buttons: buttons,
headerType: 4
 }
 Yumeko.sendMessage(m.chat, buttonMessage, { quoted: sello })
}
 break
case 'loli': {
reply(mess.wait)
Kenisa = `
╓── ✦ ──『♦️』── ✦ ──╖
║
║        _*🌸 𝐋𝐎𝐋𝐈 🌺*_
╙── ✦ ──『♠』── ✦ ──╜`
sendBimgT(m.chat, `https://kenisawa-apis.herokuapp.com/api/wallpaper/loli?apikey=APIKEY`, Kenisa, "♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦", [{index: 1, urlButton: {displayText: '𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭', url: `https://wa.me/5493865392125`}},
{index: 2, quickReplyButton: {displayText: '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎 〚➡️〛', id: `${prefix}loli`}}], sello)
}
break
case 'cosplay': {
reply(mess.wait)
Kenisa = `
╓── ✦ ──『♦️』── ✦ ──╖
║
║        _*🌸 COSPLAY 🌺*_
╙── ✦ ──『♠』── ✦ ──╜`
sendBimgT(m.chat, `https://kenisawa-apis.herokuapp.com/api/random/cosplay?apikey=APIKEY`, Kenisa, "♦⏤͟͟͞͞𝒀𝑼𝑴𝜮𝑲𝚯-𝑩𝚯𝑻♦", [{index: 1, urlButton: {displayText: '𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭', url: `https://wa.me/5493865392125`}},
{index: 2, quickReplyButton: {displayText: '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎 〚➡️〛', id: `${prefix}cosplay`}}], sello)
}
break
case 'couplepp': case 'ppcp': {
reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Yumeko.sendMessage(m.chat, { image: { url: random.male }, caption: `      _*𝐏𝐚𝐫𝐚 𝐞𝐥 𝐜𝐡𝐢𝐜𝐨*_` }, { quoted: sello })
Yumeko.sendMessage(m.chat, { image: { url: random.female }, caption: `      _*𝐏𝐚𝐫𝐚 𝐥𝐚 𝐜𝐡𝐢𝐜𝐚*_` }, { quoted: sello })
}
break
//≪━─━─━─〚 𝐑𝐄𝐒𝐏𝐔𝐄𝐒𝐓𝐀𝐒 〛─━─━─━≫\\
case 'buenas': {
if (args[0] === 'tardes'){
const devsound = fs.readFileSync('./media/audios/buenastardes.mp3') //
Yumeko.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: loclive })
} else if (args[0] === 'noches'){
const devsound = fs.readFileSync('./media/audios/buenasnoches.mp3') //
Yumeko.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: carrito })
} 
}
break

case 'buenos': {
if (args[0] === 'días'){
const buenas = fs.readFileSync('./media/audios/buenosdias.mp3') //
Yumeko.sendMessage(m.chat, { audio: buenas, mimetype: 'audio/mp4', ptt: true, quoted: m })
} else if (args[0] === 'dias'){
const buenas = fs.readFileSync('./media/audios/buenosdias.mp3') //
Yumeko.sendMessage(m.chat, { audio: buenas, mimetype: 'audio/mp4', ptt: true, quoted: m })
} 
}
break

case 'so': {
const xxa = fs.readFileSync('./media/audios/que.mp3') //
Yumeko.sendMessage(m.chat, { audio: xxa, mimetype: 'audio/mp4', ptt: true, quoted: m })
}
break

case 'rra': {
const xxw = fs.readFileSync('./media/audios/so.mp3') //
Yumeko.sendMessage(m.chat, { audio: xxw, mimetype: 'audio/mp4', ptt: true, quoted: m })
}
break

case 'eres': {
const xx2 = fs.readFileSync('./media/audios/rra.mp3')
Yumeko.sendMessage(m.chat, { audio: xx2, mimetype: 'audio/mp4', ptt: true, quoted: m })
}
break

case 'bot':
enviar = fs.readFileSync('./media/sticker/tag.webp')
Yumeko.sendMessage(m.chat, {sticker:enviar}, {quoted:m})
break

case 'uwu':{
const uwu = fs.readFileSync('./media/audios/uwu.mp3') 
Yumeko.sendMessage(m.chat, { audio: uwu, mimetype: 'audio/mp4', ptt: true, quoted: m })
}
break

case 'ok':
enviar = fs.readFileSync('./media/sticker/ok.webp')
Yumeko.sendMessage(m.chat, {sticker:enviar}, {quoted:m})
break

case '😐':
enviar = fs.readFileSync('./media/sticker/😐.webp')
Yumeko.sendMessage(m.chat, {sticker:enviar}, {quoted:m})
break

case '🤨':
enviar = fs.readFileSync('./media/sticker/🤨.webp')
Yumeko.sendMessage(m.chat, {sticker:enviar}, {quoted:m})
break

case 'basado':
enviar = fs.readFileSync('./media/sticker/basado.webp')
Yumeko.sendMessage(m.chat, {sticker:enviar}, {quoted:m})
break

case 'puñito':
enviar = fs.readFileSync('./media/sticker/puñito.webp')
Yumeko.sendMessage(m.chat, {sticker:enviar}, {quoted:m})
break

case '😟':
enviar = fs.readFileSync('./media/sticker/😟.webp')
Yumeko.sendMessage(m.chat, {sticker:enviar}, {quoted:m})
break


//≪━─━─━─〚 𝐄𝐕𝐀𝐋 〛─━─━─━≫\\
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
  reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await reply(evaled)
  } catch (err) {
  m = String(err)
  await reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return reply(stdout)
  })
  }

  }
  } catch (err) {
    console.log("error en los comandos "+util.format(err))
//  reply(util.format(err)) Si quieres mostrar los errores en el chat
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Se actualizó ${__filename}`))
delete require.cache[file]
require(file)
})
