const axios = require('axios');
const config = require('../settings');
const { chris } = require('../chris');

chris({
  on: 'body'
}, async (conn, mek, m, { from, body }) => {
  try {
    const jsonUrl = 'https://raw.githubusercontent.com/Chimbiko-xd/CHRIS-DATA/main/autosticker.json';
    const res = await axios.get(jsonUrl);
    const data = res.data;

    for (const keyword in data) {
      if (body.toLowerCase() === keyword.toLowerCase()) {
        if (config.AUTO_STICKER === 'true') {
          await conn.sendMessage(
            from,
            {
              sticker: { url: data[keyword] },
              package: 'CHRISM-XD'
            },
            { quoted: mek }
          );
        }
      }
    }
  } catch (e) {
    console.error('AutoSticker error:', e);
  }
});
