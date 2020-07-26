const CopyPasta = require("../CopyPasta.json");
const https = require('https');

exports.quoteCommand = (args,cmd) => {
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

exports.quoteOfTheDay = (args,cmd) => {
    https.get("https://quotes.rest/qod?language=en", (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const quoteText = JSON.parse(data).contents.quotes[0].quote;
            const author = JSON.parse(data).contents.quotes[0].author;
            const quote = quoteText + " - " + author;

            cmd.channel.send(quote);
        });
        response.on("error", (err) => {
            console.log(err);
        });
    });
}