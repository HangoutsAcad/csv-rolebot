const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const wait = require('node:timers/promises').setTimeout;

const stream = fs.createReadStream('./Hangouts.csv');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the server's roles."),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        csv.parseStream(stream)
            .on('error', error => console.error(error))
            .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
            .on('end', rowCount => interaction.reply(`Parsed ${rowCount} rows`) & console.log(`Parsed ${rowCount} rows`));

    }
};
