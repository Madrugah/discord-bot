exports.pingCommand = (args, cmd) => {
    if(args.length > 0){
        cmd.channel.send("Binky Bonky " + args[0] + "!");
    }else{
        cmd.channel.send("Binky Bonky!");
    }
}