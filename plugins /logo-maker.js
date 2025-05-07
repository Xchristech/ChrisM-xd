//---------------------------------------------
//           CHRISM-XD  
//---------------------------------------------
//  ⚠️ DO NOT MODIFY THIS FILE OR REMOVE THIS CREDIT⚠️  
//---------------------------------------------


const { chris, commands } = require('../chris');
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions2');

chris({
    pattern: "3danime",
    desc: "Create a 3D Anime-style text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dcomic Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-Anime-style-text-effects-817.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "dragonball",
    desc: "Create a 3D Anime-style text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3danime Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "deadpool",
    desc: "Create a deadpool text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3danime Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "blackpink",
    desc: "Create a blackpink text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3danime Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "neonlight",
    desc: "Create a neon light text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: neonlight Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "cat",
    desc: "Create a cat text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: cat Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "sadgirl",
    desc: "Create a sadgirl text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: sadgirl Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "pornhub",
    desc: "Create a pornhub text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: pornhub Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "naruto",
    desc: "Create a Naruto text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: naruto Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "thor",
    desc: "Create a Thor text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: thor Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "america",
    desc: "Create  American text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: America Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "eraser",
    desc: "Create a Eraser text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Eraser Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "3dpaper",
    desc: "Create a 3D Paper text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dpaper Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "futuristic",
    desc: "Create a futuristic text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: futuristic Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "clouds",
    desc: "Create a Clouds text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Clouds Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "sans",
    desc: "Create a Sand text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: sand Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Anime-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "galaxy",
    desc: "Create a Galaxy text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: galaxy Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Ainme-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

chris({
    pattern: "leaf",
    desc: "Create a Leaf text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, c, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: leaf Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-green-venom.vercel.app/api/logo?url=https://en.ephoto360.
