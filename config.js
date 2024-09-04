const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "1CcmBDgQ#9RIPB_0cPprHXfzfc4AaC6Av0E10eAfCc-FJOitw9zs",
MONGODB: process.env.MONGODB || "mongodb://mongo:wwJAJJCCBPlcFeqNHXSoCjwyYiUxXkLh@junction.proxy.rlwy.net:29356",
};
