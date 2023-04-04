const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "uptime",
    description: "Show the Bot's uptime",
    category: "Information",

    run: async (client, interaction) => {
        let date = new Date()
        let timestamp = date.getTime() - Math.floor(client.uptime);
        
        const uptimeEmbed = new EmbedBuilder()
            .setColor(client.ee.color)
            .setTitle(`${client.ee.name} | Uptime`)
            .setDescription(`🟢 **I'm running since <t:${Math.floor(timestamp / 1000)}:F> and was started <t:${Math.floor(timestamp / 1000)}:R>!**`)
            interaction.reply({embeds: [uptimeEmbed]})
    },
};