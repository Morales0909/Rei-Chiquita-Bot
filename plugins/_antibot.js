export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return;
    let chat = global.db.data.chats[m.chat]
    let delet = m.key.participant
    let bang = m.key.id
    let bot = global.db.data.settings[this.user.jid] || {}
    if (m.fromMe) return true;

    if (m.id.startsWith('3EB0') && m.id.length === 22) {
        let chat = global.db.data.chats[m.chat];

        if (chat.antiBot) {
         //   await conn.reply(m.chat, "  ༻𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭༺   \n■■■■■■■■■■■■■■■■■■\n\n𝑆𝑜𝑦 𝐑𝐞𝐢𝐂𝐡𝐢𝐪𝐮𝐢𝐭𝐚-𝐁𝐨𝐭💙 𝒍𝒂 𝒎𝒆𝒋𝒐𝒓 𝒃𝒐𝒕 𝒅𝒆𝒍 𝒎𝒖𝒏𝒅𝒐 𝒎𝒖𝒏𝒅𝒊𝒂𝒍 𝑼𝒘𝑼!!\n𝑬𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒕𝒆 𝒒𝒖𝒆𝒓𝒆𝒎𝒐𝒔 ¿𝑵𝒐 𝒄𝒐𝒏𝒐𝒄𝒆𝒔 𝒆𝒍 𝒅𝒆𝒔𝒑𝒓𝒆𝒄𝒊𝒐? 𝒂𝒅𝒊𝒐𝒔, 𝒚 𝒏𝒐 𝒗𝒖𝒆𝒍𝒗𝒂𝒔 𝒃𝒐𝒕 𝒅𝒆 𝒑𝒂𝒄𝒐𝒕𝒊𝒍𝒍𝒂.", null, rcanal);

            if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
    }
}
