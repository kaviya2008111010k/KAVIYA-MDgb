const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "kZZkCDiA#aT6l-VBX4EevQ8FD92LsYQLugeSs_d9yj6HhFSCsftI",
MONGODB: process.env.MONGODB || "mongodb+srv://rinihi3417:Y9AUPuZLMocNaHpA@cluster0.tssx8tw.mongodb.net/",
};
