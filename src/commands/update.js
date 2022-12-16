const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
const path = require('path');
const wait = require('node:timers/promises').setTimeout;

const csvFilePath=('./Hangouts.csv')
const csv=require('csvtojson')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the server's roles."),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        csv({
            ignoreColumns:/(Team|Individual|Calculator)/
        })
            .fromFile(csvFilePath)
            .on('error',(err)=>{
                console.log(err)
                interaction.followUp(err)
            })
            .then((jsonObj)=>{
                let total = 0;

                for (let i = 0; i < jsonObj.length; i++) {
                    total++;
                }

                console.log(total);
                interaction.reply(`${total} items loaded`);
                //interaction.reply(`Converted to array.`)
            })

        const jsonArray=await csv().fromFile(csvFilePath);
        //await console.log(Object.values(jsonArray))
    }
};
