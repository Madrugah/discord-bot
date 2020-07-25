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