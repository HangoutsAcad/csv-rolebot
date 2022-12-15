const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("View the ping of the bot and Discord API."),
    // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
      const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
      interaction.editReply(`🏓 Latency is **${client.ws.ping}**ms. API Latency is **${sent.createdTimestamp - interaction.createdTimestamp}**ms`)
    }
 };
