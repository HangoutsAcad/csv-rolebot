const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');
var colors = require('colors');
const pink = colors.magenta
const log = console.log;

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
        csv().fromFile(csvFilePath).then(jsonObj => {
            //console.log(jsonObj)
            // Iterate through each row in the JSON object
            jsonObj.forEach(row => {
                // Get the Discord user and role from the row
                const discordUser = row['Discord'];
                const role = row['Rank ID'];

                // Get the actual Discord user object by their username
                const member = guild.members.cache.find(m => m.user.tag === discordUser);

                // Check if the user was found
                if (member) {
                    // Add the role to the user
                    member.roles.add(role);
                    log(`Assigned role` + pink(` ${role}`) + 'to' + pink(` ${discordUser}/${member}`));
                } else {
                    log(`Could not assign` + pink(` ${role}`) + `to` + pink(` ${discordUser}/${member}`));
                }
            });
        });
    }
};
