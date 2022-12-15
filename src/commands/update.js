const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the server's roles."),
    // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        fs.createReadStream(path.resolve('./', 'Hangouts.csv'))
            .pipe(csv.parse({ headers: true }))
            .on('error', error => console.error(error))
            .on('data', row => console.log(row))
            .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
        interaction.reply(`Done`)
    }
};
