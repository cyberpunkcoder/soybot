// Import command files
const ban = require("../commands/ban");
const hello = require("../commands/hello");
const kick = require("../commands/kick");
const purge = require("../commands/purge");

// Handle any commands
module.exports = (client, message) => {
	if (message.content.startsWith("!ban")) {
		return ban(message);
	}
	else if (message.content.startsWith("!hello")) {
		return hello(message);
	} 
	else if (message.content.startsWith("!kick")) {
		return kick(message);
	}
	else if (message.content.startsWith("!purge")) {
		return purge(client, message);
	}

};
