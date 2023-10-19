import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `Azka`, `Developer Bot Inc`, `Ponsel`, `Streliz992@gmail.com`, `Washington - USA`, `https://s.id/azkaazhrzlva`, `Just Copy Paster`]
  ], m)
}
handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler
