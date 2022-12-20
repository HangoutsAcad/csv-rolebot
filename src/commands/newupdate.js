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
        const rolesToRemove = ['role1', 'role2', 'role3'];

        const roleData = json.find((data) => data.Discord === member.user.username);
        if (roleData) {
            const role = guild.roles.cache.get(roleData.RankID);
            if (role) {
                // remove the roles specified in the list
                rolesToRemove.forEach((roleId) => {
                    const r = guild.roles.cache.get(roleId);
                    if (r) {
                        member.roles.remove(r);
                        log(`${r} removed from ${member}`)
                    }
                });
                // apply the role specified in the CSV file if the member does not already have it

            }
        }

        csv().fromFile(csvFilePath).then((json) => {
            const guild = client.guilds.cache.first();
            const members = guild.members.cache;
            members.forEach((member) => {

                if (!member.roles.cache.has(role.id)) {
                    member.roles.add(role);
                    log(`${r} added to ${member}`)
                }
            });
        });

    }
}

//log(`Assigned role` + pink(` ${pretty} (${role})`) + ' to' + pink(` ${discordUser}/${member}`));
//message.channel.send(`Assigned ${pretty} to ${discordUser}`)