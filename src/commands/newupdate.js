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

const filelog = require('log-to-file');
const moment = require("moment");
const timestamp = moment().format("DD-MM-HH_mm-ss")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("newupdate")
        .setDescription("Update the server's roles."),
    //.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {

        csv()
            .fromFile(csvFilePath)
            .then(jsonObj => {
                // Next, we need to get a list of all the members of the server
                interaction.guild.members.fetch().then(members => {
                    // Now we can iterate through each member and see if they are in the CSV file
                    members.forEach(member => {
                        // Check if the member's username is in the CSV file
                        const csvMember = jsonObj.find(m => m.username === member.user.username);
                        if (csvMember) {
                            // If the member is in the CSV file, check if they have the correct role
                            const roleName = csvMember.role;
                            const role = interaction.guild.roles.cache.find(r => r.name === roleName);
                            if (!member.roles.cache.has(role.id)) {
                                // If the member does not have the correct role, remove all of their current roles
                                // except for the one that is specified in the CSV file
                                const rolesToRemove = member.roles.cache.filter(r => r.name !== roleName);
                                member.roles.remove(rolesToRemove).catch(console.error);
                                // Now add the correct role to the member
                                member.roles.add(role).catch(console.error);
                            }
                        }
                    });
                });
            })
    }
}

//log(`Assigned role` + pink(` ${pretty} (${role})`) + ' to' + pink(` ${discordUser}/${member}`));
//message.channel.send(`Assigned ${pretty} to ${discordUser}`)