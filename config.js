const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "96FxTaLR#mirBDkvfrJutSg3Z_1A9tFhDUOm7IJQbIP0pTKg4RgU",
MONGODB: process.env.MONGODB || "enter mongodb here",
};
