const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qbgBmLib#OSFf9T5ezP3LyOfzZZev7M2UnAFKOUvtciK6Cg0qUek",
MONGODB: process.env.MONGODB || "mongodb://mongo:wwJAJJCCBPlcFeqNHXSoCjwyYiUxXkLh@junction.proxy.rlwy.net:29356",
};
