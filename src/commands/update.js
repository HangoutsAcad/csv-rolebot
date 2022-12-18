const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');

const csvFilePath=('./Takumi.csv')
const csv=require('csvtojson')
const config = require("../config");
const guildId = config.guildid


module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the server's roles."),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        const guild = client.guilds.cache.get(guildId);
        csv({
            ignoreColumns:/(Team|Individual|Calculator)/
        }).fromFile(csvFilePath).then(rows => {
            rows.forEach(row => {
                const member = guild.members.cache.find(m => m.user.username === row.Discord);
                console.log(`Found ${member}`)
                if (member) {
                    const role = guild.roles.cache.find(r => r.name === row.Rank);
                    console.log(`Found ${role}`)
                    if (role) {
                        member.roles.set([role]).catch(console.error);
                        console.log(`Appled ${role} to ${member}`)
                    }
                }
            });
        });
    }
};
