const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~zNllWRQS#5iR1viEg2NH6gy7PDT6fgqjeUo4XU3LPySs-L4heogs",
};
