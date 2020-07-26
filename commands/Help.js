const Discord = require('discord.js');

exports.helpCommand = (args, cmd) => {
    if(args.length == 0){
        const embed = new Discord.MessageEmbed()
        .setAuthor("Help", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Noun_Project_question_mark_icon_1101884_cc.svg/1024px-Noun_Project_question_mark_icon_1101884_cc.svg.png")
        .setColor(0x1ED760)
        .addField("!ping ", "<person>", true)
        .addField("!quote ", "<name>", false)
        .addField("!quoteoftheday ", "-", true)
        .addField("!spotify ", "[<person>]", false)
        .addField("!joke ", "[dark] [miscellaneous] [programming]", false)
        cmd.channel.send(embed);
    }else{
        //handle help command
    }
}