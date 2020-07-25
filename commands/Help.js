exports.helpCommand = function(args, cmd){
    if(args.length == 0){
        cmd.channel.send("Commands: \n!ping <person> \n!quote <name> \n!quoteOfTheDay");
    }else{
        //handle help command
    }
}