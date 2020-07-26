const Discord = require('discord.js');

exports.helpCommand = (args, cmd) => {
    if(args.length == 0){
        const embed = new Discord.MessageEmbed()
        .setAuthor("Help", "https://thumbs.dreamstime.com/b/question-mark-thin-line-vector-icon-flat-isolated-white-background-editable-eps-file-illustration-95819133.jpg")
        .setColor(0x1ED760)
        .addField("Notation: ", "<value> [optional]")
        .addField("!ping ", "<person>", false)
        .addField("!quote ", "<name>", true)
        .addField("!addquote ", "<person> <quote>", true)
        .addField("!quoteoftheday ", "-", false)
        .addField("!spotify ", "[<person>]", false)
        .addField("!joke ", "[dark] [miscellaneous] [programming]", false)
        cmd.channel.send(embed);
    }else{
        //handle help command
    }
}