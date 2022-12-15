const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("View the ping of the bot and Discord API."),
    // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
      interaction.reply(`🏓 Latency is **${Date.now() - interaction.createdTimestamp}**ms. API Latency is **${Math.round(client.ws.ping)}**ms`)
    }
 };
