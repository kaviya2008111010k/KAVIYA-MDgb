const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu online offline chek",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `*😼👋 HELLO KAVIYA-MD USER ${pushname}*
*❮ KAVIYA-MD ❯*
*◆ ᴏᴡɴᴇʀ: KAVIYA*

*Thanks for Choosing KAVIYA-MD 💀📵*

*©2024 KAVIYA-MD*

◆ *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ 📥📂*

${menu.download}

◆ *ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ 🎭💥*

${menu.main}

◆ *ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ ⚠️🪀*

${menu.group}

◆ *ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ 😼⚙️*

${menu.owner}

◆ *ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ ♻️✨*

${menu.convert}

◆ *ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ 👀🎯*

${menu.search}

> *𝐊𝐀𝐕𝐈𝐘𝐀-𝐌𝐃*

`
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
