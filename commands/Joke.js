const https = require('https');

exports.jokeCommand = (args, cmd) => {
    const filter = filterBuilder(args);

    if(filter === "Invalid"){
        cmd.channel.send("Invalid Filters");
    }else{
        const url = `https://sv443.net/jokeapi/v2/joke/${filter}`;
        getJoke(url, cmd);
    }

};

function getJoke(url,cmd){
    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const joke = JSON.parse(data);

            switch(joke.type){
                case "single":
                    cmd.channel.send(joke.joke);
                    break;
                case "twopart":
                    cmd.channel.send(joke.setup).then((succ) => {
                        cmd.channel.send(joke.delivery);
                    });
                    break;
                default:
                    cmd.channel.send("No joke for you!");
            }
        });
        response.on("error", (err) => {
            console.log(err);
        });
    });
}

function filterBuilder(args){
    let filter = "";
    if(args.length == 0){
        filter = "Any"
    }else{
        args.forEach((arg) =>{
            switch(arg.toLowerCase()){
                case "programming":
                    filter += "Programming,";
                    break;
                case "miscellaneous":
                    filter += "Miscellaneous,";
                    break;
                case "dark":
                    filter += "Dark,";
                    break;
                default:
                    filter = "Invalid";
            }
        });

        if(filter != "Invalid"){
            filter = filter.slice(0,filter.length-1);
        }
    }
    return filter;
}