const { Client, Collection, GatewayIntentBits, Events } = require('discord.js')
const client = new Client({
   intents: [
       GatewayIntentBits.Guilds,
       GatewayIntentBits.GuildMembers,
       GatewayIntentBits.GuildMessages,
       GatewayIntentBits.GuildVoiceStates
   ], 
   shards: `auto`,
})

client.fun = require('./utils/functions')
client.ee = require('./botconfig/embed.json')
client.config = require('./botconfig/config.json')
client.commands = new Collection()
client.deploySlash = {
    enabled: true,
    guild: false
}

require('./utils/handler.js')(client)

client.on(Events.ShardError, error => {
	console.error('A websocket connection encountered an error:', error);
});

client.login(client.config.token)