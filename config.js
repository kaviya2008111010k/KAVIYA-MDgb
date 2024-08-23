const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/bb6fdbbaa445ee722502a.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*I AM ALIVE NOW 😼💯*\n\n*Hey,KAVIYA-MD USER 💀⚡*\n\n*Sapport us ⚔️*\n\nhttps://wa.me/+94752689596?text=*Hey_KAVIYA-MD-OWNER_😼*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
};
