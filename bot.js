const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
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

client.on("message", (msg) =>{
    if(msg.author == client.user) return;

    if(msg.content.toLowerCase().includes("binky bonky")){
        msg.channel.send("ayyy " + msg.author.toString() + " you cool!");
        msg.react("🥰")
    }

    if(msg.content.startsWith("!")){
        handleCommand(msg);
    }
    return;
});

function handleCommand(command){
    let cmd = command.content.substr(1);
    let splitCmd = cmd.split(" ");
    let primary = splitCmd[0];
    let args = splitCmd.slice(1);

    switch(primary){
        case "help":
            helpCommand(args,command);
            break;
        case "ping":
            pingCommand(args, command);
            break;
        default:
            msg.channel.send("Unknown command");
    }
}
function helpCommand(args, cmd){
    if(args.length == 0){
        cmd.channel.send("Get help!");
    }else{
        //handle help command
    }
}
function pingCommand(args, cmd){
    if(args.length > 0){
        cmd.channel.send("Binky Bonky " + args[0] + "!");
    }else{
        cmd.channel.send("Binky Bonky!");
    }
}
client.login("NzM2NjI1NTIwMTgzMjE0MDgw.Xxxh-Q.QFoGMljcZ1PBLXNev131jNl7gtI");