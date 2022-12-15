const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    setInterval(() => client.user.setActivity({ name: 'meow', type: ActivityType.Streaming }), 22000);
}};