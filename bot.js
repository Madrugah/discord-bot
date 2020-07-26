const Command = require('./Command');
const Discord = require('discord.js');
const Auth = require('./auth.json')

const Client = new Discord.Client();

Client.on('ready', () => {
    console.log("Now connected");

    Client.user.setActivity("Runescape");

    console.log("Connected to servers: ");
    Client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        // guild.members.cache.forEach((mem) => console.log(mem.user));
    });

    let swagChat = Client.channels.cache.get("382892572424798219");
    // const att = new Discord.MessageAttachment("");
    // swagChat.send(att);
});

Client.on("message", (msg) => {
    if(msg.author == Client.user) return;

    if(msg.content.toLowerCase().includes("binky bonky")){
        msg.channel.send("ayyy " + msg.author.toString() + " you cool!");
        msg.react("🥰")
    }

    if(msg.content.startsWith("!")){
        Command.handleCommand(msg);
    }
    return;
});

Client.login(Auth.token);