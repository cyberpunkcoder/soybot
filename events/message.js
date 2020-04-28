// Import command files
const ban = require("../commands/ban");
const hello = require("../commands/hello");
const kick = require("../commands/kick");
const removeall = require("../commands/removeall");

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
	else if (message.content.startsWith("!removeall")) {
		return removeall(client, message);
	}
};
