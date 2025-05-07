const config = require('../settings');
const { chris } = require('../chris');

// Presence Control (Online/Offline)

chris({
  on: "body"
}, async (conn, mek, c, { from }) => {
  try {
    // If ALWAYS_ONLINE=true → Bot stays online 24/7
    // If ALWAYS_ONLINE=false → Bot shows default WhatsApp behavior (no forced online/offline)
    if (config.ALWAYS_ONLINE === "true") {
      await conn.sendPresenceUpdate("available", from);
    }
    // If false, do nothing (let WhatsApp handle presence naturally)
  } catch (e) {
    console.error("[Presence Error]", e);
  }
});
