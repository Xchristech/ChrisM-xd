// code by ⿻ ⌜ CHRISM ⌟⿻⃮͛

const axios = require("axios");
const config = require('../settings');
const { chris } = require('../chris');

chris({
  pattern: "sss",
  alias: ["ssweb"],
  react: "💫",
  desc: "Download screenshot of a given link.",
  category: "other",
  use: ".ss <link>",
  filename: __filename,
}, 
async (conn, mek, c, {
  from, l, quoted, body, isCmd, command, args, q, isGroup, sender, 
  senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, 
  groupMetadata, groupName, participants, isItzcp, groupAdmins, 
  isBotAdmins, isAdmins, reply 
}) => {
  if (!q) {
    return reply("Please provide a URL to capture a screenshot.");
  }

  try {
    // created by chris tech 
    const response = await axios.get(`https://api.cypherX.my.id/ssweb?url=${q}`);
    const screenshotUrl = response.data.screenshotUrl;

    // give credit and use
    const imageMessage = {
      image: { url: screenshotUrl },
      caption: "*WEB SS DOWNLOADER*\n\n> *© Powered By Chris Xd*",
      contextInfo: {
        mentionedJid: [c.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363394430045533@newsletter',
          newsletterName: "ᴍᴀʟᴠɪɴ-xᴅ",
          serverMessageId: 143,
        },
      },
    };

    await conn.sendMessage(from, imageMessage, { quoted: c });
  } catch (error) {
    console.error(error);
    reply("Failed to capture the screenshot. Please try again.");
  }
});
