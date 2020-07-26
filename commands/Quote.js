const CopyPasta = require("../CopyPasta.json");
const https = require('https');
const fs = require('fs');

exports.quoteCommand = (args,cmd) => {
    if(args.length > 0){
        fs.readFile(process.cwd() + "/CopyPasta.json", "utf8", (err,data) =>{
            if(err){
                console.log(err);
            }
            const quotes = JSON.parse(data);
            const quote = quotes[args[0]];

            cmd.channel.send(quote).catch((err) =>{
                cmd.channel.send("No quote found!");
            });
        });
    }else{
        cmd.channel.send("No quote found");
    }
};

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
};

exports.addQuote = (args, cmd) => {
    if(args.length >= 2){
        fs.readFile(process.cwd() + "/CopyPasta.json", "utf8", (err,data) =>{
            if(err){
                cmd.channel.send("Error getting quote");
            }else{
                let quotes = JSON.parse(data);
                
                if(quotes[args[0]] == null){
                    quotes[args[0]] = buildQuote(args);

                    fs.writeFile(process.cwd() + "/CopyPasta.json",JSON.stringify(quotes),"utf8",(err) =>{
                        if(err){
                            cmd.channel.send("Error adding quote");
                        }else{
                            cmd.channel.send("Quote added!");
                        }
                    });
                }else{
                    cmd.channel.send("Quote already exists");
                }
            }
        });
    }else{
        cmd.channel.send("Invalid parameters");
    }
};

function buildQuote(args){
    let quote = "";
    for(var i = 1; i < args.length; i++){
        quote = quote + args[i] + " ";
    }
    return quote.trim();
}