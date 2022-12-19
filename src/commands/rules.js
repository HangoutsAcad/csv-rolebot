const { EmbedBuilder, PermissionsBitField, ActionRowBuilder, Events, StringSelectMenuBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
var colors = require('colors');
const pink = colors.magenta
const log = console.log;

const config = require("../config");
const guildId = config.guildid


module.exports = {
    data: new SlashCommandBuilder()
        .setName("rules")
        .setDescription("Recall a specific FAQ question and direct someone to it.")
        .addStringOption(option =>
            option.setName('category')
                .setDescription('Which category is the rule you want to reference?')
                .setRequired(true)
                .addChoices(
                    { name: 'General', value: 'gen' },
                    { name: 'Role Requests', value: 'rolereq' },
                    { name: 'Tournament Organizers', value: 'TOs' },
                ))
        .addStringOption(option =>
            option.setName('rule')
                .setDescription('Which rule do you want to reference?')
                .setRequired(true)
                .addChoices(
                    { name: 'Bigotry', value: '1' },
                    { name: 'Leaking', value: '2' },
                    { name: 'Failure to upkeep information', value: '3' },
                    { name: 'Promotion', value: '4' },
                    { name: 'Scrim etiquette', value: '5' },
                ))
        .addUserOption(option => option.setName('target').setDescription('Target user').setRequired(true)),
    // https://discordjs.guide/interactions/slash-commands.html#options
    run: async (client, interaction) => {
        const target = interaction.options.getUser('target');
        const category = interaction.options.getString('category');
        const rule = interaction.options.getString('rule');

        if (category == "gen") {
            if ( rule == "1") {
            const embed = new EmbedBuilder()
                .setTitle('Rule 1.1')
                .setDescription('Sexism, racism, slurs, derogatory words, toxicity etc. will constitute an immediate ban from Hangouts.')
                .setTimestamp()
                .setFooter({
                    text: 'Made with ♥️ by the Hangouts Staff Team',
                    iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                })
            interaction.reply({ embeds: [embed], content: `${target}` });
        } if ( rule == "2") {
                const embed = new EmbedBuilder()
                    .setTitle('Rule 1.2')
                    .setDescription('Leaking VODs, strats, comps, roster moves, etc. will result in suspension or bans.')
                    .setTimestamp()
                    .setFooter({
                        text: 'Made with ♥️ by the Hangouts Staff Team',
                        iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                    })
                interaction.reply({ embeds: [embed], content: `${target}` });
            } if ( rule == "3") {
                const embed = new EmbedBuilder()
                    .setTitle('Rule 1.3')
                    .setDescription('Failure to upkeep information will result in no roles being given. This includes, but is not limited to:\n1. Rosters (<#1052004658526289940>)\n2. Your nickname (EX: CXC | ashie)')
                    .setTimestamp()
                    .setFooter({
                        text: 'Made with ♥️ by the Hangouts Staff Team',
                        iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                    })
                interaction.reply({ embeds: [embed], content: `${target}` });
            } if ( rule == "4") {
                const embed = new EmbedBuilder()
                    .setTitle('Rule 1.4')
                    .setDescription('Promoting account boosting, sharing, selling, or any black market activity will result in a ban.')
                    .setTimestamp()
                    .setFooter({
                        text: 'Made with ♥️ by the Hangouts Staff Team',
                        iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                    })
                interaction.reply({ embeds: [embed], content: `${target}` });
            } if ( rule == "5") {
                const embed = new EmbedBuilder()
                    .setTitle('Rule 1.5')
                    .setDescription('Before you scrim, please view <#937903762545197086>. Failure to comply may result in a ban.')
                    .setTimestamp()
                    .setFooter({
                        text: 'Made with ♥️ by the Hangouts Staff Team',
                        iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                    })
                interaction.reply({ embeds: [embed], content: `${target}` });
            }} if (category == "rolereq") {
            if ( rule == "1") {
                const embed = new EmbedBuilder()
                    .setTitle('Rule 2.1')
                    .setDescription('If you request a role as an individual, this is not for booking scrims. You can and will be warned and have your roles taken away if this is done.')
                    .setTimestamp()
                    .setFooter({
                        text: 'Made with ♥️ by the Hangouts Staff Team',
                        iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                    })
                interaction.reply({ embeds: [embed], content: `${target}` });
            } if ( rule == "2") {
                const embed = new EmbedBuilder()
                    .setTitle('Rule 2.2')
                    .setDescription('If you manage multiple teams, you are only to book in the correct roles for the correct teams.\n' +
                        'For example, if you manage a Premier and an Advanced team, you cannot book for the Advanced team any higher than Advanced.')
                    .setTimestamp()
                    .setFooter({
                        text: 'Made with ♥️ by the Hangouts Staff Team',
                        iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                    })
                interaction.reply({ embeds: [embed], content: `${target}` });
            } if ( rule == "3") {
                const embed = new EmbedBuilder()
                    .setTitle('Rule 2.3')
                    .setDescription('Only teams with a set core of three are able to request roles.\n' +
                        'If you have a core of two or one, you are only able to book scrims in Open off the bat. ' +
                        'If you are interested in calculating your project roster\'s percentage, you can contact <@1002371001763504178> to get it calculated as a private team on the sheet. ' +
                        '**NOTE**: you must update the roster when you are bringing on different players to make sure you are booking in the correct category.')
                    .setTimestamp()
                    .setFooter({
                        text: 'Made with ♥️ by the Hangouts Staff Team',
                        iconURL: 'https://media.discordapp.net/attachments/736971119030173709/1009733598624096357/unknown.png'
                    })
                interaction.reply({ embeds: [embed], content: `${target}` });
            }  if ( rule == "4") {
                interaction.reply({ content: 'This rule does not exist.', ephemeral: true });
            } if ( rule == "5") {
                interaction.reply({ content: 'This rule does not exist.', ephemeral: true });
            }
        } if (category == "TOs") {

        }
    }
};
