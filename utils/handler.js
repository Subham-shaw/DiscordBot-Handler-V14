const { readdirSync } = require('fs')
var colors = require('colors')
module.exports = async client => {
        //Conecting Events Folder And Rendering All Files
        readdirSync(`${process.cwd()}/events/`).filter(file => file.endsWith(".js"))
        .forEach(file => {
            let pull = require(`${process.cwd()}/events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, pull.bind(null, client));
            
            console.log(`[+]: Loaded Event ${eventName}`.yellow);
        }
    )

     //Conecting SlashCommand Folder And Rendering All Files
    const slashCommandArray = [];
    readdirSync(`${process.cwd()}/commands/`)
        .forEach(directory => {
            const command = readdirSync(`${process.cwd()}/commands/${directory}/`)
                .filter(file => file.endsWith(".js"))
                .forEach(file => {
                    let pull = require(`${process.cwd()}/commands/${directory}/${file}`);
                    client.commands.set(pull.name, pull)
                    slashCommandArray.push(pull)
                })
        })

        client.on('ready', () => {
            if(client.deploySlash.enabled) {
                if(client.deploySlash.guild) {
                    client.guilds.cache.get(client.deploySlash.guild).commands.set(slashCommandArray);
        
                } else {
                    client.application.commands.set(slashCommandArray);
                }
            }
        
        })


    //Types Of Handler Error
    //Logging All Types OF Errors In The Console
    process.on('unhandleRejection', (reason, p) => {
        console.log('unhandleRejection', reason)
    })
    process.on('unhandleExcetion', (err, origin) => {
        console.log('unhandleExcetion', err)
    })
    process.on('unhandleExcetionMoniter', (err, origin) => {
        console.log('unhandleExcetionMoniter')
    })

}