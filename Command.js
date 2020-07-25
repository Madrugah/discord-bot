const CopyPasta = require("./CopyPasta.json");

exports.handleCommand = function(command){
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
        case "quote":
            quoteCommand(args, command);
            break;
        default:
            command.channel.send("Unknown command");
    }
}
function helpCommand(args, cmd){
    if(args.length == 0){
        cmd.channel.send("Commands: \n!ping <person> \n!quote <name>");
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
function quoteCommand(args,cmd){
    if(args.length > 0){
            let quote = CopyPasta[args[0]];

            cmd.channel.send(quote).catch((err) =>{
                console.log(err);
                cmd.channel.send("No quote found!");
            });
    }else{
        cmd.channel.send("No quote found");
    }
}