const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "97c2kYTA#ClaGX5dHihb6p1U6wcjvC6okxY4IZKx85L_G0YxHpI0",
MONGODB: process.env.MONGODB || "mongodb+srv://rinihi3417:Y9AUPuZLMocNaHpA@cluster0.tssx8tw.mongodb.net/",
};
