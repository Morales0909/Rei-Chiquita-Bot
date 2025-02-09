import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    return conn.reply(m.chat, '🤓☝🏻 Ingresa el nombre o palabra clave para buscar en *Spotify*.\n\n' + `Ejemplo:\n> *${usedPrefix + command}* Ozuna`, m,rcanal);
  }

  await m.react('⏳');

  try {
    let apiSearch = await fetch(`https://api.vreden.web.id/api/spotifysearch?query=${encodeURIComponent(text)}`);
    let jsonSearch = await apiSearch.json();
    let selectedTrack = jsonSearch.result[0];
    let trackUrl = selectedTrack.url;

    let apiDL = await fetch(`https://api.vreden.web.id/api/spotify?url=${encodeURIComponent(trackUrl)}`);
    let jsonDL = await apiDL.json();

    if (jsonDL.result) {
      let { title, artists, cover, music } = jsonDL.result;
      let titulo = `- Titulo: ${title}\n- Autor: ${artists}\n- Enlace: ${trackUrl}`;

      await conn.sendFile(m.chat, cover, 'cover.jpg', titulo, m,rcanal,fake);
      await conn.sendFile(m.chat, music, 'music.mp3', null, m);
      await m.react('✅');
    } else {
      let backupAPI = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${encodeURIComponent(trackUrl)}`);
      let backupJson = await backupAPI.json();

      if (backupJson.status && backupJson.download) {
        let { name, artist, cover_url } = backupJson.metadata;
        let downloadUrl = backupJson.download;
        let titulo = `- Titulo: ${name}\n- Autor: ${artist}\n- Enlace: ${trackUrl}`;

        await conn.sendFile(m.chat, cover_url, 'cover.jpg', titulo, m,rcanal,fake);
        await conn.sendFile(m.chat, downloadUrl, 'music.mp3', null, m);
        await m.react('✅');
      } else {
        await m.react('❌');
        conn.reply(m.chat, '[ ᰔᩚ ] No se pudo obtener la música para este enlace.', m,rcanal);
      }
    }
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(m.chat, '[ ᰔᩚ ] Ocurrió un error al procesar tu solicitud.', m,rcanal);
  }
};

handler.command = /^(spotify|sp|Spotify)$/i;
handler.tags = ["search"];
handler.register = true;

export default handler;