const { EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder  } = require('discord.js');
const { swap_pages2_interaction } = require('../../utils/functions');

module.exports = {
    name: `help`,
    description: `Gives You all the bot Commands`,
    category: `Information`,
    // options: [{
    //     name: `command`,
    //     description: `Want to know about a specific command?`,
    //     type: 3,
    //     required: false
    // }],

    run: async (client, interaction) => {
      return interaction.reply({
        embeds: [new EmbedBuilder()
            .setColor(client.ee.color)
            .setTitle(`**_${client.ee.name}_ | Help** \n👍 *Here is a list of all of my Commands*`)
            .addFields(client.commands.map(d => {
                return {
                    name: `\`/${d.name}\``,
                    value: `> *${d.description}*`,
                    inline: true
                }
            }))
            
        ]
    }).catch(() => null);


      // let command = interaction.options.getString(`command`)
      // interaction.reply({embeds: [
      //   new EmbedBuilder()
      //   .setColor(client.ee.color)
      //   .setTitle(``)
      //   .setDescription(``)
      // ]})
    }

}