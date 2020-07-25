const Command = require('./Command.js');
const Discord = require('discord.js');
const Auth = require('./auth.json')

const client = new Discord.Client();

client.on('ready', () => {
    console.log("Now connected");

    client.user.setActivity("Runescape");

    console.log("Connected to servers: ");
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        // guild.members.cache.forEach((mem) => console.log(mem.user));
    });

    let swagChat = client.channels.cache.get("382892572424798219");
    // const att = new Discord.MessageAttachment("");
    // swagChat.send(att);
});

client.on("message", (msg) => {
    if(msg.author == client.user) return;

    if(msg.content.toLowerCase().includes("binky bonky")){
        msg.channel.send("ayyy " + msg.author.toString() + " you cool!");
        msg.react("🥰")
    }

    if(msg.content.startsWith("!")){
        Command.handleCommand(msg);
    }
    return;
});

client.login(Auth.token);