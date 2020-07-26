const { User, DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');

exports.spotifyCommand = (args, cmd) => {
    let user = (cmd.mentions.users.first() == null) ? cmd.author : cmd.mentions.users.first();

    if(verifySpotifyActivity(user)) {
        let spotifyActivity = user.presence.activities[0];
        console.log(spotifyActivity);

        let trackIMG = `https://i.scdn.co/image/${spotifyActivity.assets.largeImage.slice(8)}`;
        let trackURL = `https://open.spotify.com/track/${spotifyActivity.syncID}`;
        let trackName = spotifyActivity.details;
        let trackArtist = spotifyActivity.state;
        let trackAlbum = spotifyActivity.assets.largeText;


        const embed = new Discord.MessageEmbed()
        .setAuthor("Spotify Track Info", "https://cdn.discordapp.com/emojis/408668371039682560.png")
        .setColor(0x1ED760)
        .setThumbnail(trackIMG)
        .addField("Song: ", trackName, true)
        .addField("Album: ", trackAlbum, true)
        .addField("Artist", trackArtist, false)
        .addField("Listen: ", `[${trackURL}](${trackURL})`, false)
        cmd.channel.send(embed);

    }else{
        cmd.channel.send("User isn't listening to Spotify!");
    }


};

function verifySpotifyActivity(usr){
    return (usr.presence.activities[0] !== null &&
        usr.presence.activities[0].type === "LISTENING" &&
        usr.presence.activities[0].name === "Spotify" &&
        usr.presence.activities[0].assets !== null);
}