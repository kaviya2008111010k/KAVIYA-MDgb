const config = require('../config')
const {cmd, commands} = require('../command')
const os = require("os")
cmd({
    pattern: "system",
    alias: ["status","botinfo","runtime","uptime"],
    desc: "Check uptime, RAM usage, and more",
    category: "main",
    filename: __filename
},
async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*🚀 Uptime:*  ${runtime(process.uptime())}
*📵 RAM Usage:*
*🏠 HostName:* ${os.hostname()}
*😼 Owner:* *ᴄʏʙᴇʀ ᴋᴀᴠɪʏᴀ*
`
        return reply(`${status}`)
  
        } catch (e) {
        console.log(e)
        reply(`${e}`)

  
}
})
