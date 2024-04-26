let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@vsebas.y ${pesan}`
let teks = `*ACTIVENSE ADORNOS 💗*\n${oi}\n\n*🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `✨ @${mem.id.split('@')[0]}\n`}
teks += `𝙉𝙀𝙆𝙊𝙏𝙄𝙉𝘼 𝘽𝙔 𝘼𝙉𝙏𝙃𝙊𝙉𝙔 𝙑𝙀𝙉𝙏𝘼𝙎`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
