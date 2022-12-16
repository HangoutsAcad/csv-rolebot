const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the server's roles."),
    // https://discordjs.guide/interactions/slash-commands.html#options
    //run: async (client, interaction) => {
        //await interaction.deferReply();
        //fs.createReadStream(path.resolve('./', 'Hangouts.csv'))
            //.pipe(csv.parse({ headers: true }))
            //.on('error', error => console.error(error))
            //.on('error', error => interaction.reply(`${error}`))
            //.on('data', row => console.log(row))
            //on('end', rowCount => interaction.reply(`Parsed ${rowCount} rows`));
    //}
};
