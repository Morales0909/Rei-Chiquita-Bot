import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = '' //Ejemplo: +584241836217
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['573007796996', 'Creador ♕', true],
   ['50557865603', 'Owner ♡', true],
   ['', 'Owner ☁️', true],
   ['', 'Owner 🍭', true],
   [''],
   [''],
   ['5219983694618']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚 𝐁𝐨𝐭-1.0'
global.namebot = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚 𝐁𝐨𝐭-1.0'
global.sessions = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚 𝐁𝐨𝐭 Session'
global.jadi = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '༻𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-1.0 𝐋𝐢𝐭𝐞༺'
global.botname = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐋𝐢𝐭𝐞'
global.wm = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐋𝐢𝐭𝐞 💙'
global.author = '𝕄𝕒𝕕𝕖 𝕓𝕪 : 𝐌𝐨𝐫𝐚𝐥𝐞𝐬 👻'
global.dev = '© ℙ𝕠𝕨𝕖𝕣𝕖𝕕 𝕓𝕪 𝐌𝐨𝐫𝐚𝐥𝐞𝐬'
global.textbot = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭 : Morales 👻'
global.namebot = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-1.0'
global.stickpack = `© ℙ𝕠𝕨𝕖𝕣𝕖𝕕 𝕓𝕪 𝐌𝐨𝐫𝐚𝐥𝐞𝐬`
global.titulowm = '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭'
global.titulowm2 = '♡𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚 𝐒𝐮𝐩𝐫𝐞𝐦𝐚𝐜𝐲♡'
global.titu = '©️ ℙ𝕠𝕨𝕖𝕣𝕖𝕕 𝕓𝕪 𝐂𝐫𝐨𝐰'𝐬 𝐂𝐥𝐮𝐛👾'
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.vs = '1.0.0'
global.namechannel = '𝑫𝒆𝒎𝒐𝒏-𝑩𝒐𝒕 - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍'
global.stickauth = `© 𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭 𝕓𝕪 𝐌𝐨𝐫𝐚𝐥𝐞𝐬`
global.dis = '✫✫✫✫✫'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.png')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24'
global.group2 = 'https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24'
global.canal = 'https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24'
global.github = 'https://github.com/Prakharper/Demon-2.2.git' 
global.instagram = 'https://www.instagram.com/harperprak' 
global.whatsApp = 'https://wa.me/573007796996'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}};

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '♡𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝@♡', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '𝐒𝐭𝐢𝐜𝐤𝐞𝐫 ♡', jpegThumbnail: catalogo }}};

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363220939514640@newsletter',
ch2: '120363343366246815@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
