const Help = require('./commands/Help');
const Ping = require('./commands/Ping');
const Quote = require('./commands/Quote');
const Spotify = require('./commands/Spotify');

exports.handleCommand = (command) => {
    let cmd = command.content.substr(1);
    let splitCmd = cmd.split(" ");
    let primary = splitCmd[0];
    let args = splitCmd.slice(1);

    switch(primary){
        case "help":
            Help.helpCommand(args,command);
            break;
        case "ping":
            Ping.pingCommand(args, command);
            break;
        case "quote":
            Quote.quoteCommand(args, command);
            break;
        case "quoteOfTheDay":
            Quote.quoteOfTheDay(args, command);
            break;
        case "spotify":
            Spotify.spotifyCommand(args,command);
            break;
        default:
            command.channel.send("Unknown command");
    }
}
