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
        csv().fromFile('./Takumi.csv').then(jsonObj => {
            // Iterate through each row in the JSON object
            jsonObj.forEach(row => {
                // Get the Discord user and role from the row
                const discordUser = row['Discord'];
                const role = row['Rank'];

                // Get the actual Discord user object by their username
                const member = guild.members.cache.find(m => m.user.username === discordUser);

                // Check if the user was found
                if (member) {
                    // Add the role to the user
                    member.roles.add(role);
                    console.log(`Assigned role ${role} to ${discordUser}`);
                } else {
                    console.log(`Could not find user ${discordUser}`);
                }
            });
        });
    }
};
