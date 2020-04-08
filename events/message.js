// Import the command files
const hello = require("../commands/hello");
const kick = require("../commands/kick");
const ban = require("../commands/ban");

// Name of admin role
const admin = 'Administrator';

// Name of helper role
const helper = 'Helper';

// Handle any commands
module.exports = (client, message) => {
	if (message.content.startsWith("!hello")) {
		return hello(message);
	} 
	else if (message.content.startsWith("!kick")) {
		if (message.member.roles.cache.some(role => role.name === admin || role.name == helper)) {
			return kick(message);
		} 
		else {
			return message.reply(`You need to be an ${admin} or ${helper} to use this command!`);
		}
	}
	else if (message.content.startsWith("!ban")) {
		if (message.member.roles.cache.some(role => role.name === admin)) {
			return ban(message);
		} 
		else {
			return message.reply(`You need to be an ${admin} to use this command!`);
		}
	}
};
