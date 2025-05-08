/*
Project Name : CHRISM XD
Creator      : CHRIS Xd ( Mr Lord Chris )
Repo         : https://github.com/Chimbiko-xd/CHRISM-XD
Support      : wa.me/2348069675806
*/

const config = require('../settings');
const { chris, commands } = require('../chris');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

chris({
    pattern: "support",
    alias: "follow",
    desc: "base",
    category: "support",
    react: "📡",
    filename: __filename
}, async (conn, mek, c, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        // Get the current time for dynamic greeting
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let dec = `
╭────────────≫
┋ 🌟 *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *ᴍʀ ᴍᴀʟᴠɪɴ (🇳🇬)* 🌍
┋ 🚀 *ᴍᴏᴅᴇ* : *${config.MODE}*
┋ ⚡ *ᴘʀᴇғɪx* : *${config.PREFIX}*
┋ 🧩 *ᴠᴇʀsɪᴏɴ* : ${config.version}
┋ ⏳ *ᴜᴘᴛɪᴍᴇ* : _${runtime(process.uptime())}_
┋ 🕰️ *ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ* : _${currentTime}_
╰────────────≫

   💬 *ᴍᴀʟᴠɪɴ xᴅ sᴜᴘᴘᴏʀᴛ ʟɪɴᴋs* ↷

${readMore}
\`🔔 ᴄʜᴀɴɴᴇʟ🩵\`
🔗 https://whatsapp.com/channel/0029VbAWP72CsU9OoOqVhb2g

\`👥 ɢʀᴏᴜᴘ💙\`
🔗 https://chat.whatsapp.com/I79aN0jJyP8DzI2dth7xEF

\`💻 ᴍʀ ᴍᴀʟᴠɪɴ ᴋ\` *Developer🧑‍💻*
🔗 wa.me/2348069675806?text=Support!

> 🚀 *ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ᴄʜᴀɴɴᴇʟ* 🚀
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/bddvfr.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [c.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363394430045533@newsletter',
                        newsletterName: '🪀『 𝙼𝙰𝙻𝚅𝙸𝙽-𝚇𝙳 』🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio message with a fun personalized touch
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/XdKing2/MALVIN-DATA/raw/refs/heads/main/autovoice/menu2.mp3' },
            mimetype: 'audio/mp3',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`*⚠️ Oops! Something went wrong:* ${e.message}`);
    }
});

//  REALCHRIS-XD SC BY MR CHRIS Xd
