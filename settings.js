
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "CHRISM_XD_SESSION",
  // Add your Session ID; make sure it starts with "CHRISM_XD_SESSION"

  PREFIX: process.env.PREFIX || ".",
  // Add your command prefix

  BOT_NAME: process.env.BOT_NAME || "CHRISM-XD",
  // Your bot name here

  MODE: process.env.MODE || "public",
  // Options: public - private - inbox - group

  OWNER_NAME: process.env.OWNER_NAME || "Chimbiko-xd",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348069675806",

  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "Hello! I am CHRISM-XD WhatsApp Bot.",
};


---
    
