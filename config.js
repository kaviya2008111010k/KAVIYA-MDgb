const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "96FxTaLR#mirBDkvfrJutSg3Z_1A9tFhDUOm7IJQbIP0pTKg4RgU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/9e3b76b5aefcbc523bde4.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*I AM ALIVE NOW 😼💯*\n\n*Hey,KAVIYA-MD USER 💀⚡*\n\n*Sapport us ⚔️*\n\nhttps://wa.me/+94752689596?text=*Hey_KAVIYA-MD-OWNER_😼*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MENU_IMG: process.env.MENU_IMG || "https://telegra.ph/file/9e3b76b5aefcbc523bde4.jpg",
MENU_MSG: process.env.MENU_MSG || "*❮ KAVIYA-MD ❯*\n*◆ ᴏᴡɴᴇʀ: CYBER KAVIYA*\n\n*Thanks for Choosing KAVIYA-MD 💀📵*\n\n*©2024 KAVIYA-MD*\n\n*◆ ᴏᴡɴᴇʀ ᴍᴇɴᴜ 😼⚙️*\n\n.ɢᴇᴛꜱᴇꜱꜱɪᴏɴ\n.ᴅᴇʟᴇᴛᴇꜱᴇꜱꜱɪᴏɴ\n.ᴊᴏɪɴ\n.ꜱʜᴜᴛᴅᴏᴡɴ\n.ʀᴇꜱᴛᴀʀᴛ\n.ᴀᴜᴛᴏʀᴇᴀᴅᴍꜱɢ\n.ᴀᴜᴛᴏʀᴇᴀᴅᴄᴍᴅ\n.ᴀᴜᴛᴏᴛʏᴘɪɴɢ\n.ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ\n.ᴀᴜᴛᴏʙɪᴏ\n.ᴀᴜᴛᴏꜱᴛᴀᴛᴜꜱꜱᴀᴠᴇ\n.ᴍᴏᴅᴇ\n.ʙʟᴏᴄᴋ\n.ᴜɴʙʟᴏᴄᴋ\n.ʙᴀɴ\n.ᴜɴʙᴀɴ\n.ʙᴀᴄᴋᴜᴘ\n.ᴀᴅᴅᴏᴡɴᴇʀ\n.ᴅᴇʟᴏᴡɴᴇʀ\n.ᴘɪɴɢ\n.ᴘɪɴɢ2\n.ꜱʏꜱᴛᴇᴍ\n\n*◆ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ⚠️🪀*\n\n.ᴄʟᴏꜱᴇᴛɪᴍᴇ\n.ᴏᴘᴇɴᴛɪᴍᴇ\n.ᴋɪᴄᴋ\n.ᴀᴅᴅ\n.ᴘʀᴏᴍᴏᴛᴇ\n.ᴅᴇᴍᴏᴛᴇ\n.ꜱᴇᴛᴅᴇꜱᴄ\n.ꜱᴇᴛᴘᴘɢᴄ\n.ᴛᴀɢᴀʟʟ\n.ʜɪᴅᴇᴛᴀɢ\n.ᴛᴏᴛᴀɢ\n.ᴀᴅᴍɪɴᴛᴀɢ\n.ɢʀᴏᴜᴘ\n.ɢʀᴏᴜᴘʟɪɴᴋ\n.ᴀɴᴛɪʟɪɴᴋ\n.ᴀɴᴛɪʙᴏᴛ\n.ᴀɴᴛɪᴡᴏʀᴅ\n.ᴀɴᴛɪꜱᴘᴀᴍ\n.ᴀɴᴛɪᴅᴇʟᴇᴛᴇ\n.ᴀɴᴛɪᴠɪᴇᴡᴏɴᴇ\n\n*◆ ᴄᴏɴᴛᴀᴄᴛ ᴍᴇɴᴜ ♻️✨*\n\n.ꜱᴛɪᴄᴋᴇʀꜱ\n.ꜱᴍᴇᴍᴇ\n.ᴛᴀᴋᴇ\n.ᴛᴏɪᴍᴀɢᴇ\n.ᴛᴏᴠɪᴅᴇᴏ\n.ᴛᴏᴀᴜᴅɪᴏ\n.ᴛᴏᴍᴘ3\n.ɪᴍɢᴛᴏʟɪɴᴋ\n\n*◆ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥📂*\n\n.ᴘʟᴀʏ\n.ꜱᴏɴɢ\n.ᴠɪᴅᴇᴏ\n.ꜰʙ\n.ꜰʙ2\n.ᴛɪᴋᴛᴏᴋ\n.ɪɴꜱᴛᴀ\n.ᴍᴏᴅᴇᴀᴘᴋ\n.ɢᴏᴏɢʟᴇᴅʀɪᴠᴇ\n\n*◆ ᴀɪ ᴍᴇɴᴜ 🤖🌐*\n\n.ᴀɪ\n.ɢᴇᴍɪɴɪ\n.ɢᴘᴛ3\n\n`𝐊𝐀𝐕𝐈𝐘𝐀-𝐌𝐃`",
MODE: process.env.MODE || "private",
};
