const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
const path = require('path');
const wait = require('node:timers/promises').setTimeout;

const csvFilePath=('./Takumi.csv')
const csv=require('csvtojson')
const config = require("../config");
let guildId = config.guildid


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

                console.log(`${total} items loaded`);
                interaction.reply(`${total} items loaded`);
                //interaction.reply(`Converted to array.`)


            })

        const jsonArray=await csv().fromFile(csvFilePath);
        //await console.log(Object.values(jsonArray))

        const guild = client.guilds.cache.get(guildId);
        Object.entries(jsonArray).forEach(async (entry) => {
            const member = await guild.members.fetch(entry.Discord)
            const role = await guild.roles.cache.find((role) => role.name === entry.Rank)

            console.log(`${role} added to ${member}`)

            if (role === undefined) {
                console.log('none')
            }

            await member.roles.add(role)
        });
    }
};
