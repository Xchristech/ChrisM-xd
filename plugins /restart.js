const { chris } = require("../chris");  
const { sleep } = require("../lib/functions");  

chris({  
    pattern: "restart",  
    desc: "Restart CHRISM-XD",  
    category: "owner",  
    filename: __filename  
},  
async (conn, mek, c, { reply, isCreator }) => {  
    try {  
        if (!isCreator) {  
            return reply("Only the bot owner can use this command.");  
        }  

        const { exec } = require("child_process");  
        reply("Restarting...");  
        await sleep(1500);  
        exec("pm2 restart all");  
    } catch (e) {  
        console.error(e);  
        reply(`${e}`);  
    }  
});
