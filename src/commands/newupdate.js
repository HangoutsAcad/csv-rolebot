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
        const guild = client.guilds.cache.get(guildId);
        interaction.reply(`Found CSV...loading now...`)
        const message = await interaction.fetchReply();
        csv().fromFile(csvFilePath).then(jsonObj => {

            const discordUser = row['Discord'];
            const role = row['Rank ID'];
            const pretty = row['Rank'];

            client.guilds.cache.first().members.cache.forEach((member) => {
                const user = json.find((row) => discordUser === member.id);
                if (user) {
                    const role = member.guild.roles.cache.find((r) => r.name === user.role);
                    if (!member.roles.cache.has(role.id)) {
                        const rolesToRemove = ['Premier', 'Challenger', 'Advanced', 'Intermediate', 'Contender'];
                        rolesToRemove.forEach((roleName) => {
                            const roleToRemove = member.guild.roles.cache.find((r) => r.name === roleName);
                            member.roles.remove(roleToRemove);
                        });
                        member.roles.add(role);
                    }
                    }
                })
            })
        }
}

//log(`Assigned role` + pink(` ${pretty} (${role})`) + ' to' + pink(` ${discordUser}/${member}`));
//message.channel.send(`Assigned ${pretty} to ${discordUser}`)