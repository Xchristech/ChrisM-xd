const { chris, commands } = require('../chris');

chris({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, c, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ *CHRISM-XD DEVELOPER* ⌋──
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *CHRIS-XD*, a multi-functional
│    WhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : Chris xd
│ 🕯️ *Age* : +17
│ ☎️ *Contact* : wa.me/+1(276) 698-8379
│ ▶️ *YouTube* : 
│   
│
│ ⚡ Powered by *Chris xd*
│
╰───────────────
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/vfv7n6.jpg' },
                caption: text,
                contextInfo: {
                    mentionedJid: [c.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398330045533@newsletter',
                        newsletterName: '🪀『 ChrisM-xd 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "Chris-XD Bot",
                        body: "Created with love by chris xd",
                        thumbnailUrl: 'https://files.catbox.moe/vfv7n6.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://",
                        sourceUrl: "https://"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
