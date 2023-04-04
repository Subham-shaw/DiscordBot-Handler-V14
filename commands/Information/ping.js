const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ping",
    description: "Get The Time Taken By The Bot to Respond To a Command!",
    category: "Information",
    run: async ( client, interaction ) => {
        interaction.reply({
            content: `⏳ Pinging The Api.....`,
        })
        .then(i => {
            interaction.deleteReply()
            interaction.followUp({
                embeds: [ 
                    new EmbedBuilder()
                    .setColor(client.ee.color)
                    .setTitle(`:ping_pong:  Pong!`)
                    .setDescription(`❤️ **Bot HeartRate**: \`${client.ws.ping}ms\`!`) ],
                ephemeral: true
            })
        }).catch((e) => console.log(e));
        return;
    }
}