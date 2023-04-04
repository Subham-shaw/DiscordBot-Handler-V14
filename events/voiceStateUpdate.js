const Permissions = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = async (client, oldState, newState) => {


    // Stage Channel self suspress
    if (newState.id == client.user.id && newState.channelId && newState.channel.type == "GUILD_STAGE_VOICE" && newState.suppress) {
        if (newState.channel?.permissionsFor(newState.guild.me)?.has(Permissions.FLAGS.MUTE_MEMBERS)) {
            await newState.guild.me.voice.setSuppressed(false).catch(() => null);
        }
    }

    // Destroy connection if channel gets emtpy  --  Remove The Code If Not Required
    // if (newState.id == client.user.id) return;

    function stateChange(one, two) {
        if (one === false && two === true || one === true && two === false) return true;
        else return false;
    }
    const o = oldState, n = newState;
    if (stateChange(o.streaming, n.streaming) ||
        stateChange(o.serverDeaf, n.serverDeaf) ||
        stateChange(o.serverMute, n.serverMute) ||
        stateChange(o.selfDeaf, n.selfDeaf) ||
        stateChange(o.selfMute, n.selfMute) ||
        stateChange(o.selfVideo, n.selfVideo) ||
        stateChange(o.suppress, n.suppress)) return;

    // Channel Joins - Console It
    if (!o.channelId && n.channelId) {
        return console.log(`Bot Joined ${n.channelId} in ${n.guild.id}!`)

    }
}