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

    }
}

//log(`Assigned role` + pink(` ${pretty} (${role})`) + ' to' + pink(` ${discordUser}/${member}`));
//message.channel.send(`Assigned ${pretty} to ${discordUser}`)