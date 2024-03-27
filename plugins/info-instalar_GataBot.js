let handler  = async (m, { conn, usedPrefix, command }) => {
let gata = `𝘾𝙤𝙢𝙥𝙧𝙖𝙢𝙚 𝙥𝙚𝙣𝙙𝙚𝙟𝙤 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚𝙨 𝙦𝙪𝙚 𝙩𝙤𝙙𝙤 𝙩𝙚 𝙡𝙤 𝙧𝙚𝙜𝙖𝙡𝙚
${assistance_num}`
await conn.sendFile(m.chat, gataImg, 'lp.jpg', gata, fkontak, false, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb }}})}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
