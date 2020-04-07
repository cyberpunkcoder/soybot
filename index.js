// Load discord token from enviroment variable
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

// Require the discord and file system module
const Discord = require('discord.js');
const fs = require("fs");

// Create a new discord client
const client = new Discord.Client();

// When client is ready run this module
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
	if (message.content === "ping") {
		message.reply("Pong!");  
	}
	if (message.content.startsWith("!kick")) {
	
		const member = message.mentions.members.first();
	
		if (!member) {
			return message.reply(`Who are you trying to kick? You must mention a user.`);
		}
			if (!member.kickable) {
			return message.reply(`I can't kick this user. Sorry!`);
		}

		return member
			.kick()
			.then(() => message.reply(`${member.user.tag} was kicked.`))
			.catch(error => message.reply(`Sorry, an error occured.`));
	}
});

// Login to discord bot
client.login(token);

