const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("627510112713703424")
setInterval(function() {
channel.send(`**انور ما له دخل بل ضمان **`);
}, 30)
})

client.login(process.env.BOT_TOKEN);