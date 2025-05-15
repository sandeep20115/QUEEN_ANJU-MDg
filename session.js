const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~TBEQnQAY#TXCf4CPPMf-slorjDc1w14drnT2EIQ8E4_FPwH-yvWE",
};
