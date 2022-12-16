const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
const path = require('path');
const wait = require('node:timers/promises').setTimeout;

const csvFilePath=('./Hangouts.csv')
const csv=require('csvtojson')
const converter=csv({
    noheader:false,
    ignoreColumns:/(Team|Individual|Calculator)/,
})

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the server's roles."),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj)=>{
                console.log(jsonObj);
                interaction.reply(`Converted`)

            })
            .on('error',(err)=>{
                console.log(err)
                interaction.reply(err)
            })
        const jsonArray=await csv().fromFile(csvFilePath);
    }
};
