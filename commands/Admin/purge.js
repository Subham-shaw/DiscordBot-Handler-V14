const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: `purge`,
    description: `Delete an amount of messages`,
    category: `Administration`,
    options: [
        {
            name: `amount`,
            description: `Specify The amount of messages to be deleted`,
            type: 3,
            required: true
        }
    ],

    run: async ( client,interaction ) => {
        let amount = interaction.options.get('amount').value
        let channel = interaction.channel

        const purgeEmbed = new EmbedBuilder()
        .setAuthor({
            name: interaction.member.displayName,
            iconURL: interaction.member.displayAvatarURL(),
        })
        .setColor(`Green`)
        .setTitle(`Deleted`)
        .setDescription(`Deleted ${amount} Messages in ${channel}`)

        channel.bulkDelete(amount)
        .then(
            interaction.reply({
                embeds: [purgeEmbed],
                ephemeral: true
            })
        )
    }
}