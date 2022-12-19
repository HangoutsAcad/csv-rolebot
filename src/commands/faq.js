const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
var colors = require('colors');
const pink = colors.magenta
const log = console.log;

const config = require("../config");
const guildId = config.guildid


module.exports = {
    data: new SlashCommandBuilder()
        .setName("faq")
        .setDescription("Recall a specific FAQ question and direct someone to it.")
        .addStringOption(option =>
        option.setName('question')
            .setDescription('Which question do you want to recall?')
            .setRequired(true)
            .addChoices(
                { name: '1', value: '1' },
                { name: '2', value: '2' },
                { name: '3', value: '3' },
                { name: '4', value: '4' },
                { name: '5', value: '5' },
                { name: '6', value: '6' },
                { name: '7', value: '7' },
                { name: '8', value: '8' },
                { name: '9', value: '9' },
                { name: '10', value: '10' },
            ))
        .addUserOption(option => option.setName('target').setDescription('Target user').setRequired(true)),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        const target = interaction.options.getUser('target');
        const question = interaction.options.getString('question');

        if (question == "1") {
            const embed1 = new EmbedBuilder()
                .setTitle('What is "the sheet?"?')
                .setDescription('<#937910907751776256>')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed1], content: `${target}` });
        } if (question == "2") {
            const embed2 = new EmbedBuilder()
                .setTitle('How do I get on the sheet?')
                .setDescription('<#937910907751776256>')
                .setTimestamp()
                .setFooter({
                    text: 'Check out <#933947725307863051> then post in <#3737006754017181727>.',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed2], content: `${target}` });
        } if (question == "3") {
            const embed3 = new EmbedBuilder()
                .setTitle('How are the ranking calculated?')
                .setDescription('Rankings are calculated off match stats from RiB. They use various statistics from the match to calculate a rating within our server.')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed3], content: `${target}` });
        } if (question == "4") {
            const embed4 = new EmbedBuilder()
                .setTitle('What do the percentages mean?')
                .setDescription('The percentages are a ranking within the sheet. For example if you are at 50%, you are better than 50% of the teams/players on the sheet!')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed4], content: `${target}` });
        } if (question == "5") {
            const embed5 = new EmbedBuilder()
                .setTitle('Why do we use RiB instead of Spike/VLR/etc.')
                .setDescription('We used to use theSpike, but they shut down their stats page so we are unable to use it now. We do not use VLR because they are too picky with their tournaments and we want more coverage for accurate rankings.')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed5], content: `${target}` });
        } if (question == "6") {
            const embed6 = new EmbedBuilder()
                .setTitle('I just played in a tournament but it\'s not on the sheet, when will it be updated?')
                .setDescription('Soon™')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed6], content: `${target}` });
        } if (question == "7") {
            const embed7 = new EmbedBuilder()
                .setTitle('How can I calculate my rating?')
                .setDescription('Send a DM to <@1002371001763504178> and we can calculate a rating for you!')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed7], content: `${target}` });
        } if (question == "8") {
            const embed8 = new EmbedBuilder()
                .setTitle('What is RiB/RunItBack?')
                .setDescription('https://runitback.gg/')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed8], content: `${target}` });
        } if (question == "9") {
            const embed9 = new EmbedBuilder()
                .setTitle('What events are covered on the sheet?')
                .setDescription('Anything on https://rib.gg/events. Generally most tournaments are covered! If there aren\'t any covered, DM <@1002371001763504178> and we can suggest it to be covered.')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed9], content: `${target}` });
        } if (question == "10") {
            const embed10 = new EmbedBuilder()
                .setTitle('I need help/my question isn\'t on here')
                .setDescription('Send a DM to <@1002371001763504178> and a staff member will help you out. Please **do not** DM a staff member.\n')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed10], content: `${target}` });
        }
    }
};
