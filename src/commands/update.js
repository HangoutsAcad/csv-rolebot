const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
var colors = require('colors');
const pink = colors.magenta
const log = console.log;

const csvFilePath=('./TEST.csv')
const csv=require('csvtojson')
const config = require("../config");
const guildId = config.guildid


module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the server's roles."),
        //.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        const guild = client.guilds.cache.get(guildId);
        interaction.reply(`Found CSV...loading now...`)
        const message = await interaction.fetchReply();
        csv().fromFile(csvFilePath).then(jsonObj => {

            //console.log(jsonObj)
            // Iterate through each row in the JSON object
            jsonObj.forEach(row => {
                // Get the Discord user and role from the row
                const discordUser = row['Discord'];
                const role = row['Rank ID'];
                const pretty = row['Rank'];

                // Get the actual Discord user object by their username
                const member = guild.members.cache.find(m => m.user.tag === discordUser);


                // Check if the user was found
                if (member) {
                    // Add the role to the user
                    member.roles.add(role);
                    log(`Assigned role` + pink(` ${pretty} (${role})`) + ' to' + pink(` ${discordUser}/${member}`));
                    message.channel.send(`Assigned ${pretty} to ${discordUser}`)
                } else {
                    //log(`Could not assign` + pink(` ${pretty} (${role})`) + ` to` + pink(` ${discordUser}/${member}`));
                }
            });
        });
    }
};
