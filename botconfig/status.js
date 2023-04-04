const { ActivityType } = require('discord.js');

const options = [
    {
        text: `With {name} | {commands} Commands`,
        type: ActivityType.Playing,
        status: `online`
    }, 
    {
        text: `{membercount} Members`,
        type: ActivityType.Watching,
        status: `online`
    },
    {
        text: `New Features`,
        type: ActivityType.Listening,
        status: `online`
    }
]

module.exports = options
