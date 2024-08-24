const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu online offline chek",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
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
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `*😼👋 HELLO KAVIYA-MD USER ${pushname}*
*❮ KAVIYA-MD ❯*
*◆ ᴏᴡɴᴇʀ: CYBER KAVIYA*

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
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
