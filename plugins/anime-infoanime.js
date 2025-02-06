import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, command, text }) => {

if (!text) return conn.reply(m.chat, `🍟 *Ingrese el nombre de algun anime*\n\nEjemplo, ${usedPrefix + command} Neon Genesis Evangelion`, m, rcanal)
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) return conn.reply(m.chat, `🚩 *Ocurrió un fallo*`, m, rcanal)

let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `🍟 Título: ${title_japanese}
🚩 Capítulos: ${chapters}
📺 Transmisión: ${type}
🗓️ Estado: ${status}
🗃 Volumes: ${volumes}
🌟 Favorito: ${favorites}
🧮 Puntaje: ${score}
👥 Miembros: ${members}
🔗 Url: ${url}
👨‍🔬 Autor: ${author}
📝 Fondo: ${background}
💬 Sinopsis: ${synopsis}
 ` 
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'anjime.jpg', '      🚩 *I N F O - A N I M E* 🚩\n\n' + animeingfo, fkontak, m)

} 
handler.help = ['infoanime'] 
handler.tags = ['anime'] 
handler.command = ['infoanime', 'animeinfo'] 

export default handler
