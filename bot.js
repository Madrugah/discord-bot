const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log("Now connected");

    client.user.setActivity("Runescape");

    console.log("Connected to servers: ");
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) =>{
            console.log(` - ${channel.name} ${channel.id}`);
            //382892572424798219 swag chat
        });
    });
    let swagChat = client.channels.cache.get("382892572424798219");
    swagChat.send("Binky Bonky");
});
client.login("NzM2NjI1NTIwMTgzMjE0MDgw.Xxxh-Q.QFoGMljcZ1PBLXNev131jNl7gtI");