const { chris } = require("../chris");
const axios = require("axios");

chris({
  pattern: "rw",
  alias: ["randomwall", "wallpaper"],
  react: "🌌",
  desc: "Download random wallpapers based on keywords.",
  category: "wallpapers",
  use: ".rw <keyword>",
  filename: __filename
}, async (conn, c, store, { from, args, reply }) => {
  try {
    const query = args.join(" ") || "random";
    const apiUrl = `https://pikabotzapi.vercel.app/random/randomwall/?apikey=anya-md&query=${encodeURIComponent(query)}`;

    const { data } = await axios.get(apiUrl);
    
    if (data.status && data.imgUrl) {
      const caption = `🌌 *Random Wallpaper: ${query}*\n\n> *© Powered by Chris*`;
      await conn.sendMessage(from, { image: { url: data.imgUrl }, caption }, { quoted: c });
    } else {
      reply(`❌ No wallpaper found for *"${query}"*.`);
    }
  } catch (error) {
    console.error("Wallpaper Error:", error);
    reply("❌ An error occurred while fetching the wallpaper. Please try again.");
  }
});
