const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    setInterval(() => client.user.setActivity({ name: 'for meowers', type: ActivityType.Listening }), 22000);
}};